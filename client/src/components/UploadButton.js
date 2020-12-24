import { Button } from "@material-ui/core";
import React from "react";

export const UploadButton = () => {
	return (
		<>
			<label htmlFor='upload-photo'>
				<input
					style={{ display: "none" }}
					id='upload-photo'
					name='upload-photo'
					type='file'
				/>

				<Button
					color='secondary'
					variant='contained'
					component='span'
					style={{ minWidth: "450px" }}
				>
					Unggah gambar
				</Button>
			</label>
		</>
	);
};
