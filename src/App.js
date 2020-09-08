import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage.component.jsx';
import AppComponent from './pages/MenuHeaderPages/App-component';
import ShopComponent from './pages/shop/shop.component.jsx';
import HeaderComponent from './components/MainHeader/header.component';
import signInAndUpComponent from './pages/sign-in-and-up/sign-in-and-up.component.jsx';
import contactComponent from './pages/contact/contact.component.jsx';
import signInComponent from './pages/sign-in-and-up/sign-in/sign-in.component.jsx';
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
function App() {
  return (
    <div className="App bigLow">
      {/*<h1>&lt; E-Shop &gt;</h1>*/}
      {/*<h1> E-Shop demo </h1>*/}
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
        <Route exact={true} path='/contact' component={contactComponent} />
        <Route exact={true} path='/signinandup' component={signInAndUpComponent} />
        <Route exact={true} path='/signin' component={signInComponent} />
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
export default App;
