import React, {Component} from 'react';
import { withStyles } from '@material-ui/core'
import AppTestHotForm from './AppTestHotForm';

const styles = (theme) => ({
    root: {
        width: '100%',
        height: '100%',
        background: 'red',
    }
});

class AppTestHotLayout extends Component {
    render() {
        const {
            classes,
        } = this.props;

        return (
            <div className={classes.root}>
                <AppTestHotForm onSubmit={(values) => {console.log(values)}} />
            </div>
        );
    }
}

AppTestHotLayout.propTypes = {
};

AppTestHotLayout.defaultProps = {

};

// AppTestHotLayout = withStyles(styles)(AppTestHotLayout);

export default withStyles(styles)(AppTestHotLayout);
