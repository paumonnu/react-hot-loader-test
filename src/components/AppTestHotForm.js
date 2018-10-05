import React from 'react';
import {Grid, withStyles} from '@material-ui/core';
import { Paper } from '@material-ui/core';
import {Field, reduxForm} from 'redux-form';
import { Button } from '@material-ui/core';

const styles = theme => ({
    root: {
        height: 200,
        background: 'blue',
    },
    button: {
        background: 'green',
    }
});

class AppTestHotForm extends React.Component {
    render() {
        const {
            error,
            classes,
            handleSubmit,
            submitting
        } = this.props;

        return (
                <Paper className={classes.root}>
                    <Grid container spacing={16} direction='column'>
                        <Grid item>
                            <Grid container direction='column'>
                                <Grid item xs={12}>
                                    <form onSubmit={handleSubmit}>
                                        <Grid container direction='column' spacing={16}>
                                            <Grid item xs={12}>
                                                <div>Form: </div>
                                                <Field component='input' type='text' name='exampleField' />
                                                <Button type='submit' className={classes.button}>Submit</Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
        );
    }
}

AppTestHotForm = reduxForm({
    form: 'example'
})(AppTestHotForm);

AppTestHotForm =  withStyles(styles)(AppTestHotForm);

export default AppTestHotForm;

