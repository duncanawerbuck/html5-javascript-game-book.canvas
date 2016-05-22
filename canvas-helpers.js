const helpers = {
    setupCanvas: setupCanvas
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