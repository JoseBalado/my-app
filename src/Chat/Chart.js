import React, { useState, useEffect, useRef } from 'react';

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


const Chart = (props) => {
    console.log(props)

    const canvas = useRef(null);
    const seconds = useRef(null);
    const percentage = useRef(null);

    useEffect(() => {
        // Update the document title using the browser API
        const ctx = canvas.current.getContext("2d");
        document.title = `You clicked ${props.graph[0]} times`;

        var canvasWidth = ctx.canvas.width;
        var canvasHight = ctx.canvas.height;

        for (let i = 1; i <= 10; i++) {
            var second = document.createElement('span');
            var text = document.createTextNode(`${i * 10}s`)
            second.appendChild(text);
            seconds.current.appendChild(second);
        }

        for (let i = 10; i >= 1; i--) {
            var value = document.createElement('span');
            var text_percentage = document.createTextNode(`${i * 10}`)
            value.appendChild(text_percentage);
            percentage.current.appendChild(value);
        }

        gridV(ctx);
        gridH(ctx);
    });

    return (
        <div>
            Last 100 CPU Percentage Usage:
                {props.graph.map(item => {
                    return item[0] + " ";
                })}
            <div ref={percentage}></div>
            <canvas ref={canvas} width={800} height={400} />
            <div ref={seconds}></div>
        </div>
    )
};

export default Chart;