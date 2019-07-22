import React from 'react';
import { connect } from 'react-redux';

import './CirclePercentile.css';

function CirclePercentiles(props) {
    return (
        <div className="single-chart">
            <svg viewBox="0 0 36 36" className={'circular-chart ' + props.color}>

            <path className="circle-bg"
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path className="circle"
                d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#444"
                strokeWidth="2"
                strokeDasharray={100*props.percentage + ", 100"}
                />
            <text x="18" y="20.35" className="percentage">{props.percentage * 100}%</text>
            </svg>
        </div>
    );
}

export default connect()(CirclePercentiles);
