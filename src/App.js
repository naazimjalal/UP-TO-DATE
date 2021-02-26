import React from 'react'
import './App.css';
import Home from './pages/Home'
import Trend from './pages/Trend'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/">
          <Home /> 
         <Trend />
        </Route>
        </Switch>
        <Switch>
        <Route path="/search">
          <h1> This is the Search Page</h1>
        </Route>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
