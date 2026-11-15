
declare global {
  interface Window {
    webkitAudioContext: unknown;
  }
}

const FFT_SIZE = 512;

export function createAudioContext () {

  return new Promise<AudioContext>((resolve, reject) => {
    try {
      window.AudioContext = window.AudioContext ?? window.webkitAudioContext;
      resolve(new window.AudioContext);
    } catch (e) {
      console.info('Web Audio API is not supported.', e);
      reject(e);
    }
  })
}

export function createAnalyser(context: AudioContext) {
  const analyser = context.createAnalyser()
  analyser.smoothingTimeConstant = 0.6;
  analyser.fftSize = FFT_SIZE;
  
  return analyser;
}

export function createFrequencyData(analyser: AnalyserNode) {
  return new Uint8Array(analyser.frequencyBinCount);
}

export function connectBufferSourceNodeToAnalyser(
  analyser: AnalyserNode, context: AudioContext, loop: boolean, onEnded = () => {}
) {
  const sourceNode = context.createBufferSource();
  sourceNode.loop = loop;
  sourceNode.connect(analyser);
  sourceNode.connect(context.destination);

  sourceNode.onended = function () {
    onEnded();
  }
  return sourceNode;
}

export function loadSound(audioSrc: string) {
  return new Promise( (resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open('GET', audioSrc, true);
    req.responseType = 'arraybuffer';

    req.onload = function () {
      resolve(req.response);
    }
    
    req.send();
  });
}

export function decodeAudioData(context: AudioContext, arrayBuffer: ArrayBuffer, successCb: DecodeSuccessCallback, errorCb: DecodeErrorCallback) {
  return new Promise<void>( (resolve, reject) => {
    try {
      context.decodeAudioData(arrayBuffer, successCb, errorCb);
      resolve();
    } catch (error) {
      console.error(error);
      console.warn('Error loading sound.')
      reject(error);
    }
  });
}

export function playSound(
  context: AudioContext, sourceNode: AudioBufferSourceNode, buffer: AudioBuffer | null) {
  if (!context) return;
  if (context.state === 'suspended') {
    return { 'last-state': context.state, ret: context.resume() };
  }
  sourceNode.buffer = buffer;
  sourceNode.start(0);
}

export function pauseSound(context: AudioContext) {
  context.suspend();
}

export function dispose(context: AudioContext, sourceNode: AudioBufferSourceNode) {
  sourceNode.disconnect();
  context.close().catch( (reason) => {
    console.error(reason);
    console.warn('Error closing sound.');
  });
}