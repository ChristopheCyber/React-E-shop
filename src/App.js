import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage.component.jsx';
import AppComponent from './pages/MenuHeaderPages/App-component';
//
const HomePageT = props => {
  console.log("HomePageT PROPS=", props);
  return (
    <div>
      <button onClick={() => props.history.push('/topics')}>Topics List</button>
      <h3>HOME PAGE</h3>
    </div>
  );
};

const TopicsList = props => {
  console.log("TopicsList PROPS=", props);
  return (
    <div>
      <h3>TOPIC LIST PAGE</h3>
      <Link to='/topics/13'>LINK TO /topics/13</Link>
      <br />
      <button onClick={() => props.history.push('/topics/13')}>
        BUTTON TO /topics/13 Topic Detail
      </button>
      <br />
      <Link to={`${props.match.url}/13`}>TO TOPIC 13</Link>
      {/*
      <br/>
      <Link to={`${props.match.url}/17`}>TO TOPIC 17</Link>
      <br/>
      <Link to={`${props.match.url}/21`}>TO TOPIC 21</Link>
         */}
    </div>
  );
};

const TopicDetail = props => {
  console.log("TopicDetail PROPS=", props);
  return (
    <div>
      <h3>TOPIC DETAIL PAGE: {props.match.params.topic_Number}</h3>
    </div>
  );
};/*
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
      <h1> E-shop S69 Routing </h1>

      {/** for testing */}
      <div>
        <Route exact path='/' component={HomePageT} />
        <Route exact path='/topics' component={TopicsList} />
        <Route exact path='/topics/:topic_Number' component={TopicDetail} />
        {/*
        <Route exact path='/blog/asdqw/topics' component={TopicsList} />
        <Route path='/blog/asdqw/topics/:topicId' component={TopicDetail} />
        <Route exact path='/blog/topics' component={TopicsList} />
        <Route path='/blog/topics/:topicId' component={TopicDetail} />
        */}
      </div>
      {/** for testing */}

      <div className="DflexRow">
        <nav className="MenuNav">
          <ul>
            <li>Links :</li>
            {/** '/' means http://localhost:3000/ ;'exact' means 'exacty this path'*/}
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
