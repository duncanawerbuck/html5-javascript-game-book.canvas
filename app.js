console.clear();

{
    const ctx = helpers.setupCanvas(document);

    // draw a triangle (using an array of coordinates) and apply a fill colour.
    // the drawComplexShape function allows us to specify any number of points.
    // first prepare co-ordinates and options.
    const coordinates = [
        [128, 85],
        [170, 170],
        [85, 170]
    ],

        opts = {
            strokeStyle: "black",
            lineWidth: 3,
            lineJoin: "round",
            fillStyle: "rgba(128, 128, 128, 0.5)",
            closePath: true
        };

    helpers.drawComplexShape(ctx, coordinates, opts);

    // draw 3 lines, as per beginning of chapter 2
    function drawNLines(ctx) {
        const lineConfigs = getLineConfigs();

        lineConfigs.forEach((l) => {
            console.log(`Drawing line '${l.name}'`);
            helpers.drawLine(ctx, l.opts);
        });
    }

    // gets the configuration for n line objects, including
    // each line's start and end x/y co-ordinates, and each
    // line's lineCap style (round, butt or square)
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