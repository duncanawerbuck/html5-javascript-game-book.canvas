console.clear();

{    
    const ctx = helpers.setupCanvas(document);
    
    // set the line style options
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    
    // draw the line
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(128,128);
    ctx.stroke();
}