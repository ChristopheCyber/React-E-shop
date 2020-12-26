import React, { Component } from 'react';
import './menu-item.styles.scss';

import { withRouter } from 'react-router-dom';
// for carousel :
import CarouselComponent from "../../components/reusable-components/carousel/carousel.component.jsx";

class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopUp: false
        };
    }
    togglePop = () => {
        this.setState({
            showPopUp: !this.state.showPopUp
        });
    };
    render() {
        return (
            <div className={`menu-item ${this.props.size} 
                ${this.state.showPopUp ? 'showPopUp' : ''}` } >
                <div className={`background-image ${this.props.imageBackOn}`}
                    style={{ //dynamic CSS
                        // <img src={ require(`./img/img${prop1.cardProp2.id}.jpg`)} 
                        // alt={`Pic ${prop1.cardProp2.id}`} 
                        // title={`Image ${prop1.cardProp2.id}`}
                        backgroundImage: `url(${require(`./img/${this.props.imageBack}`)})`
                    }} onClick={this.togglePop}
                >
                    <img className="image"
                        src={require(`./img/${this.props.image}`)}
                        alt={`Pic ${this.props.image}`} />
                </div>
                {this.state.showPopUp ? <CarouselComponent className="CarouselComponent" toggle={this.togglePop} /> : null}
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

export default withRouter(MenuItem);

