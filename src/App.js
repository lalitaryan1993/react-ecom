import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';

import { auth } from './firebase/firebase.utils';

// const ShopPage = () => {
//   let { slug } = useParams();
//   return <div>Shop Page {slug}</div>;
// };

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Router>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route path='/shop'>
              <ShopPage />
            </Route>
            <Route path='/signIn'>
              <SignInAndSignUp />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
