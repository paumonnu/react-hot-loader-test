import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import AppTestHotLayout from './AppTestHotLayout';

class AppTestHotConnector extends Component {
    render() {
        const {
        } = this.props;

        return (
            <AppTestHotLayout />
        );
    }
}

AppTestHotConnector.propTypes = {};
AppTestHotConnector.defaultProps = {};


function mapStateToProps(state, ownProps) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

AppTestHotConnector = connect(mapStateToProps, mapDispatchToProps)(AppTestHotConnector);

AppTestHotConnector = withRouter(AppTestHotConnector);

export default AppTestHotConnector;
