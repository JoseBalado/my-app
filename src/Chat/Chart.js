import React from 'react';

const Chart = (props) => {
    console.log(props)

    return (
        <div>
            Last 100 CPU Percentage Usage:
                {props.graph.map(item => {
                    return item[0] + " ";
                })}
        </div>
    )
};

export default Chart;