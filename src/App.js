import React, { useEffect } from 'react';
import { connect } from "react-redux"
import { processLogOut, relogin } from "./store/auth/authActions"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Account from './components/Account';
import Dashboard from './components/Dashboard';

function App({ isAuth, __logOut, __persistState, loader }) {
  
  useEffect(() => {
    checkAuthTimeOut();
    persistLoggedInState();
  }, [])

  const checkAuthTimeOut = () => {
    let currentDateTime = new Date();
    if(Date.parse(localStorage.expiryDateTime) < Date.parse(currentDateTime)) {
      __logOut();
    }
  }

  const persistLoggedInState = () => {
    // if we have data in local storage but user refreshes page // refill state
    if(localStorage.token && localStorage.isAuthenticated) {
      __persistState();
    }
  }

  return (
    <Router>
      {/* if logged in - go to dashboard - else - homepage */}
      { isAuth ? <Redirect to="/dashboard" /> : <Redirect to="/" /> }
      <div className="App" onClick={ checkAuthTimeOut }>
        <div className="header">
          <div className="logo">
            <Link to="/">SiteName</Link>
          </div>
          <div className="nav">
            <div className="nav-wrap">
              <Link to="/">Home</Link>
              { isAuth ? <Link to="/dashboard">Dashboard</Link> : <Link to="/account">Dashboard</Link> }
              { isAuth ? <a href="#" onClick={ __logOut }>Logout</a> : <Link to="/account">Login</Link> }
            </div>
          </div>
        </div>
        { loader ? <p className="loading dot-falling">loading...</p> : null }
        <Switch>
          <Route exact path="/">
            <Home
              isAuth={isAuth}
            />
          </Route>
          { isAuth ? (
            <Route path="/dashboard">
              <Dashboard
                isAuth={isAuth}
              />
            </Route>
          ) : (
            <Route path="/account">
              <Account
                isAuth={ isAuth }
              />
            </Route>
          )}
          <Route path="/account">
            <Account
              isAuth={ isAuth }
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state => ({
  isAuth: state.getAuth.isAuthenticated,
  loader: state.getAuth.loading
})

const mapDispatchToProps = dispatch => ({
  __logOut: () => dispatch(processLogOut()),
  __persistState: () => dispatch(relogin())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
