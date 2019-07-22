import React from 'react';
import { connect } from 'react-redux';

import './Menu.css'

function Menu(props) {
    return (
        <div className="menu">
            <div className="profile-image">
                {props.image}
            </div>
            <div className="profile-name">
                {props.name}
            </div>
            <div>
                <div>Saldo: {props.saldo}</div>
                <div>Sent: {props.sent}</div>
                <div>Overdue: {props.overdue}</div>
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
