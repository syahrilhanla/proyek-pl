import React from 'react';
import Button from '@material-ui/core/Button';
// import { Button } from './Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export function FormDialog({ buttonColor }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div style={{ backgroundColor: buttonColor, marginLeft: "10rem", borderRadius: "3px", marginTop: "-20px" }}>
                <Button onClick={handleClickOpen}>
                    Tindak Lanjut
            </Button>
            </div>
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
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Batal
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Izinkan
          </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}
