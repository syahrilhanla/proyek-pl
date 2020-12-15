import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomeMHS from './components/pages/HomeMHS';
import { SeeScheduleMHS } from './components/pages/SeeScheduleMHS';
import { SeeScheduleAdmin } from './components/pages/SeeScheduleAdmin';
import { AddScheduleMHS } from './components/pages/AddScheduleMHS';
import { HomeAdmin } from './components/pages/HomeAdmin';

import { GlobalProvider } from './components/globalState/GlobalState';
import { LoginPage } from './components/pages/LoginPage';
import { HomeWD2 } from './components/pages/HomeWD2';
import { Disposisi } from './components/pages/Disposisi';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route path='/' exact component={LoginPage} />
          <Route path='/mhs' exact component={HomeMHS} />
          <Route path='/adm' exact component={HomeAdmin} />
          <Route path='/wd-2' exact component={HomeWD2} />
          <Route path='/mhs/add-schedule' exact component={AddScheduleMHS} />
          <Route path='/mhs/see-schedule' exact component={SeeScheduleMHS} />
          <Route path='/adm/see-schedule' exact component={SeeScheduleAdmin} />
          <Route path={`/adm/disposisi/:id`} exact component={Disposisi} />
          
        </Switch>
      </Router>
    </GlobalProvider>

  );
}

export default App;
