import React from 'react';
import './App.css';
import { HomePage } from './pages/homepage/homepage.component.jsx';
import { Route, Switch, Link } from 'react-router-dom';

const FashionNextPage1 = () => (
  <div>
    <h1>Fashion Page 1</h1>
    <h2>Fashion elt 1</h2>
  </div>
)

function Paintings() {
  return <h2>Paintings</h2>;
}

function Jewerly() {
  return <h2>Jewerly</h2>;
}

function App() {
  return (
    <div className="App bigLow">
      {/** '/' means http://localhost:3000/ 
      exact means exacty this path*/}
      <h1> E-shop S67 Styling </h1>
      <div className="DflexRow">
        <nav className="MenuNav">
          <ul>
            <li>Links :</li>
            <li> <Link to="/">Home Page</Link> </li>
            <li> <Link to="/Paintings">Paintings</Link> </li>
            <li> <Link to="/Jewerly">Jewerly</Link> </li>
            <li> <Link to="/fashion">Fashion</Link> </li>
          </ul>
        </nav>
      </div>
      {/*<Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route path='/fashion' component={FashionNextPage1} />
      </Switch>*/}

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/Paintings">
          <Paintings />
        </Route>
        <Route path="/Jewerly">
          <Jewerly />
        </Route>
        <Route path='/fashion' component={FashionNextPage1} />
        <Route exact={true} path='/' component={HomePage} />
      </Switch>
      {/*<Route exact={true} path='/' component={HomePage}/>
      <Route exact={true} path='/fashion' component={FashionNextPage1}/>
      <FashionNextPage1></FashionNextPage1>

      <HomePage />*/}
    </div>
  );
}

export default App;
