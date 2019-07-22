import React from 'react';
import { connect } from 'react-redux';

import './Menu.css'

function Menu(props) {
    return (
        <div className="menu">
            <div className="profile-container">
                <div className="profile-image">
                    {props.image}
                </div>
                <div className="profile-name">
                    {props.name}
                </div>
            </div>
            <div className="profile-data-container">
                <div className="profile-data">Saldo: {props.saldo}</div>
                <div className="profile-data">Sent: {props.sent}</div>
                <div className="profile-data">Overdue: {props.overdue}</div>
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return ({
        ...state.apiReducer.data
    });
};

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);
