import React, { Component } from 'react';
import './menu-item.styles.scss';

import { withRouter } from 'react-router-dom';
// for Redux use :
import { connect } from 'react-redux';
import { updateTriggerPopUpHome } from '../../redux/menu-item/menu-item-actions';

class MenuItem extends Component {
    render() {
        return (
            <div className={`menu-item ${this.props.size}`} >
                <div className={`background-image ${this.props.imageBackOn}`}
                    style={{ //dynamic CSS
                        // <img src={ require(`./img/img${prop1.cardProp2.id}.jpg`)} 
                        // alt={`Pic ${prop1.cardProp2.id}`} 
                        // title={`Image ${prop1.cardProp2.id}`}
                        backgroundImage: `url(${require(`./img/${this.props.imageBack}`)})`
                    }} onClick={() => this.props.fctUpdateTriggerPopUpHome()}
                >
                    <img className="image"
                        src={require(`./img/${this.props.image}`)}
                        alt={`Pic ${this.props.image}`} 
                    />
                </div>
                <div className="content">
                    <h1 className="title">
                        {/*this.props.title.toLowerCase()*/}
                        {this.props.title}
                    </h1>
                    <span className="subtitle link"
                        onClick={() => (
                            this.props.history.push(`${this.props.match.url}${this.props.title.toLowerCase()}`)
                        )}
                    >
                        {this.props.linkUrl}
                        {/*if using Link instead of HOC withRouter :
                    <Link to="/paintings">{this.props.linkUrl}</Link>
                    <Link to={`./${this.props.title.toLowerCase()}`} className="link">
                        {this.props.linkUrl}
                    </Link>*/}
                    </span>
                </div>
            </div>
        );
    }
}

// export default withRouter(MenuItem);
//REDUX:
const mapDispatchToProps = dispatch => ({
    fctUpdateTriggerPopUpHome: (togglePopUp) => dispatch(updateTriggerPopUpHome(togglePopUp))
});

export default connect(
    null,
    mapDispatchToProps
)(withRouter(MenuItem));
