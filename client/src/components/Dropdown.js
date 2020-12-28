import React, { useState, useContext } from "react";
import { GlobalContext } from "./globalState/GlobalState";

import "./Dropdown.css";

export const Dropdown = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	const { borrowingList } = useContext(GlobalContext);

	const NewNotification = () => {
		return (
			<>
				{borrowingList.map((item, index) => {
					return (
						<div className='notification'>
							<li key={index}>
								<div>
									<b>{item.name}</b> mengajukan permintaan peminjaman{" "}
									{item.room}!
								</div>
							</li>
						</div>
					);
				})}
			</>
		);
	};

	const OldNotification = () => {
		return (
			<>
				{borrowingList.map((item, index) => {
					return (
						<div className='notification'>
							<li key={index}>
								<div>
									<b>{item.name}</b> mengajukan permintaan peminjaman{" "}
									{item.room}!
								</div>
							</li>
						</div>
					);
				})}
			</>
		);
	};

	return (
		<div className='dropdown-menu'>
			<ul
				onClick={handleClick}
				className={click ? "dropdown-menu clicked" : "dropdown-menu"}
			>
				<h2 className='title'>Terbaru:</h2>
				<NewNotification />
				<hr />
				<h2 className='title'>Terdahulu:</h2>
				<OldNotification />
			</ul>
		</div>
	);
};
