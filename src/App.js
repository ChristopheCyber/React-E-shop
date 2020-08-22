import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage.component.jsx';
import AppComponent from './pages/MenuHeaderPages/App-component';

const FashionPage1 = () => (
  <div>
    <h1>Fashion Page 1</h1>
    <h2>Fashion elements:</h2>
    <em>
       Unavailable ! <br/> =&gt; Under construction . . .
    </em>
  </div>
)
/*
function Paintings() {
  return <h2>Paintings</h2>;
}
function Jewerly() {
  return <h2>Jewerly</h2>;
}
*/

function App() {
  return (
    <div className="App bigLow">
      {/** '/' means http://localhost:3000/ 
        ;'exact' means 'exacty this path'*/}
      <h1> E-shop S69 Routing </h1>
      <div className="DflexRow">
        <nav className="MenuNav">
          <ul>
            <li>Links :</li>
            <li> <Link to="/">Home Page</Link> </li>
            <li> <Link to="/paintings">Paintings</Link> </li>
            <li> <Link to="/jewerly">Jewerly</Link> </li>
            <li> <Link to="/fashion">Fashion</Link> </li>
          </ul>
        </nav>
      </div>
      {/*<Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route path='/fashion' component={FashionPage1} />
      </Switch>*/}

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>

        <Route path="/paintings">
          <AppComponent />
        </Route>
        <Route path="/jewerly" component={AppComponent}/>
        <Route path='/fashion' component={FashionPage1} />
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
