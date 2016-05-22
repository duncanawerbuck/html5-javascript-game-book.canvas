const helpers = {
    drawLine: drawLine,
    setupCanvas: setupCanvas
}

function drawLine(ctx, opts) {
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 10;

    ctx.beginPath();
    ctx.moveTo(opts.x.start, opts.y.start);
    ctx.lineTo(opts.x.end, opts.y.end);

    const lc = opts.lineCap;
    if (lc && typeof lc === 'string') {
        if (!(lc === 'round' ||
            lc === 'butt' ||
            lc === 'square')) {
            throw new Error('lineCap value must be round, butt or square.');
        }
        ctx.lineCap = lc;
    }
    
    ctx.stroke();
}

function setupCanvas(document) {

    let canvas = document.createElement('canvas');

    canvas.setAttribute('width', '256');
    canvas.setAttribute('height', '256');

    canvas.style.border = '1px dashed black';

    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    return ctx;
}