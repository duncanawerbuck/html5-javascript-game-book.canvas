const helpers = {
    setupCanvas: setupCanvas
}

function setupCanvas(documentBody, el) {
    el.setAttribute('width', '256');
    el.setAttribute('height', '256');

    el.style.border = '1px dashed black';

    documentBody.appendChild(el);

    let ctx = el.getContext('2d');
}