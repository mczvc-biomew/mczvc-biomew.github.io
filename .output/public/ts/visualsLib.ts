export function setCanvasGradientStyles(
    canvasContext: CanvasRenderingContext2D, 
    barColor: string, 
    shadowBlur: number, shadowColor: string, 
    font: string, textAlign: CanvasTextAlign = 'center'
) {
    const gradient = canvasContext.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(1, barColor);
    canvasContext.fillStyle = gradient;
    canvasContext.shadowBlur = shadowBlur;
    canvasContext.shadowColor = shadowColor;
    canvasContext.font = font;
    canvasContext.textAlign = textAlign;
    return gradient;
}

export function fillText(
    canvasContext: CanvasRenderingContext2D, 
    x: number, y: number, 
    fontFamily: string, fontSize = 40, text = 'Music OFF', fontStyle = 'bold',
) {
    canvasContext.font = `${fontStyle} ${fontSize}px ${fontFamily}`
    canvasContext.fillText(text, x, y);
}

export function renderSongText(
    canvasContext: CanvasRenderingContext2D, 
    canvas: HTMLCanvasElement,
    title: string, author: string,
    x: number, 
    fontFamily:string, fontSize: number, fontStyle = 'bold'
) {
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const correction = x;

    canvasContext.font = `${fontStyle} ${fontSize}px ${fontFamily}`
    canvasContext.textBaseline = 'top';
    canvasContext.fillText(`by ${author}`, cx + correction, cy);
    canvasContext.font = `${fontStyle} ${fontSize}px ${fontFamily}`
    canvasContext.textBaseline = 'bottom';
    canvasContext.fillText(title, cx + correction, cy);
}

export function renderTime(
    canvasContext: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    minutes: string, seconds: string,
    x: number, y: number
){
    let time = `${minutes}:${seconds}`;
    canvasContext.fillText(time, canvas.width / 2 + x, canvas.height / 2 + y);
}

export function renderLounge(
    canvasContext: CanvasRenderingContext2D, canvas: HTMLCanvasElement,
    radius: number, barWidth: number, barHeight: number, barSpacing: number,
    frequencyData: Uint8Array<ArrayBuffer>
) {
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const maxBarNum = Math.floor((radius * 2 * Math.PI) / (barWidth + barSpacing));
    const slicedPercent = Math.floor((maxBarNum * 25) / 100);
    const barNum = maxBarNum - slicedPercent;
    const freqJump = Math.floor(frequencyData.length / maxBarNum);

    for (let i = 0; i < barNum; i++) {
        const amplitude = frequencyData[i * freqJump];
        const alfa = (i * 2 * Math.PI) / maxBarNum;
        const beta = (3 * 45 - barWidth) * Math.PI / 180;
        const x = 0;
        const y = radius - (amplitude / 12 - barHeight);
        const w = barWidth;
        const h = amplitude / 6 + barHeight;

        canvasContext.save();
        canvasContext.translate(cx + barSpacing, cy + barSpacing);
        canvasContext.rotate(alfa - beta);
        canvasContext.fillRect(x, y, w, h);
        canvasContext.restore();
    }

}