import { NavLink, Switch, Link, Route } from 'react-router-dom';

import App from './App'
import React from 'react';
import './FrontPage.css';
import SimpleList from './LandingPage'
const Navigation = () => (
    <nav>
      <ul>
        <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
        <li><NavLink  activeClassName="current" to='/rule:0'>CaseFiles</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/regulations'>Regulations</NavLink></li>
        <li> <a  href="http://10.4.20.158:5000/about/" >About</a></li>
      </ul>
    </nav>
  );
  const Home = () => (
    <div className='home'>
      Home 
    </div>
  );

 

  

  const FrontPage = () => (
    <div className='frontpage'>
      <h1>Preliminary Case Analysis</h1>
      <Navigation />
      <Main />
    </div>
  );
  const Main = () => (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/about' ></Route>

        <Route  path='/rule:idxx' render={(props) => ( <App {...props} ruleID={110} />)}></Route>

        <Route exact path='/regulations' component={SimpleList}></Route>
      
    </Switch>
  );
  

  export default FrontPage;
