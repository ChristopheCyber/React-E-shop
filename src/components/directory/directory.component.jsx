import React, { Component } from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component.jsx';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = { 
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
    
    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map( 
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

