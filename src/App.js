import './App.css'; 
import HomePage from './page/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom'
import ShopPage from './page/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils'
import React from 'react';

class App extends React.Component {
  
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  //Property to App Class
  unsubscribeFromAuth = null

  //
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      //Log the logged in users details
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route path='/signin' component={SignInAndSignUpPage}/>
          </Switch>
      </div>
    );
  }
}

export default App;
