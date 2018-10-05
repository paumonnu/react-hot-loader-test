import { hot } from 'react-hot-loader'
import React, { Component  } from 'react'
import {Route, Router, Switch, withRouter} from 'react-router-dom';
import AppTestHotConnnector from './AppTestHotConnector';
import { MuiThemeProvider } from '@material-ui/core';
import theme from '../theme';
import store from '../store';
import history from '../history';
import {connect, Provider} from 'react-redux';

class AppTestHot extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Provider store={store}>
                    <Router history={history}>
                        <Switch>
                            <Route component={AppTestHotConnnector} />
                        </Switch>
                    </Router>
                </Provider>
            </MuiThemeProvider>
        );
    }
}

AppTestHot.propTypes = {};
AppTestHot.defaultProps = {};

export default hot(module)(AppTestHot);
