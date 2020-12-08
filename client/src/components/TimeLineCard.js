import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { FormDialog } from './FormDialog';

export function TimeLineCard({ borrowingList }) {

    const cardStyle = (borrowingList) => {
            if (borrowingList.status === 1) {
                return { title: "Peminjaman Baru", color: "#E46D54", buttonColor: "#CB4335 " };
            } else if (borrowingList.status === 2) {
                return { title: "Sedang Proses", color: "#ECF483", buttonColor: "#F1C40F " };
            }
             else if (borrowingList.status === 3) {
                return { title: "Disetujui", color: "#91E45B", buttonColor: "#229954 " };
            } else {
                return { title: "Disetujui", color: "#91E45B", buttonColor: "#229954 " };
            }
    }

    // styles attributes
    const styles = cardStyle(borrowingList);

    const useStyles = makeStyles({
        root: {
            minWidth: 275,
            background: styles.color,
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
                    {styles.title}
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
                    {borrowingList.time}
                </Typography>
            </CardContent>
            <CardActions>
                <FormDialog buttonColor={styles.buttonColor} 
                    borrowingID={borrowingList._id}
                    borrowingList={borrowingList} />
            </CardActions>
        </Card>
    );
}