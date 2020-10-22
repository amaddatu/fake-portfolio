import React from 'react';
import './css/body.css';
import './css/heading.css';
import './css/styles.css';
import Home from './pages/Home';
import PortfolioLink from './pages/Portfolio-Link';
import {HashRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/vz">
          <PortfolioLink href="https://www.verizon.com/" src="https://www.verizon.com/dam/vzwcom/gnav/global/verizonLogo.svg" alt="Verizon" />
        </Route>
      </Router>
    </div>
  );
}

export default App;
