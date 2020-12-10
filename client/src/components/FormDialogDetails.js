import React, { useContext } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, Typography } from '@material-ui/core';
import { GlobalContext } from './globalState/GlobalState';

export function FormDialogDetails({ borrowingList, styles, open }) {

    const { loginInfo } = useContext(GlobalContext);

    const useStyles = makeStyles({
        root: {
            width: '100%',
            margin: 'auto',
            opacity: '90',
        },
        title: {
            fontSize: 24,
            color: '#413F3F',
            fontFamily: 'Arial, Helvetica, sans- serif',
            fontWeight: 700,
            cursor: 'pointer',
        },
        pos: {
            marginBottom: 12,
        },
        wrapper: {
            margin: '15px auto',
            padding: '15px 120px' 
        }
    });

    const classes = useStyles();

    return (
        <div>

            <Dialog open={open} aria-labelledby="form-dialog-title" className={classes.root}>
                <div className={classes.wrapper}>
                    <Typography variant="h2" component="h2" style={{fontSize: '30px', margin: '15px auto'}}>
                            Detail Peminjaman
                    </Typography>

                    <Typography variant="h5" component="h4">
                            Status<span style={{marginLeft: '50px', marginRight: '10px'}}> : </span> {styles.title}
                    </Typography>
                    <Typography variant="h5" component="h4">
                            Peminjam<span style={{marginLeft: '11px', marginRight: '10px'}}> : </span> {borrowingList.name}
                    </Typography>

                    <Typography variant="h5" component="h4">
                            Ruangan<span style={{marginLeft: '20px', marginRight: '10px'}}> : </span> {borrowingList.room}
                    </Typography>
                    <Typography variant="h5" component="h4">
                            Keperluan<span style={{marginLeft: '8px', marginRight: '10px'}}> : </span> {borrowingList.usage}
                    </Typography>
                    <Typography variant="h5" component="h4">
                            Tanggal<span style={{marginLeft: '33px', marginRight: '10px'}}> : </span> {borrowingList.startDate}
                    </Typography>
                    <Typography variant="h5" component="h4">
                            Waktu<span style={{marginLeft: '50px', marginRight: '10px'}}> : </span> {borrowingList.time} WITA
                    </Typography>
                </div>
            </Dialog>
        </div >
    );
}
