console.clear();

{
    const ctx = helpers.setupCanvas(document),
        lineConfigs = getLineConfigs();

    lineConfigs.forEach((l) => {
        console.log(`Drawing line '${l.name}'`);
        helpers.drawLine(ctx, l.opts);
    })
    
    function getLineConfigs() {
        return [
            {
                name: 'first', opts: {
                    x: { start: 0, end: 128 },
                    y: { start: 0, end: 128 },
                    lineCap: 'round'
                }
            },
            {
                name: 'second', opts: {
                    x: { start: 30, end: 158 },
                    y: { start: 0, end: 128 },
                    lineCap: 'butt'
                }
            }, {
                name: 'third', opts: {
                    x: { start: 60, end: 188 },
                    y: { start: 0, end: 128 },
                    lineCap: 'square'
                }
            }];
    }
}