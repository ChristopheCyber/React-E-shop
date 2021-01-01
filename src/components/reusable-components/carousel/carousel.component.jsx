import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carousel.styles.scss';
// for Redux use :
import { connect } from 'react-redux';
import { updateTriggerPopUp } from '../../../redux/cart/cart-actions';
import { updateTriggerPopUpHome } from '../../../redux/menu-item/menu-item-actions';
/*
Carousel: react-responsive-carousel (TypeScript)
options : https://morioh.com/p/e1effe342241
or : https://www.npmjs.com/package/react-responsive-carousel
help : https://www.bountysource.com/teams/react-responsive-carousel/issues?tracker_ids=12004397
*/
class CarouselComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDraging: false,
            imagesTable: []
        }
    }
    //*** Life Cycle method componentDidMount() {}
    componentDidMount() {
        console.log("this.props.imagesJSON=", this.props.imagesJSON);
        fetch(`./local-datas/${this.props.imagesJSON}/json-data-items-${this.props.imagesJSON}.json`)
            .then(resp1 => resp1.json())
            .then(images1 => this.setState({ imagesTable: images1 }))
            /* local error message */
            .catch(error => {
                console.error('Problem with your fetch operation for '
                    , this.props.imagesJSON, ' in the list of items : error ='
                    , error);
            });
    };
    // handleClick = () => {
    //     this.props.toggle();
    //    };
    handleClick = () => {
        this.props.source === "Home"
            ? this.props.fctUpdateTriggerPopUpHome()
            : this.props.fctUpdateTriggerPopUp()
    };
    render() {
        return (
            <div className="carousel-wrapper carousel-wrapper-local">
                {/*<span className="close" onClick={this.handleClick}>&times; Close</span>*/}
                <button className="close" onClick={this.handleClick}>&times; Close Gallery</button>
                <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs axis={"horizontal"}
                    /* onClickItem={this.handleClick} */
                    swipeable={true} emulateTouch={true} //for graning with mouse
                >
                    {/* 2 blocks <div/> first for triggering auto start of Autoplay of carousel: */}
                    <div>
                        {this.props.imagesJSON && this.state.imagesTable.length > 0 && this.state.imagesTable.filter(e => e.id === 1).map(
                            images => (
                                <img key={images.id}
                                    src={require(`../../../assets/pictures/carousel-galleries-sized/${images.category.toUpperCase()}/img${images.id}.jpg`)}
                                    alt="" />
                            )
                        )}
                    </div>
                    <div>
                        {this.props.imagesJSON && this.state.imagesTable.length > 1 && this.state.imagesTable.filter(e => e.id === 2).map(
                            images => (
                                <img key={images.id}
                                    src={require(`../../../assets/pictures/carousel-galleries-sized/${images.category.toUpperCase()}/img${images.id}.jpg`)}
                                    alt="" />
                            )
                        )}
                    </div>
                    {/* then .map for rest of pics: */}
                    {this.props.imagesJSON && this.state.imagesTable.length > 2 ? (
                        // console.log('Json file present for mapping'),
                        this.state.imagesTable.filter(e => e.id > 2).map(
                            images => (
                                <div key={images.id}>
                                    <img
                                        src={require(`../../../assets/pictures/carousel-galleries-sized/${images.category.toUpperCase()}/img${images.id}.jpg`)}
                                        alt="" />
                                </div>)
                        )) :
                        (
                            // console.log('No Json file to map'),
                            <div>
                                <img
                                    src={require(`../../../assets/pictures/carousel-galleries-sized/DEFAULT/carousel.jpg`)}
                                    alt="" />
                            </div>
                        )
                    }
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