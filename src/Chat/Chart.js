import React, { useEffect, useRef } from 'react';

// vertical lines
const gridV = ctx => {
    var canvasWidth = ctx.canvas.width;
    var canvasHight = ctx.canvas.height;

    for(var i = 0; i <= 10; i++){
        ctx.strokeStyle = 'rgba(29, 210, 175,0.3)';
        ctx.lineWidth = 1;
        ctx.moveTo(i * canvasWidth / 10, 0);
        ctx.lineTo(i * canvasWidth / 10, canvasHight);
    }

    ctx.stroke();
}

//horizontal lines
const gridH = ctx => {
    var canvasWidth = ctx.canvas.width;
    var canvasHight = ctx.canvas.height;

    for(var i = 0; i <= 10; i++){
        ctx.strokeStyle = 'rgba(29, 210, 175,0.3)';
        ctx.lineWidth = 1;
        ctx.moveTo(0, i * canvasHight / 10);
        ctx.lineTo(canvasWidth, i * canvasHight / 10);
    }

    ctx.stroke();
}

const drawPercentage = (ctx, message) => {
    const totalNUmberOfHorizontalDivisions = 101;

    var canvasWidth = ctx.canvas.width;
    var canvasHight = ctx.canvas.height;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.beginPath();

    //actual graph
    for(var i = 0; i < message.length; i++){
        console.log("Hi: ", message);
        ctx.strokeStyle = '#1dd2af';
        ctx.lineWidth = 2;
        ctx.lineTo(i * canvasWidth / (totalNUmberOfHorizontalDivisions - 1), canvasHight - (canvasHight * Math.abs(parseFloat(message[i])) / 100));
    }

    ctx.stroke();
}

const percentageColumn = percentage => {
        for (let i = 10; i >= 1; i--) {
            var value = document.createElement('span');
            var text_percentage = document.createTextNode(`${i * 10}`)
            value.appendChild(text_percentage);
            percentage.current.appendChild(value);
        }
}

const secondsColumn = seconds => {
        for (let i = 1; i <= 10; i++) {
            var second = document.createElement('span');
            var text = document.createTextNode(`${i * 10}s`)
            second.appendChild(text);
            seconds.current.appendChild(second);
        }
}

const Chart = props => {
    console.log(props)

    const canvas = useRef(null);
    const percentage = useRef(null);
    const seconds = useRef(null);

    useEffect(() => {
        percentageColumn(percentage);
        secondsColumn(seconds);
    }, []);

    useEffect(() => {
        const ctx = canvas.current.getContext("2d");

        drawPercentage(ctx, props.graph);

        gridV(ctx);
        gridH(ctx);
    });

    return (
        <div>
            <div ref={percentage}></div>
            <canvas ref={canvas} width={800} height={400} />
            <div ref={seconds}></div>
        </div>
    )
};

export default Chart;