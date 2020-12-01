import './App.css';
import { Navbar } from './components/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import SeeSchedule from './components/pages/SeeSchedule';
import AddSchedule from './components/pages/AddSchedule';

import { GlobalProvider } from './components/globalState/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/add-schedule' exact component={AddSchedule} />
          <Route path='/see-schedule' exact component={SeeSchedule} />

        </Switch>
      </Router>
    </GlobalProvider>

  );
}

export default App;
