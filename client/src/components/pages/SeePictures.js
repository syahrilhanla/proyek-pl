import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from '../globalState/GlobalState';

export const SeePictures = () => {
	const { getPictures, pictures } = useContext(GlobalContext);

	useEffect(() => {
		getPictures();
	}, []);

	setTimeout(() => {
		console.log(pictures)
	}, 3000);

	return (
		<div className="container">
			<h1>Hello world</h1>
			{pictures.map((picture, index) => (
				<Link to={`/files/${picture.filename}`} key={index} >
					<img src={picture.filename} alt={picture.filename} style={{ width: '200px', height: '100px' }} />
				</Link>
			))}
		</div>
	);
};
