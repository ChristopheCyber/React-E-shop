import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
// components:
import { HomePage } from './pages/homepage/homepage.component.jsx';
import AppComponent from './pages/MenuHeaderPages/App-component';
import ShopComponent from './pages/shop/shop.component.jsx';
import HeaderComponent from './components/MainHeader/header.component';
import SignInAndUpComponent from './pages/sign-in-and-up/sign-in-and-up.component.jsx';
import ContactComponent from './pages/contact/contact.component.jsx';
import SignInComponent from './pages/sign-in-and-up/sign-in/sign-in.component.jsx';
import SignUpComponent from './pages/sign-in-and-up/sign-up/sign-up.component.jsx';
import CheckoutPage from './pages/checkout/checkoutPage.component';
// Firebase Authentication firebase.auth():
import { auth, createUserProfileDoc } from "./firebase/firebase.utils";
// for Redux use :
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';
//
/*
const FashionPage1 = () => (
  <div>
    <h1>Fashion Page</h1>
    <h2>Fashion elements:</h2>
    <em>
      Unavailable ! <br /> =&gt; Under construction . . .
    </em>
  </div>
)*/

/* other way to write the fct:
function Paintings() {
  return <h2>Paintings</h2>;
}*/
//
class App extends Component {
  /*We don't need anymore CONSTRUCTOR+THIS.STATE
    We don't need anymore passing the currentUser to <HeaderComponent>
    because REDUX manages it 
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }*/

  /*methode indicatrice pour stopper listening/subscription apres un unmount 
    afin de stopper un eventuel Memory Leaks occasionne ainsi
   use ComponentWillUnmount to stop listening from Firebase fct .onAuthStateChanged
   Stop Memory Leaks with componentWillUnmount Lifecycle Method in React
  */
  //methode de classe declaree ici, par defaut nulle. puis definie ds le DidMount
  unsuscribeFromAuth = null;

  /*save the unsubscribe reference on the class instance (this.)
   and later just read it from the class instance again: this.unsubscribe()
  */
  // unsubscribe = auth.onAuthStateChanged(function (user) {
  //   console.log("unsuscribe method")
  // });

  componentDidMount() {
    this.unsuscribeFromAuth =
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          console.log("componentDidMount()=>user !=null =", user);
          // userRef=firestore.doc(`/users/${user.uid}`) returned by 
          // fct createUserProfileDoc in firebase.utils.js
          // createUserProfileDoc(user) => check if user exists in DB, if not=>create it (set)
          const userRef = await createUserProfileDoc(user);
          // listener onSnapshot for checking if DB has updated with new datas 
          // ie if user-snapshot changed (when sign-in again or new sign-up)
          userRef.onSnapshot((snap) => {
            //doc-props/fields got by method .data()
            console.log("onSnapshot.data() =>", snap.data());
            // user props/fields saved in state of App
            // previously : this.setState({ currentUser: user });

            /*this.setState({
              currentUser: {
                id: snap.id, //adding the id taken from user-snapshot
                ...snap.data() // all other props/fields of user-doc got by .data()
              }
            }
              , () => { console.log("user !=null=>current User =", this.state.currentUser) }
            );*/
            this.props.fctCurrentUser(
              //sending all that as user.payload in setCurrentUser action:
              //type: 'SET_CURRENT_USER',payload: user
              {
                id: snap.id, //adding the id taken from user-snapshot
                ...snap.data() // all other props/fields of user-doc got by .data()
              }
            );
            console.log("user !=null; this.props.setCurrentUser=> current User: Id =",
              snap.id, "; snapshot=", snap.data());
            console.log("mapStateToProps => this.props.currentUser =",
              this.props.currentUser);
          }
          )
        }
        else {
          console.log("user null; this.props.setCurrentUser=> this.props =",
            this.props);
          // if user is null (when logging out) we update the state too
          this.props.fctCurrentUser(user);
        }
        /*
        else {
          // if user is null (when logging out) we update the state too
          this.setState({ currentUser: user }
            , () => { console.log("user null=>current User =", this.state.currentUser) }
          );
        }
        */

        // console.log("DidMount=>typeof user=", typeof user, "; user =", user);
        // console.log("User photoURL =",user.photoURL);

        // console.log("DidMount=>typeof this.unsuscribeFromAuth=",typeof this.unsuscribeFromAuth,
        // "; this.unsuscribeFromAuth =",this.unsuscribeFromAuth);
      })
  }

  componentWillUnmount() {
    console.log("WillUnMount this.unsuscribeFromAuth =", this.unsuscribeFromAuth);
    this.unsuscribeFromAuth();
    // this.unsubscribe();
    console.log("componentWillUnmount triggered");
  }

  render() {
    return (
      <div className="App bigLow">
        {/*
          We don't need anymore passing the currentUser to <HeaderComponent>
          because REDUX manages it 
          <HeaderComponent currentUser={this.state.currentUser} />
        */}
        <HeaderComponent />

        <div className="DflexRow">
          <nav className="MenuNav">
            <ul>
              {/** '/' means http://localhost:3000/ ;'exact' means 'exacty this path'*/}
              <li> <Link to="/shop" className="link">Preview Collections</Link> </li>
              <li> <Link to="/paintings" className="link">Paintings</Link> </li>
              <li> <Link to="/jewerly" className="link">Jewerly</Link> </li>
              <li> <Link to="/fashion" className="link">Fashion</Link> </li>
              <li> <Link to="/women" className="link">For Women</Link> </li>
              <li> <Link to="/men" className="link">For Men</Link> </li>
            </ul>
          </nav>
        </div>

        {/*<Switch>
          <Route exact={true} path='/' component={HomePage} />
          <Route path='/fashion' component={FashionPage1} />
        </Switch>*/}
        {/* <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          {/* Method 1=> if no parameters passed necessary
          <Route path="/paintings" component={AppComponent}/> */}

          {/* Method 2a=>passing params with a fct as a RENDER PROP 
            => just updating component without re-creating/re-MOUNTing it 
            => better PERFORMANCE 
            => but NO-TRIGGERING componentDidMount/Fetch
          <Route path="/paintings"
            render={ (props) => (
              <AppComponent {...props} propPageCat={`paintings`} /> ) }
          /> */}

          {/* Method 2b<=>2a=>passing params
            =>but NO-TRIGGERING mount componentDidMount/Fetch
          <Route path="/paintings">
            <AppComponent propPageCat="paintings"/>
          </Route> */}

          {/* Method 3=>passing params with a fct as COMPONENT PROP 
            => re-creating/re-MOUNTing the component ( lowering PERFORMANCE )
            => TRIGGERING componentDidMount/Fetch :) */}
          <Route path="/paintings"
            component={() =>
              (<AppComponent propPageCat={`paintings`} />)} />

          <Route path="/jewerly"
            component={() =>
              (<AppComponent propPageCat={`jewerly`} />)} />
          <Route path="/fashion"
            component={() =>
              (<AppComponent propPageCat={`fashion`} />)} />
          {/*<Route path='/fashion' component={FashionPage1} />*/}
          <Route path="/women"
            component={() =>
              (<AppComponent propPageCat={`women`} />)} />
          <Route path="/men"
            component={() =>
              (<AppComponent propPageCat={`men`} />)} />
          {/*<Route exact={true} path='/shop'  
            component={() =>
              (<ShopComponent />)} />*/}
          <Route exact={true} path='/shop' component={ShopComponent} />
          <Route exact={true} path='/checkout' component={CheckoutPage} />
          <Route exact={true} path='/contact' component={ContactComponent} />
          <Route exact={true} path='/signinandup' component={SignInAndUpComponent} />
          {/*
          <Route exact={true} path='/signin' component={SignInComponent} />
          replaced for Redirecting on Home page when already Signed-In      */}
          <Route exact={true} path='/signin'
            render={() => (this.props.currentUser) ?
              (<Redirect to='/' />) : (<SignInComponent />)}
          />
          <Route exact={true} path='/signup' component={SignUpComponent} />
          <Route exact={true} path='/' component={HomePage} />
          {/* same as:
          <Route exact path='/'>
            <HomePage/>
          </Route>*/}
        </Switch>
        {/*<Route exact={true} path='/' component={HomePage}/>
        <Route exact={true} path='/fashion' component={FashionPage1}/>
        <FashionPage1></FashionPage1>
        <HomePage />*/}
      </div>
    );
  }
}
//Read user from Redux-state for Redirect to Home when already signed-in
//fct accessing the state props through the Root-Reducer
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});
/* equivalent as Destructuring as: 
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});*/


const mapDispatchToProps = dispatch => ({
  //defining the fct fctCurrentUser()
  fctCurrentUser: user => dispatch(setCurrentUser(user))
});
/*export default App;*/
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);