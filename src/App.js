import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage.component.jsx';
import AppComponent from './pages/MenuHeaderPages/App-component';
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
      {/** '/' means http://localhost:3000/ ;'exact' means 'exacty this path'*/}
      <h1> E-shop S69 Routing </h1>
      <div className="DflexRow">
        <nav className="MenuNav">
          <ul>
            <li>Links :</li>
            <li> <Link to="/">Home Page</Link> </li>
            <li> <Link to="/paintings">Paintings</Link> </li>
            <li> <Link to="/jewerly">Jewerly</Link> </li>
            <li> <Link to="/fashion">Fashion</Link> </li>
            <li> <Link to="/women">Women</Link> </li>
            <li> <Link to="/men">Men</Link> </li>
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
        {/*<Route path="/paintings">
          <AppComponent propPageCat="paintings" />
        </Route>*/}
        <Route path="/paintings"
                component={ () => 
             (<AppComponent propPageCat={`paintings`} />) } />
        {/* Method 3; passing a fct as COMPONENT PROP 
            => recreating the component 
            => updating componentDidMount/Fetch :) */}
        <Route path="/jewerly"
                component={ () => 
             (<AppComponent propPageCat={`jewerly`} />) } />
        {/* Method 0 => if no parameters passed necessary
        <Route path="/jewerly" component={AppComponent}/>

        {/* Method 1 => but no updating componentDidMount/Fetch
        <Route path="/jewerly">
          <AppComponent propPageCat="jewerly"/>
        </Route>

        {/* Method 2; passing a fct as RENDER PROP 
            => just updating component without receeating it 
            => better performance 
            => but no updating componentDidMount/Fetch
        <Route path="/jewerly"
          render={ (props) => (
            <AppComponent {...props} propPageCat={`jewerly`} /> ) }
        />*/}
        <Route path="/fashion"
                component={ () => 
             (<AppComponent propPageCat={`fashion`} />) } />
        {/*<Route path='/fashion' component={FashionPage1} />*/}
        <Route path="/women"
                component={ () => 
             (<AppComponent propPageCat={`women`} />) } />
        <Route path="/men"
                component={ () => 
             (<AppComponent propPageCat={`men`} />) } />
        <Route exact={true} path='/' component={HomePage} />
      </Switch>
      {/*<Route exact={true} path='/' component={HomePage}/>
      <Route exact={true} path='/fashion' component={FashionPage1}/>
      <FashionPage1></FashionPage1>
      <HomePage />*/}
    </div>
  );
}
export default App;
