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
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51Ha1fiIE5E8nP9ACOPniSZPk2ydGe3kSv1WOtATllInCaCpbU9pq9hakX4gECxxrgs6Wl7MIMv4A75xwDKeogwW0006C3wzeeV');

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
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
