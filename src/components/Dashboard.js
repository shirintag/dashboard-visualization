import React from 'react';
import { connect } from 'react-redux';

import { changeMetrics } from '../actions/metricsActions';
import { fetchApi } from '../actions/apiActions';

import CirclePercentile from './CirclePercentile'

import './Dashboard.css'


class Dashboard extends React.Component {
    componentDidMount() {
        this.props.fetchApi();
    }

    render() {
        const
            props = this.props,
            maxUnits = props.metrics.length && props.metrics.map(x => x.units).reduce((a, b) => Math.max(a, b)),
            maxLength = 400,
            c = maxLength / maxUnits;

        return (
            <div className="dashboard-container">
                <div className="row">
                    <h1>Dashboard</h1>
                </div>
                <div className="circlePercentiles-container">
                    <CirclePercentile color={'orange'} percentage={props.orange_metric} />
                    <CirclePercentile color={'gray'} percentage={props.gray_metric} />
                    <CirclePercentile color={'blue'} percentage={props.blue_metric} />
                </div>
                <div className="yearly-units-container">
                    {props.metrics.map((x, index) => {
                        return (
                            <div key={index} className="row">
                                <a href="#year" className="year" onClick={() => props.changeMetrics(x)}>{x.year}</a>
                                <div className="units-wrapper">
                                    <div className="units" style={{ width: x.units * c }}></div>
                                </div>
                            </div>

                        )
                    }
                    )}
                    <div className="row">
                        <div className="legend">Units</div>
                    </div>
                </div>
            </div >
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return ({
        ...state.metricsReducer,
        metrics: state.apiReducer.data.metrics.sort((a, b) => b.year - a.year)
    });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchApi: () => dispatch(fetchApi()),
    changeMetrics: (x) => dispatch(changeMetrics(x))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
