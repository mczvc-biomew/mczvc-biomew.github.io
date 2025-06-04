import { createAnalyser, createAudioContext, createFrequencyData, connectBufferSourceNodeToAnalyser, loadSound, decodeAudioData, playSound, pauseSound, dispose } from './audioLib';
import { fillText, renderLounge, renderSongText, renderTime, setCanvasGradientStyles } from './visualsLib';

export type VisualizerConfig = {
    autoplay: boolean,
    loop: Ref<boolean>,
    canvas: string,
    title: string,
    author: string,
    audioSrc: string,
    style: keyof typeof TYPE,
    barWidth: number,
    barHeight: number,
    barSpacing: number,
    barColor: string,
    shadowBlur:number,
    shadowColor: string,
    font: string[],
    fontSize: number,
    clickHandler: ClickHandler,
    onMusicEnded: MusicEndHandler,
    fetchBufferSrc: ((src: string) => any) | null
}

type ClickHandler = (state: any, e: MouseEvent) => void;
type MusicEndHandler = Function;
let timingInterval: NodeJS.Timeout | null;
let animationFrames: Array<number> = [];

const TYPE = {
    'lounge': 'renderLounge'
    }

export class Visualizer {
    isPlaying: boolean;
    loading: boolean;
    loaded: boolean;
    disposed: boolean;
    public state: 'not-initialized' | 'loading' | 'loaded' | 'playing' | 'paused' | 'error' | 'disposed' = 'not-initialized';
    private analyser: AnalyserNode | null;
    private sourceNode: AudioBufferSourceNode | null;
    private canvasCtx: CanvasRenderingContext2D;
    private audioContext: AudioContext | null;
    private frequencyData: Uint8Array<ArrayBufferLike> | [];
    private duration: number;
    private minutes: string;
    private seconds: string;
    private gradient: CanvasGradient | null;

    private autoplay: boolean;
    private loop: Ref<boolean>;
    private canvas: HTMLElement;
    private title: string;
    private author: string;
    private audioSrc: string | null;
    private style: keyof typeof TYPE;
    private barWidth: number;
    private barHeight: number;
    private barSpacing: number;
    private barColor: string;
    private shadowBlur:number;
    private shadowColor: string;
    private font: string[];
    private fontSize: number;
    private _onClick: ((event: MouseEvent) => void) | null ;
    private clickHandler: ClickHandler;
    private onMusicEnded: MusicEndHandler;
    private fetchBufferSrc: ((src: string) => any) | null

    constructor ( 
        cfg: VisualizerConfig
    ) {
        this.isPlaying = false;
        this.autoplay = cfg.autoplay || false;
        this.loop = 
            cfg.loop.value !== undefined ? 
            cfg.loop : 
            ((cfg.loop.value === undefined && cfg.loop) 
            || ref(false));
        this.canvas = document.getElementById(cfg.canvas)!;
        this.canvasCtx = (this.canvas as HTMLCanvasElement)!.getContext('2d')!;
        this.author = cfg.author || '';
        this.title = cfg.title || '';
        this.audioContext = null;
        this.analyser = null;
        this.sourceNode = null;
        this.frequencyData = [];
        this.audioSrc = cfg.audioSrc || null;
        this.duration = 0;
        this.minutes = '00';
        this.seconds = '00';
        this.style = cfg.style || 'lounge';
        this.barWidth = cfg.barWidth || 2;
        this.barHeight = cfg.barHeight || 2;
        this.barSpacing = cfg.barSpacing || 5;
        this.barColor = cfg.barColor || '#ffffff';
        this.shadowBlur = cfg.shadowBlur || 10;
        this.shadowColor = cfg.shadowColor || '#ffffff';
        this.font = cfg.font || ['12px', 'Helvetica'];
        this.fontSize = cfg.fontSize || 12;
        this.gradient = null;
        this.clickHandler = cfg.clickHandler || null;
        this._onClick = null;
        this.loading = false;
        this.loaded = false;
        this.disposed = false;
        this.onMusicEnded = cfg.onMusicEnded || null;
        this.fetchBufferSrc = cfg.fetchBufferSrc || null;
    }

    public playSound(buffer: AudioBuffer | null) {
        const status = playSound(this.audioContext!, this.sourceNode!, buffer);
        this.isPlaying = true;
        this.state = 'playing';
        if (status?.ret) return status.ret;
        this.resetTimer();
        this.startTimer();
        this.renderFrame();
    }

    public pauseSound() {
        pauseSound(this.audioContext!);
        this.isPlaying = false;
        this.state = 'paused';
    }

    private startTimer() {
        var _this = this;
        timingInterval = setInterval(function () {
            if (_this.isPlaying) {
                var now = new Date(_this.duration);
                var min = now.getHours();
                var sec = now.getMinutes();
                _this.minutes = (min < 10) ? '0' + min: min.toString();
                _this.seconds = (sec < 10) ? '0' + sec: sec.toString();
                _this.duration = now.setMinutes(sec + 1);

            }
        }, 1000); 
    }

    public resetTimer() {
        var time = new Date(0, 0);
        this.duration = time.getTime();
    }

    private onError (e: any) {
        console.info('Error decoding audio file. --', e);
    }

    private renderLounge() {
        const canvas = this.canvas as HTMLCanvasElement;

        renderLounge(this.canvasCtx, canvas, 140, 
            this.barWidth, this.barHeight, this.barSpacing,
        this.frequencyData as Uint8Array<ArrayBuffer>);
    }

    private renderFrame () {
        this.cancelAnimationFrames();
        animationFrames.push( requestAnimationFrame(this.renderFrame.bind(this)) );

        if (!this.isPlaying) return;

        this.analyser!.getByteFrequencyData(this.frequencyData as Uint8Array<ArrayBuffer>);

        const canvas = this.canvas as HTMLCanvasElement;

        this.canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

        renderTime(this.canvasCtx, canvas, this.minutes, this.seconds, 10, 80);
        renderSongText(this.canvasCtx, canvas, this.title, this.author, 10, this.font[1], this.fontSize);
        this.canvasCtx.font = this.font.join(' ');
        
        const render = this.renderByStyleType();
        render.bind(this)();
    }

    [key: string]: any;

    private renderByStyleType() {
        return this[TYPE[this.style]];
        // return this[TYPE[this.style]]();
    }

    private cancelAnimationFrames() {
        while (animationFrames.length > 0) {
            cancelAnimationFrame(animationFrames.pop()!)
        }
    }

    private removeListeners() {

        if (this._onClick !== null) {
            document.documentElement.removeEventListener(
                'click', this._onClick
            );
        }
        this.cancelAnimationFrames();
    }
    private bindEvents() {
        const _this = this;

        this.removeListeners();

        this._onClick = (me: MouseEvent) => {
            if (me.target === _this.canvas) {
                me.stopPropagation();

                if (!_this.disposed) {
                    _this.clickHandler(_this.audioContext!.state, me);
                }
            }

        }

        document.documentElement.addEventListener(
            'click', this._onClick
        );

        if (_this.autoplay) {
            this.loadSound();
        }
    }

    public loadSound() {
        if (!this.loading && !this.loaded) {
            this.loading = true;
            this.state = 'loading';

            const canvas = this.canvas as HTMLCanvasElement;

            fillText(this.canvasCtx, canvas.width / 2 + 10, canvas.height / 2, this.font[1], this.fontSize);

            const error = (reason: any) => {
                this.loaded = false;
                this.state = 'error';
                console.error(reason);
                console.warn('Error loading sound.');
            }

            const decode = (buffer: any) => {
                decodeAudioData( this.audioContext!, buffer /*this.audioBuffer!*/, this.playSound.bind(this), this.onError.bind(this)
                ).then( () => {
                    this.loaded = true;
                    this.state = 'loaded';
                } ).catch( (reason) => {
                    error(reason);
                });
            }

            if (this.fetchBufferSrc !== null) {
                this.fetchBufferSrc(this.audioSrc || '').then( (buffer: ArrayBuffer) => {
                    if (buffer === null) {
                        error('buffer is null');
                        return null;
                    }
                    decode(buffer);
                });
            } else {
                loadSound(this.audioSrc!).then( (buffer) => {
                    this.loading = false;
                    decode(buffer);
                });
            }
        }
    }

    public initialize() {
        this.gradient = setCanvasGradientStyles(this.canvasCtx, this.barColor, this.shadowBlur, this.shadowColor, this.font.join(' '));
    }

    public dispose() {
        const canvas = this.canvas as HTMLCanvasElement;

        this.canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
        clearInterval(timingInterval!);
        this.removeListeners();

        if (!this.loaded) return;

        this.isPlaying = false;
        this.resetTimer();
        dispose(this.audioContext!, this.sourceNode!);
        this.audioContext = null;
        this.disposed = true;
        this.state = 'disposed';
    }

    private static _createVisualizer(cfg: VisualizerConfig) {
        const visualizer = new Visualizer(cfg);
        return async function () {
            visualizer.audioContext = await createAudioContext();
            visualizer.analyser = createAnalyser(visualizer.audioContext);
            visualizer.frequencyData = createFrequencyData(visualizer.analyser);
            visualizer.sourceNode = connectBufferSourceNodeToAnalyser(
                visualizer.analyser, visualizer.audioContext, visualizer.loop.value, 
                () => {
                    clearInterval(timingInterval!);
                    visualizer.sourceNode?.disconnect();
                    visualizer.resetTimer();
                    visualizer.isPlaying = false;
                    if (visualizer.loop.value) {
                        visualizer.sourceNode = visualizer.audioContext!.createBufferSource();
                    }
                    visualizer.onMusicEnded();
                }
            );
            visualizer.initialize();
            visualizer.bindEvents();

            return visualizer;
        }
    }

    public static getInstance(cfg: VisualizerConfig) {
        return this._createVisualizer(cfg)();
    }
}
