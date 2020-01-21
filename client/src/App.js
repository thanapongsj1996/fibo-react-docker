import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Fib from './Fib'
import OtherPage from './OtherPage'

function App() {
  return (
    <Router>
      <div className="App">
        <div style={{textAlign:"center"}}>
          <img src={logo} className="App-logo" alt="logo" /><br />
          <Link to="/">Home</Link><br />
          <Link to="/otherpage">Other Page</Link><br />
        </div>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
