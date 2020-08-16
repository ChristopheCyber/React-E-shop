import React, { Component } from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component.jsx';
import SECTIONS_DATA from './json-local-datas.js';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            section2: SECTIONS_DATA,
            section3: [],
            sections : [
                {
                  title: 'Paintings',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  imageLocal: 'Paintings.jpg',
                  id: 1,
                  linkUrl: 'Shop Paintings'
                },
                {
                  title: 'Jewerly',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  imageLocal: 'DiamondGif.gif',
                  id: 2,
                  linkUrl: 'Shop Jewerly'
                },
                {
                  title: 'Fashion',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  imageLocal: 'Fashion.jpg',
                  id: 3,
                  linkUrl: 'Shop Fashion'
                },
                {
                  title: 'WOMEN',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  imageLocal: 'WOMEN.jpg',
                  size: '200px',
                  id: 4,
                  linkUrl: 'Shop WOMEN'
                },
                {
                  title: 'MEN',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  imageLocal: 'MEN.jpg',
                  size: '200px',
                  id: 5,
                  linkUrl: 'Shop MEN'
                }
              ]
                    };
    }
  //*** Life Cycle method componentDidMount() {}
  componentDidMount() {
    // fetch('./local-datas/json-local-datas.js')
      //.then(resp1 => resp1.json())

      //Fetch in public folder
    fetch('./local-datas/json-local-datas.json')
      .then(resp1 => resp1.json())

      // response status local message
      // .then( response => {
      //   if (!response.ok) {
      //     throw new Error('Network response was not ok');
      //   }
      //   return response.blob();
      // } )
      // .then(
      //   function(response) {
      //     if (response.status !== 200) {
      //       console.log('Looks like there was a problem. Status Code: ' +
      //         response.status);
      //       return;
      //     }
      //     // Examine the text in the response
      //     response.json().then(function(data) {
      //       console.log("data =",data);
      //     });
      //   }
      // )

      // my promise
      .then(products1 => this.setState({ section3: products1 }))
      // local error message
      .catch(error => {
        console.error('There has been a problem with your fetch operation:'
          , error);
      });
  }
  
  render() {
    console.log("sections=",this.state.sections);
    console.log("section2=",this.state.section2);
    console.log("section3=",this.state.section3);
        return (
            <div className="directory-menu">
                {
                    this.state.section3.map( 
                      ({id,title,imageUrl,imageLocal,
                                          linkUrl,size}) => (
                        <MenuItem 
                            //don't forget the key
                                key={id} 
                                ItemProp1={title} 
                                ItemProp2={linkUrl} 
                                ItemProp3={imageUrl}
                                ItemProp4={imageLocal}
                                ItemProp5={size}
                            /> )
                    )
                }
            </div> 
        );
    }
}

export default Directory;

