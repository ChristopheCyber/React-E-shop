import React from 'react';
import './contact.styles.scss';

const ContactComponent = () => {
    return (
        <div className="contact">
        <h5>Front End Developer :</h5>
            <h1>Schlienger Christophe</h1>
            <br/>
            <h1>( France / Czech Republic / International )</h1>
            <br/>
            <br/>
            <div>
{/*
                 <img src="../../assets/logo-LinkedIn.jpg" alt="LinkedIn" />
                 <a href="https://www.linkedin.com/in/christophe-schlienger-04164a1a8/">
                     LinkedIn profile
                 </a>
  */}
                <a  className="link-logo" 
                    href="https://www.linkedin.com/in/christophe-schlienger-04164a1a8/"
                    target="_blank" rel="noopener noreferrer">
                    LinkedIn profile:
                    <img 
                        // src={require(`../../assets/logo-LinkedIn.jpg`)}
                        src={require(`../../assets/logo-banner-LinkedIn.png`)}
                        alt="LinkedIn profile"
                        // title="LinkedIn profile"
                        className="link-logo-img" 
                    />
                </a>
                </div>
        </div>
    );
}

export default ContactComponent;
