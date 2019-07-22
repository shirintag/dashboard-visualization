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
        let props = this.props;
        return (
            <div className="dashboard">
                <div className="row">
                    <h1>Dashboard</h1>
                </div>
                <div className="shares-container">
                    <Share percentage={props.orange_metric}></Share>
                    <Share percentage={props.gray_metric}></Share>
                    <Share percentage={props.blue_metric}></Share>
                </div>
                <div className="yearly-units">
                    {props.metrics.map(x =>
                        <div className="row">
                            <div className="year" onClick={() => props.changeMetric(x)}>{x.year}</div>
                            <div className="units" style={{ width: x.units * 0.5 }}></div>
                        </div>
                    )}
                    <div className="row">
                        <div className="legend">units</div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return ({
        ...state.clickReducer,
        metrics: state.apiReducer.data.metrics.sort((a, b) => b.year - a.year)
    });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchApi: () => dispatch(fetchApi()),
    changeMetric: (x) => dispatch(changeMetric(x))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
