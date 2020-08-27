import React from 'react';
import './App-component.css';
import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component.jsx';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      searchTxt1: '',
      imgSize1: "img-class"
    };
  }
  //*** Life Cycle method componentDidMount() {}
  componentDidMount() {
    console.log("this.props.propPageCat=",this.props.propPageCat);
    // fetch(`./local-datas/jewerly/json-data-items-jewerly.json`)
    fetch(`./local-datas/${this.props.propPageCat}/json-data-items-${this.props.propPageCat}.json`)
      .then(resp1 => resp1.json())
      .then(users1 => this.setState({ cards: users1 }))
  }
  //*** method perso created as an Arrow Function
  methodHandleChange = (evt) => { // (evt) =>{this.setState ( {searchTxt1:evt.target.value} )
    // setState() 
    this.setState({ searchTxt1: evt.target.value },
      () => {
        //  fctClassAnim() placed in callback of setState( ,()=>... )   
        fctClassAnim(this.state.searchTxt1);
        this.setState({ imgSize1: classAnim }
        );
      });
    // 
    // function fctClassAnim() anime filtered cards */
    var classAnim = "img-class";
    const tabCards = this.state.cards;
    function fctClassAnim(eltSearch) {
      var filteredCards2 = tabCards.filter(eltTab =>
        eltTab.name.toLowerCase().includes(eltSearch.toLowerCase()));
      /*document.querySelector('.img-class').classList.toggle('img-class-filtered');*/
      if (filteredCards2.length < tabCards.length) {
        classAnim = "card-list-filtered";
        /*document.getElementsByTagName('img')[0].style.height='100px';
            this.state.cards.map( cardElt => 
              <h1 key={cardElt.id}> {cardElt.name} </h1> )
          document.querySelectorAll('.img-class')[0].classList.toggle('img-class-filtered');*/
      }
      else {
        classAnim = "img-class";
      };
    }
    //
  }
  //*** Life Cycle method render() {}
  render() {
    /*destructuring object state, doing same as:*/
    /* const tabCards = this.state.cards; const constSearchTxt1 = this.state.searchTxt1; */
    const { cards: tabCards, searchTxt1: constSearchTxt1, imgSize1: constImgSize1 } = this.state;
    const filteredCards = tabCards.filter(eltTab =>
      eltTab.name.toLowerCase().includes(constSearchTxt1.toLowerCase()));
    //counting filtered cards + according text
    var nbrCards;
    if (filteredCards.length > 1) {
      nbrCards = " ( " + filteredCards.length + " items in list now ) ";
    }
    else {
      nbrCards = " ( " + filteredCards.length + " item in list now ) ";
    }
    //coloring text number filtered cards 
    var filterBigLowNumber = "bigLow-search";
    if (filteredCards.length < tabCards.length) {
      filterBigLowNumber = "bigLow-search-filtered";
    }
    return (
      <div className="App-Component img-class">
        <h1> Items Selection Board </h1>
        <label>
          <i className="bigLow js-grid">Search in items titles -&gt;</i>
        </label>
        <SearchBox
          propPlaceHolder="Type text for Searching"
          handleChangeFct={this.methodHandleChange}
        />
        <label>
          <i className={"bigLow " + filterBigLowNumber}>&nbsp; {nbrCards}</i>
        </label>
        {/*<CardList cardsProp1={this.state.cards} />*/}
        <CardList cardsProp1={filteredCards} cardsPropImg={constImgSize1} />
        {/*1 children of CardList component 
          <h2>CardList children here </h2>
          {  this.state.cards.map( cardElt => 
              <h1 key={cardElt.id}> {cardElt.name} </h1> ) }
        </CardList> 
          */}
      </div>
    );
  }
}
export default AppComponent;
