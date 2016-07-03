const helpers = {
    drawComplexShape: drawComplexShape,
    drawLine: drawLine,
    setupCanvas: setupCanvas
}

function drawComplexShape(ctx, coords, opts) {

    ctx.strokeStyle = opts.strokeStyle;
    ctx.lineWidth = opts.lineWidth;
    ctx.lineJoin = opts.lineJoin;
    ctx.fillStyle = opts.fillStyle;

    ctx.beginPath();

    // start drawing from the last point
    let lastPoint = coords.length - 1;
    ctx.moveTo(
        coords[lastPoint][0],
        coords[lastPoint][1]
    );

    // plot each point using a loop
    coords.forEach(point => {
        ctx.lineTo(point[0], point[1]);
    });

    if (opts.closePath) {
        ctx.closePath();
    }

    ctx.fill();
    ctx.stroke();
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