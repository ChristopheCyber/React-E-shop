import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carousel.styles.scss';
// for Redux use :
import { connect } from 'react-redux';
import { updateTriggerPopUp } from '../../../redux/cart/cart-actions';
import { updateTriggerPopUpHome } from '../../../redux/menu-item/menu-item-actions';

class CarouselComponent extends Component {
    // handleClick = () => {
    //     this.props.toggle();
    //    };
    render() {
        return (
            <div className="carousel-wrapper carousel-wrapper-local">
            {/*<span className="close" onClick={this.handleClick}>&times; Close</span>*/}
            <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs axis={"horizontal"} 
            // onClickItem={this.handleClick} 
            onClickItem={()=>
                this.props.source === "Home" 
                ? this.props.fctUpdateTriggerPopUpHome() 
                : this.props.fctUpdateTriggerPopUp()
            } 
            swipeable={false}>
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

// export default CarouselComponent;
//REDUX:
const mapDispatchToProps = dispatch => ({
    fctUpdateTriggerPopUp: (togglePopUp) => dispatch(updateTriggerPopUp(togglePopUp)),
    fctUpdateTriggerPopUpHome: (togglePopUpHome) => dispatch(updateTriggerPopUpHome(togglePopUpHome))
});

export default connect(
    null,
    mapDispatchToProps
)(CarouselComponent);