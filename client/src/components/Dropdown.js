import React, { useState, useContext, useEffect } from "react";
import io from "socket.io-client";
import { GlobalContext } from "./globalState/GlobalState";

import "./Dropdown.css";

export const Dropdown = ({ clicked }) => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	const { borrowingList } = useContext(GlobalContext);

	const hasNotRead = borrowingList.filter((list) => list.hasRead === false);

	console.log(hasNotRead);

	const NewNotification = () => {
		if (hasNotRead.length > 0) {
			return (
				<>
					{hasNotRead.map((item, index) => {
						const text = () => {
							if (item.status === 1) {
								return (
									<div>
										<b>{item.name}</b> Mengajukan Permintaan Peminjaman atas{" "}
										{item.room}!
									</div>
								);
							} else if (item.status === 2) {
								return (
									<div>
										Permintaan Peminjaman <b>{item.name}</b> atas {item.room}{" "}
										Sedang Diproses!
									</div>
								);
							} else if (item.status === 3) {
								return (
									<div>
										Permintaan Peminjaman <b>{item.name}</b> atas {item.room}{" "}
										Disetujui!
									</div>
								);
							}
						};
						return (
							<div className='notification'>
								<li key={index}>
									<div>{text()}</div>
								</li>
							</div>
						);
					})}
				</>
			);
		}
	};

	return (
		<div className='dropdown-menu'>
			<ul
				onClick={handleClick}
				className={click ? "dropdown-menu clicked" : "dropdown-menu"}
			>
				<NewNotification />
			</ul>
		</div>
	);
};
