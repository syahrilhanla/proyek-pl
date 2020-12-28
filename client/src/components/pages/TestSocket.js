import React, { useEffect } from "react";
import io from "socket.io-client";

export const TestSocket = () => {
	const socket = io("http://localhost:5000");
	useEffect(() => {
		socket.on("message", (message) => {
			console.log(message);
		});
		socket.emit("reply", "this is a reply");
	}, []);

	const clickingButton = () => {
		const newStatus = 2;
		socket.emit("newStatus", newStatus);
	};
	return (
		<>
			<div>
				<button onClick={() => clickingButton()}>Send Status</button>
			</div>
		</>
	);
};
