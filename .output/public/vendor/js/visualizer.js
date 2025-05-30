var AUDIO = AUDIO || {};

AUDIO.VISUALIZER = (function () {
    'use strict';

    var INTERVAL = null;
    var FFT_SIZE = 512;
    var TYPE = {
            'lounge': 'renderLounge'
        };

    /**
     * @description
     * Visualizer constructor.
     *
     * @param {Object} cfg
     */

    function Visualizer (cfg) {
        this.isPlaying = false;
        this.autoplay = cfg.autoplay || false;
        this.loop = cfg.loop.value !== undefined ? cfg.loop : ((cfg.loop.value === undefined && cfg.loop) || false);
        this.audio = document.getElementById(cfg.audio) || {};
        this.audioBuffer = cfg.audioBuffer || null;
        this.canvas = document.getElementById(cfg.canvas) || {};
        this.canvasCtx = this.canvas.getContext('2d') || null;
        this.author = this.audio.getAttribute('data-author') || '';
        this.title = this.audio.getAttribute('data-title') || '';
        this.ctx = null;
        this.analyser = null;
        this.sourceNode = null;
        this.frequencyData = [];
        this.audioSrc = null;
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
        this.loading = false;
        this.onMusicEnded = cfg.onMusicEnded || null;
    }

    /**
     * @description
     * Set current audio context.
     *
     * @return {Object}
     */
    Visualizer.prototype.setContext = function () {
        try {
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new window.AudioContext();
            return this;
        } catch (e) {
            console.info('Web Audio API is not supported.', e);
        }
    };

    /**
     * @description
     * Set buffer analyser.
     *
     * @return {Object}
     */
    Visualizer.prototype.setAnalyser = function () {
        this.analyser = this.ctx.createAnalyser();
        this.analyser.smoothingTimeConstant = 0.6;
        this.analyser.fftSize = FFT_SIZE;
        return this;
    };

    /**
     * @description
     * Set frequency data.
     *
     * @return {Object}
     */
    Visualizer.prototype.setFrequencyData = function () {
        this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount);
        return this;
    };

    /**
     * @description
     * Set source buffer and connect processor and analyser.
     *
     * @return {Object}
     */
    Visualizer.prototype.setBufferSourceNode = function () {
        this.sourceNode = this.ctx.createBufferSource();
        this.sourceNode.loop = this.loop.value || (this.loop.value === undefined && this.loop);
        this.sourceNode.connect(this.analyser);
        this.sourceNode.connect(this.ctx.destination);

        this.sourceNode.onended = function () {
            clearInterval(INTERVAL);
            this.sourceNode.disconnect();
            this.resetTimer();
            this.isPlaying = false;
            if (this.loop.value || (this.loop.value === undefined && this.loop)) {
                this.sourceNode = this.ctx.createBufferSource();
            }
            this.onMusicEnded();
        }.bind(this);

        return this;
    };

    /**
     * @description
     * Set current media source url.
     *
     * @return {Object}
     */
    Visualizer.prototype.setMediaSource = function () {
        this.audioSrc = this.audio.getAttribute('src');
        return this;
    };

    /**
     * @description
     * Set canvas gradient color.
     *
     * @return {Object}
     */
    Visualizer.prototype.setCanvasStyles = function () {
        this.gradient = this.canvasCtx.createLinearGradient(0, 0, 0, 300);
        this.gradient.addColorStop(1, this.barColor);
        this.canvasCtx.fillStyle = this.gradient;
        this.canvasCtx.shadowBlur = this.shadowBlur;
        this.canvasCtx.shadowColor = this.shadowColor;
        this.canvasCtx.font = this.font.join(' ');
        this.canvasCtx.textAlign = 'center';
        return this;
    };

    /**
     * @description
     * Bind click events.
     *
     * @return {Object}
     */
    Visualizer.prototype.bindEvents = function () {
        var _this = this;

        document.documentElement.addEventListener('click', (e) => {
            if (e.target === _this.canvas) {
                e.stopPropagation();

                if (!_this.disposed) {
                    _this.clickHandler?.(_this.ctx.state, e);
                }
                
            }
        });

        if (_this.autoplay) {
            _this.loadSound();
        }

        return this;
    };

    /**
     * @description
     * Load sound file.
     */
    Visualizer.prototype.loadSound = function () {
        if (!this.loading && !this.loaded) {
            this.loading = true;

            var req = new XMLHttpRequest();
            req.open('GET', this.audioSrc, true);
            req.responseType = 'arraybuffer';

            this.canvasCtx.font = 'bold 40px ' + this.font[1];
            this.canvasCtx.fillText('Music OFF', this.canvas.width / 2 + 10, this.canvas.height / 2);

            // this.loading = false;
            // try {
            //     this.ctx.decodeAudioData(this.audioBuffer, this.playSound.bind(this), this.onError.bind(this));
            //     this.loaded = true;
            // } catch (error) {
            //     console.error(error);
            //     console.warn('Error loading sound.')
            // }

            req.onload = function () {
                this.loading = false;
                try {
                    this.ctx.decodeAudioData(req.response, this.playSound.bind(this), this.onError.bind(this));
                    this.loaded = true;
                } catch (error) {
                    console.error(error);
                    console.warn('Error loading sound.')
                }
            }.bind(this);

            req.send();
        }
    };

    /**
     * @description
     * Play sound from the given buffer.
     *
     * @param  {Object} buffer
     */
    Visualizer.prototype.playSound = function (buffer) {

        if (!this.ctx) throw 'SOUND CONTEXT ERR'

        this.isPlaying = true;
        if (this.ctx.state === 'suspended') {
            return this.ctx.resume();
        }

        this.sourceNode.buffer = buffer;
        this.sourceNode.start(0);
        this.resetTimer();
        this.startTimer();
        this.renderFrame();
    };

    /**
     * @description
     * Pause current sound.
     */
    Visualizer.prototype.pauseSound = function () {
        this.ctx.suspend();
        this.isPlaying = false;
    };

    /**
     * @description
     * Start playing timer.
     */
    Visualizer.prototype.startTimer = function () {
        var _this = this;
        INTERVAL = setInterval(function () {
            if (_this.isPlaying) {
                var now = new Date(_this.duration);
                var min = now.getHours();
                var sec = now.getMinutes();
                _this.minutes = (min < 10) ? '0' + min : min;
                _this.seconds = (sec < 10) ? '0' + sec : sec;
                _this.duration = now.setMinutes(sec + 1);
            }
        }, 1000);
    };

    /**
     * @description
     * Reset time counter.
     */
    Visualizer.prototype.resetTimer = function () {
        var time =  new Date(0, 0);
        this.duration = time.getTime();
    };

    /**
     * @description
     * On audio data stream error fn.
     *
     * @param  {Object} e
     */
    Visualizer.prototype.onError = function (e) {
        console.info('Error decoding audio file. -- ', e);
    };

    /**
     * @description
     * Render frame on canvas.
     */
    Visualizer.prototype.renderFrame = function () {
        requestAnimationFrame(this.renderFrame.bind(this));

        if (!this.isPlaying) return;

        this.analyser.getByteFrequencyData(this.frequencyData);

        this.canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.renderTime();
        this.renderText();
        this.renderByStyleType();
    };

    /**
     * @description
     * Render audio author and title.
     */
    Visualizer.prototype.renderText = function () {
        var cx = this.canvas.width / 2;
        var cy = this.canvas.height / 2;
        var correction = 10;

        this.canvasCtx.font = 'bold ' + this.fontSize + 'px ' + this.font[1];
        this.canvasCtx.textBaseline = 'top';
        this.canvasCtx.fillText('by ' + this.author, cx + correction, cy);
        this.canvasCtx.font = 'bold ' + this.fontSize + 'px ' + this.font[1];
        this.canvasCtx.textBaseline = 'bottom';
        this.canvasCtx.fillText(this.title, cx + correction, cy);
        this.canvasCtx.font = this.font.join(' ');
    };

    /**
     * @description
     * Render audio time.
     */
    Visualizer.prototype.renderTime = function () {
        var time = this.minutes + ':' + this.seconds;
        this.canvasCtx.fillText(time, this.canvas.width / 2 + 10, this.canvas.height / 2 + 80);
    };

    /**
     * @description
     * Render frame by style type.
     *
     * @return {Function}
     */
    Visualizer.prototype.renderByStyleType = function () {
        return this[TYPE[this.style]]();
    };

    /**
     * @description
     * Render lounge style type.
     */
    Visualizer.prototype.renderLounge = function () {
        var cx = this.canvas.width / 2;
        var cy = this.canvas.height / 2;
        var radius = 140;
        var maxBarNum = Math.floor((radius * 2 * Math.PI) / (this.barWidth + this.barSpacing));
        var slicedPercent = Math.floor((maxBarNum * 25) / 100);
        var barNum = maxBarNum - slicedPercent;
        var freqJump = Math.floor(this.frequencyData.length / maxBarNum);

        for (var i = 0; i < barNum; i++) {
            var amplitude = this.frequencyData[i * freqJump];
            var alfa = (i * 2 * Math.PI ) / maxBarNum;
            var beta = (3 * 45 - this.barWidth) * Math.PI / 180;
            var x = 0;
            var y = radius - (amplitude / 12 - this.barHeight);
            var w = this.barWidth;
            var h = amplitude / 6 + this.barHeight;

            this.canvasCtx.save();
            this.canvasCtx.translate(cx + this.barSpacing, cy + this.barSpacing);
            this.canvasCtx.rotate(alfa - beta);
            this.canvasCtx.fillRect(x, y, w, h);
            this.canvasCtx.restore();
        }
    };

    /**
     * @description
     * Dispose (close) music
     */
    Visualizer.prototype.dispose = function () {
        this.canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        clearInterval(INTERVAL);

        if (!this.loaded) return;

        this.sourceNode.disconnect();
        this.resetTimer();
        this.isPlaying = false;
        this.ctx.close().catch( (reason) => {
            console.error(reason);
            console.warn('Error closing sound.')
        } );
        this.ctx = null;
        this.disposed = true;
    }

    /**
     * @description
     * Create visualizer object instance.
     *
     * @param  {Object} cfg
     * {
     *     autoplay: <Bool>,
     *     loop: <Bool>,
     *     audio: <String>,
     *     canvas: <String>,
     *     style: <String>,
     *     barWidth: <Integer>,
     *     barHeight: <Integer>,
     *     barSpacing: <Integer>,
     *     barColor: <String>,
     *     shadowBlur: <Integer>,
     *     shadowColor: <String>,
     *     font: <Array>
     * }
     * @return {Function}
     * @private
     */
    function _createVisualizer (cfg) {
        var visualizer = new Visualizer(cfg);

        return function () {
            visualizer
                .setContext()
                .setAnalyser()
                .setFrequencyData()
                .setBufferSourceNode()
                .setMediaSource()
                .setCanvasStyles()
                .bindEvents();

            return visualizer;
        };
    }

    /**
     * @description
     * Get visualizer instance.
     *
     * @param  {Object} cfg
     * @return {Object}
     * @public
     */
    function getInstance (cfg) {
        return _createVisualizer(cfg)();
    }

    /**
     * @description
     * Visualizer module API.
     *
     * @public
     */
    return {
        getInstance: getInstance,
    };
})();

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    window.__lazyMusicLoader = new Promise( (resolve, reject) => {
        resolve( () => {
            return ( clickHandler, options ) => {
                const initOptions = options ?? {
                    autoplay: true,
                    loop: true,
                    audio: 'audio',
                    canvas: 'canvas',
                    style: 'lounge',
                    barWidth: 2,
                    barHeight: 2,
                    barSpacing: 7,
                    barColor: '#0eaedf9e',
                    shadowBlur: 5,
                    shadowColor: '#06272f',
                    font: ['36px', 'Gotham Condensed Black'],
                    fontSize: 48,
                    clickHandler: clickHandler,
                } ;
                return AUDIO.VISUALIZER.getInstance(initOptions);
            }
        } )
    });

}, false);