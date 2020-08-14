import React, { Component } from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component.jsx';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            sections : [
                {
                  title: 'Hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'Shop Hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
                    };
    }
    
    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map( 
                      ({linkUrl,id,title,imageUrl}) => (
                        <MenuItem 
                            //don't forget the key
                                key={id} 
                                ItemProp1={title} 
                                ItemProp2={linkUrl} 
                                ItemProp3={imageUrl}
                            /> )
                    )
                }
            </div> 
        );
    }
}

export default Directory;

