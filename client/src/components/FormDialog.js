import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { GlobalContext } from './globalState/GlobalState';

export function FormDialog({ buttonColor, borrowingID, borrowingList, styles }) {
    const [open, setOpen] = useState(false);
    const [password, setPassword] = useState('');
    const [notificationCount, setNotificationCount] = useState(0);

    const { updateBorrowingData } = useContext(GlobalContext);

    // Passwords to verify permission
    const PASSWORD= {
        firstLevel: '123456',
        secondLevel: '987654'
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const updateAndClose = () => {
        setNotificationCount(notificationCount + 1);
        updateBorrowingData(borrowingID, borrowingList.status, notificationCount);
        handleClose();
    }
    
    // If password true then update status, if not then send email to student
    const verifyPermission = (passwordInput) => {
        if (passwordInput === PASSWORD.firstLevel) {
            updateAndClose();        
        } else if (passwordInput === PASSWORD.secondLevel) {
            updateAndClose();
        } else {
            console.log('wrong password');
            handleClose();
        }
    }

    // Renders which action button based on permission level  
    const moreActionButtonFirstLevel = () => {
        return (
            <div style={{ backgroundColor: styles.color, marginLeft: "10rem", borderRadius: "3px", marginTop: "-20px" }}>
            <Button onClick={() => handleClickOpen()}>
                Tindak Lanjut
            </Button>
        </div>
        )
    }

    const moreActionButtonSecondLevel = () => {
        return (
            <div style={{ backgroundColor: styles.color, marginLeft: "10rem", borderRadius: "3px", marginTop: "-20px" }}>
            <Button onClick={() => console.log('keluarkan disposisi')}>
                Tindak Lanjut 2
            </Button>
        </div>
        )
    }

    // Deny Permission button, sends email if clicked 
    const denyPermission = () => {
        handleClose();
    }

    return (
        <div>
            {borrowingList.status <= 3 ? moreActionButtonFirstLevel() : moreActionButtonSecondLevel()}

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Izinkan Pinjaman?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Silahkan masukkan sandi pribadi untuk mengizinkan permintaan peminjaman.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => denyPermission()} color="primary">
                        Batal
                    </Button>
                    <Button
                        color="primary"
                        onClick={() => verifyPermission(password)}
                    >   
                        Izinkan
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}
