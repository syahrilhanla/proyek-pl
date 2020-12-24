import React from "react";
import axios from "axios";

export const SeePictures = async () => {
	const res = await axios.get("/files");
	const collection = [];
	collection.push(res);
	return <div>{collection.map((item) => console.log(item.data))}</div>;
};
