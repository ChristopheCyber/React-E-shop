import React, { Component } from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component.jsx';

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: []
    };
  }
  //*** Life Cycle method componentDidMount() {}
  componentDidMount() {
    //Fetch local in public folder
    fetch('./local-datas/json-local-datas.json')
      .then(resp1 => resp1.json())
      /* my promise */
      .then(products1 => this.setState({ sections: products1 }))
      /* local error message */
      .catch(error => {
        console.error('There has been a problem with your fetch operation:'
          , error);
      });
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
  }

  render() {
    console.log("sections=", this.state.sections);
    return (
      <div className="directory-menu">
        {
          this.state.sections.map(
            //using the REST '...' SPREAD SYNTAX
            ({ id, ...restOtherParams}) => (
                <MenuItem
                  //warning=>necessary key
                  key={id}
                  {...restOtherParams}
                />)
            // SAME AS:
            // ({ id, title, imageUrl, imageBack, 
            //   linkUrl, size, image, imageBackOn}) => (
            //     <MenuItem
            //       //warning=>necessary key
            //       key={id}
            //       title={title}
            //       linkUrl={linkUrl}
            //       imageUrl={imageUrl}
            //       imageBack={imageBack}
            //       size={size}
            //       image={image}
            //       imageBackOn={imageBackOn}
            //     />)
          )
        }
      </div>
    );
  }
}

export default Directory;

