import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { GlobalContext } from "./globalState/GlobalState";

export function FormDialog({ borrowingID, borrowingList, styles }) {
	const [open, setOpen] = useState(false);
	const [password, setPassword] = useState("");
	const [notificationCount, setNotificationCount] = useState(0);
	const [option, setOption] = useState("");

	const { updateBorrowingData, deleteBorrowingData } = useContext(
		GlobalContext
	);

	// Passwords to verify permission
	const PASSWORD = {
		firstLevel: "123456",
		secondLevel: "987654",
	};

	const accept = () => {
		setOpen(true);
		setOption("accept");
	};

	const deny = () => {
		setOpen(true);
		setOption("deny");
	};

	const handleClose = () => {
		setOpen(false);
	};

	const updateAndClose = () => {
		setNotificationCount(notificationCount + 1);
		updateBorrowingData(borrowingID, borrowingList.status, notificationCount);
		handleClose();
	};

	// If password true then update status, if not then send email to student
	const acceptPermission = (passwordInput) => {
		if (passwordInput === PASSWORD.firstLevel) {
			updateAndClose();
		} else if (passwordInput === PASSWORD.secondLevel) {
			updateAndClose();
		} else {
			console.log("wrong password");
			handleClose();
		}
	};

	const denyPermission = (passwordInput, id) => {
		if (passwordInput === PASSWORD.firstLevel) {
			deleteBorrowingData(id);
		} else if (passwordInput === PASSWORD.secondLevel) {
			deleteBorrowingData(id);
		} else {
			console.log("wrong password");
			handleClose();
		}
	};

	// Function that leads to disposition printing page
	const seeDisposition = async () => {
		window.open(`/adm/disposisi/${borrowingID}`);
	};

	// Renders which action button based on permission level
	const moreActionButtonFirstLevel = () => {
		return (
			<div
				style={{
					display: "flex",
					marginLeft: "90px",
					justifyContent: "space-around",
					width: "250px",
				}}
			>
				<div
					style={{
						backgroundColor: "#FF4F28",
						borderRadius: "3px",
					}}
				>
					<Button onClick={() => deny()}>Tolak</Button>
				</div>
				<div
					style={{
						backgroundColor: "#2DCF3B",
						borderRadius: "3px",
					}}
				>
					<Button onClick={() => accept()}>Terima</Button>
				</div>
			</div>
		);
	};

	const moreActionButtonSecondLevel = () => {
		return (
			<div
				style={{
					backgroundColor: styles.color,
					marginLeft: "9rem",
					borderRadius: "3px",
					marginTop: "-20px",
					width: "150px",
					textAlign: "center",
				}}
			>
				<Button onClick={() => seeDisposition()}>Lembar Disposisi</Button>
			</div>
		);
	};

	// handle to close dialog form
	const closeDialog = () => {
		handleClose();
	};

	const checkType = (type) => {
		if (type === "deny") {
			console.log("menolak pinjaman");
			return {
				title: "Tolak Pinjaman?",
				text: "menolak",
				action: denyPermission,
			};
		} else {
			console.log("mengizinkan peminjaman");
			return {
				title: "Izinkan Pinjaman?",
				text: "mengizinkan",
				action: acceptPermission,
			};
		}
	};

	const decision = checkType(option);

	return (
		<div>
			{borrowingList.status < 3
				? moreActionButtonFirstLevel()
				: moreActionButtonSecondLevel()}

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='form-dialog-title'
			>
				<DialogTitle id='form-dialog-title'>{decision.title}</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Silahkan masukkan sandi pribadi untuk {decision.text} permintaan
						peminjaman.
					</DialogContentText>
					<TextField
						autoFocus
						margin='dense'
						id='password'
						label='Password'
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => closeDialog()} color='primary'>
						Batal
					</Button>

					<Button
						color='primary'
						onClick={() => decision.action(password, borrowingID)}
					>
						Izinkan
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
