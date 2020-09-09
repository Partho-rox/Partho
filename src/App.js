import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import DisplayBox from './DisplayBox';

  
function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
         <Router basename="1727027">
        {/* <Router basename={`/${ROLL_NUMBER}`}> */}
          <Switch>
            <Route exact path="/" component={DisplayBox} />
            
           
            {/* <Route path="/customer-dashboard" component={FormPersonalDetails} />
            <Route  path="/customer-dashboard" component={FormUserDetails} />
            <Route  path="/customer-dashboard" component={Confirm} />
            <Route  path="/customer-dashboard" component={Success} /> */}
          </Switch>
         
        </Router>
        
      </header>
    </div>
  );
}

export default App;