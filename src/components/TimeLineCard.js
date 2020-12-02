import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from './Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { FormDialog } from './FormDialog';

export function TimeLineCard({ borrowingList, cardStyle }) {

    console.log(cardStyle);
    const useStyles = makeStyles({
        root: {
            minWidth: 275,
            background: cardStyle.color,
            margin: '15px 0px',
            opacity: '90',
        },
        title: {
            fontSize: 24,
            color: '#413F3F',
            fontFamily: 'Arial, Helvetica, sans- serif',
            fontWeight: 700
        },
        pos: {
            marginBottom: 12,
        },
    });

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                    {cardStyle.title}
                </Typography>
                <Typography variant="h5" component="h2">
                    {borrowingList.room}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {borrowingList.name}
                </Typography>
                <Typography variant="body2" component="p">
                    {borrowingList.startDate}
                    <br />
                    08:00 - 11:00
                </Typography>
            </CardContent>
            <CardActions>
                <FormDialog buttonColor={cardStyle.buttonColor} />
            </CardActions>
        </Card>
    );
}