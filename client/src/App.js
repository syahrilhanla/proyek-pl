import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomeMHS from './components/pages/HomeMHS';
import { SeeScheduleMHS } from './components/pages/SeeScheduleMHS';
import { SeeScheduleAdmin } from './components/pages/SeeScheduleAdmin';
import { AddScheduleMHS } from './components/pages/AddScheduleMHS';
import { HomeAdmin } from './components/pages/HomeAdmin';

import { GlobalProvider } from './components/globalState/GlobalState';
import { LoginPage } from './components/pages/LoginPage';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route path='/' exact component={LoginPage} />
          <Route path='/mhs' exact component={HomeMHS} />
          <Route path='/adm' exact component={HomeAdmin} />
          <Route path='/mhs/add-schedule' exact component={AddScheduleMHS} />
          <Route path='/mhs/see-schedule' exact component={SeeScheduleMHS} />
          <Route path='/adm/see-schedule' exact component={SeeScheduleAdmin} />

          {/* Brian Code
          <Route path='/overview' exact component={Overview} />
          <Route path='/reports' exact component={Reports} />
          <Route path='/reports/reports1' exact component={ReportsOne} />
          <Route path='/reports/reports2' exact component={ReportsTwo} />
          <Route path='/reports/reports3' exact component={ReportsThree} />
          <Route path='/team' exact component={Team} /> */}

        </Switch>
      </Router>
    </GlobalProvider>

  );
}

export default App;
