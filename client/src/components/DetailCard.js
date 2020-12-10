import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { FormDialog } from './FormDialog';

export function DetailCard({ borrowingList }) {

    const useStyles = makeStyles({
        root: {
            minWidth: 275,
            margin: '15px 0px',
            opacity: '90',

        },
        title: {
            fontSize: 24,
            color: '#413F3F',
            fontFamily: 'Arial, Helvetica, sans- serif',
            fontWeight: 700,        },
        pos: {
            marginBottom: 12,
        },
        detail: {
            cursor: 'pointer'
        }
    });

    const classes = useStyles();

    return (
        <Card className={classes.root} >
            <CardContent className={classes.detail} onClick={() => console.log('open details')}>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                    {styles.title}
                </Typography>
                <Typography variant="h5" component="h2">
                    {borrowingList.room}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {borrowingList.name}
                </Typography>
                <Typography className={classes.pos} variant="h5">
                    {borrowingList.usage}
                </Typography>
                <Typography variant="body2" component="p">
                    {borrowingList.startDate}
                    <br />
                    {borrowingList.time}
                </Typography>
            </CardContent>
        </Card>
    );
}