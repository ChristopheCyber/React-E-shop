import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carousel.styles.scss';

class CarouselComponent extends Component {
    handleClick = () => {
        this.props.toggle();
       };
    render() {
        return (
            <div className="carousel-wrapper carousel-wrapper-local">
            <span className="close" onClick={this.handleClick}>&times; Close</span>
            <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs axis={"horizontal"} onClickItem={this.handleClick} swipeable={false}>
                <div>
                    <img src={require(`../../menu-item/img/FashionBack.jpg`)} alt="" />
                </div>
                <div>
                    <img src={require(`../../menu-item/img/PaintingsBack.jpg`)} alt="" />
                </div>
                <div>
                    <img src={require(`../../menu-item/img/MenBack.jpg`)} alt="" />
                </div>
                <div>
                    <img src={require(`../../menu-item/img/WomenBack.jpg`)} alt="" />
                </div>
            </Carousel>
        </div>
        );
    }
}

export default CarouselComponent;
