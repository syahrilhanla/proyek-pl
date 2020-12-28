import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeMHS from "./components/pages/HomeMHS";
import { SeeScheduleAdmin } from "./components/pages/SeeScheduleAdmin";
import { AddScheduleMHS } from "./components/pages/AddScheduleMHS";
import { HomeAdmin } from "./components/pages/HomeAdmin";

import { GlobalProvider } from "./components/globalState/GlobalState";
import { LoginPage } from "./components/pages/LoginPage";
import { HomeWD2 } from "./components/pages/HomeWD2";
import { Disposisi } from "./components/pages/Disposisi";
import Alerts from "./components/Alerts";
import { DisplayPicture } from "./components/pages/DisplayPicture";

import io from "socket.io-client";

function App() {
	const socket = io("http://localhost:5000");
	return (
		<div className='mother-class'>
			<GlobalProvider socket={socket}>
				<Router>
					<Switch>
						<Route path='/' exact component={LoginPage} />
						<Route path='/mhs' exact component={HomeMHS} />
						<Route path='/adm' exact component={HomeAdmin} />
						<Route path='/wd-2' exact component={HomeWD2} />
						<Route path='/alert' exact component={Alerts} />
						<Route path='/mhs/add-schedule' exact component={AddScheduleMHS} />
						<Route
							path='/adm/see-schedule'
							exact
							component={SeeScheduleAdmin}
						/>
						<Route path={`/adm/disposisi/:id`} exact component={Disposisi} />
						<Route path={`/adm/:filename`} exact component={DisplayPicture} />
					</Switch>
				</Router>
			</GlobalProvider>
		</div>
	);
}

export default App;
