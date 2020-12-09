import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { FormDialog } from './FormDialog';

export function TimeLineCard({ borrowingList }) {

    // Configure which style which
    const cardStyle = (borrowingList) => {
            if (borrowingList.status === 1) {
                return { title: "Peminjaman Baru", color: "#cf957e", buttonColor: "#CB4335 ", gradient: 'linear-gradient(180deg, #cf957e 0%, #ff8062 50%, #ff1600 100%)' };
            } else if (borrowingList.status === 2) {
                return { title: "Sedang Proses", color: "#0093E9", buttonColor: "#F1C40F ", gradient: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)' };
            }
             else if (borrowingList.status === 3) {
                return { title: "Disetujui", color: "#99daae", buttonColor: "#229954 ", gradient: 'linear-gradient(45deg, #99daae 0%, #0fcd32 50%, #eee8e8 100%)' };
            }
    }

    // styles attributes
    const styles = cardStyle(borrowingList);

    const useStyles = makeStyles({
        root: {
            minWidth: 275,
            background: styles.color,
            backgroundImage: styles.gradient,
            margin: '15px 0px',
            opacity: '90',

        },
        title: {
            fontSize: 24,
            color: '#413F3F',
            fontFamily: 'Arial, Helvetica, sans- serif',
            fontWeight: 700,
            cursor: 'pointer'
        },
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
            <CardActions>
                <FormDialog 
                    styles={styles} 
                    borrowingID={borrowingList._id}
                    borrowingList={borrowingList} />
            </CardActions>
        </Card>
    );
}