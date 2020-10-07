import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';

function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth
      .onAuthStateChanged(authUser => {
        console.log('USER >>>', authUser)
        if (authUser) {
          dispatch({
            type: 'SET_USER',
            user: authUser
          })

        } else {
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
      })
  }, [])

  return (
    <Router>
      <div className="app">

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            {/*Header*/}
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            {/*Header*/}
            <Header />
            <Payment />
          </Route>
          <Route path="/">
            {/*Header*/}
            <Header />
            {/*Home*/}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
