import React, { useState, useEffect, useRef } from 'react';


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

        for(let i = 10; i >= 1; i--) {
            var value = document.createElement('span');
            var text_percentage = document.createTextNode(`${i * 10}`)
            value.appendChild(text_percentage);
            percentage.current.appendChild(value);
        }
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