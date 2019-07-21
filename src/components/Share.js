import React from 'react';
import { connect } from 'react-redux';

function Share(props) {
    return (
        <div className="share">
            <svg viewBox="0 0 36 36">
                <path
                d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#444"
                stroke-width="2"
                stroke-dasharray={100*props.percentage + ", 100"}
                />
                <text text-anchor="middle" x="18" y="20">{props.percentage}%</text>
            </svg>
        </div>

    );
}

const mapStateToProps = (state, ownProps) => {
    return ({
    });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Share);