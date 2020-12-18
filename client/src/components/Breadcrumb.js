import React from "react";
import "./Breadcrumb.css";
import { Button } from "./Button";

export const Breadcrumb = ({ loginInfo }) => {
	const checkLoginInfo = () => {
		if (loginInfo.length > 0) {
			return (
				<span>
					<h3>Selamat Datang, {loginInfo[0].newLogin.name}!</h3>
				</span>
			);
		} else {
			return null;
		}
	};
	return (
		<div className='breadcrumb'>
			{checkLoginInfo()}
			<Button text='Ajukan Peminjaman' goTo='/mhs/add-schedule' />
		</div>
	);
};
