import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../globalState/GlobalState";
import { Breadcrumb } from "../Breadcrumb";
import { StickyHeadTable } from "../StickyHeadTable";
import { Navbar } from "../Navbar";
import { redirectPage } from "./HomeAdmin";
import { useHistory } from "react-router-dom";

const Home = () => {
	const [invisible, setInvisible] = useState(true);
	const { getBorrowingData, getLoginInfo, loginInfo, updateState } = useContext(
		GlobalContext
	);

	const history = useHistory();

	// useEffect when updateState updated
	useEffect(() => {
		setInvisible(false);
	}, [updateState]);

	// useEffect after page loaded for the first time
	useEffect(() => {
		getBorrowingData();
		getLoginInfo();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const HomeMHS = () => {
		return (
			<>
				<Navbar
					user={"mhs"}
					invisible={invisible}
					setInvisible={setInvisible}
				/>
				<div className='container'>
					<Breadcrumb loginInfo={loginInfo} />
				</div>

				<div className='container-schedule'>
					<StickyHeadTable />
				</div>
			</>
		);
	};

	return <>{redirectPage(loginInfo, history) && <HomeMHS />}</>;
};
export default Home;
