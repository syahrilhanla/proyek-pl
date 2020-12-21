import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { FormDialog } from "./FormDialog";
import { FormDialogDetails } from "./FormDialogDetails";

// Configure which style which
export function cardStyle(borrowingList) {
	if (borrowingList.status === 1) {
		return {
			title: "Peminjaman Baru",
			color: "#FF4F28",
			buttonColor: "#CB4335 ",
			gradient:
				"linear-gradient(180deg, #cf957e 0%, #ff8062 50%, #ff1600 100%)",
		};
	} else if (borrowingList.status === 2) {
		return {
			title: "Sedang Proses",
			color: "#0093E9",
			buttonColor: "#F1C40F ",
			gradient: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
		};
	} else if (borrowingList.status === 3) {
		return {
			title: "Disetujui",
			color: "#2DCF3B",
			buttonColor: "#229954 ",
			gradient: "linear-gradient(45deg, #99daae 0%, #0fcd32 50%, #eee8e8 100%)",
		};
	} else {
		return {
			title: "Disetujui",
			color: "#99daae",
			buttonColor: "#229954 ",
			gradient: "linear-gradient(45deg, #99daae 0%, #0fcd32 50%, #eee8e8 100%)",
		};
	}
}

export function TimeLineCardNew({ borrowingList }) {
	const [open, setOpen] = useState(false);

	// styles attributes
	const styles = cardStyle(borrowingList);

	const useStyles = makeStyles({
		root: {
			minWidth: 275,
			margin: "15px 0px",
			borderRadius: "16px",
		},
		title: {
			fontSize: 24,
			color: "#413F3F",
			fontFamily: "Arial, Helvetica, sans- serif",
			fontWeight: 700,
			cursor: "pointer",
		},
		pos: {
			marginBottom: 12,
		},
		detail: {
			cursor: "pointer",
			width: "350px",
			marginLeft: "15px",
		},
		edgeColor: {
			// backgroundColor: "rgb(82, 82, 235)",
			width: "16px",
			borderRadius: "6px 0px 0px 6px",
			background: styles.color,
			// backgroundImage: styles.gradient,
		},
	});

	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<div className={classes.edgeColor}>
				<CardContent className={classes.detail} onClick={() => setOpen(!open)}>
					{open && (
						<FormDialogDetails
							styles={styles}
							borrowingList={borrowingList}
							open={open}
						/>
					)}
					<Typography
						className={classes.title}
						color='textPrimary'
						gutterBottom
					>
						{styles.title}
					</Typography>
					<Typography variant='h5' component='h2'>
						{borrowingList.room}
					</Typography>
					<Typography className={classes.pos} color='textSecondary'>
						Peminjam: {borrowingList.name}
					</Typography>
					<Typography className={classes.pos} variant='h5'>
						Keperluan: {borrowingList.usage}
					</Typography>
					<Typography variant='body2' component='p'>
						{borrowingList.startDate}
						<br />
						{borrowingList.time}
					</Typography>
				</CardContent>
				<CardActions>
					<div className='form-dialog'>
						<FormDialog
							styles={styles}
							borrowingID={borrowingList._id}
							borrowingList={borrowingList}
							className='button-dialog'
						/>
					</div>
				</CardActions>
			</div>
		</Card>
	);
}
