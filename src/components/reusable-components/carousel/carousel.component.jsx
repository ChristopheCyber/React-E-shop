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
        // fetch(`./local-datas/jewerly/json-data-items-jewerly.json`)
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
    // onSwipeEnd(event) {
    //     console.log('End swiping bef...', event);
    //     event.preventDefault()
    //     event.stopPropagation()
    // }
    render() {
        return (
            <div className="carousel-wrapper carousel-wrapper-local">
                {/*<span className="close" onClick={this.handleClick}>&times; Close</span>*/}
                <button className="close" onClick={this.handleClick}>&times; Close Gallery</button>
                <Carousel infiniteLoop useKeyboardArrows autoPlay 
                    showThumbs axis={"horizontal"}
                    // onClickItem={this.handleClick} 
                    // onSwipeEnd={(e) => this.onSwipeEnd(e)}
                    /*
                    onClickItem={() => {
                        this.props.source === "Home"
                            ? this.props.fctUpdateTriggerPopUpHome()
                            : this.props.fctUpdateTriggerPopUp()
                    }
                    }
                    */
                    swipeable={true}
                    emulateTouch={true}
                >
                    {/*
                    {
                        imageList && imageList.map(images => (
                            <div>
                                <img src={images} alt={images.asset._id} key={images.asset._id} className="sliderimg" />
                            </div>
                        ))
                    }
                    */}
                    {/*mapping imgs sent : */}
                    <div>
                         <img 
                         src={require(`../../../assets/pictures/carousel-galleries-sized/DEFAULT/carousel.jpg`)}
                         alt="" />
                    </div>
                    <div>
                         <img 
                         src={require(`../../../assets/pictures/carousel-galleries-sized/DEFAULT/carousel1.jpg`)}
                         alt="" />
                    </div>

                    {this.props.imagesJSON ?
                        (console.log('Json file present for mapping'),
                            console.log('this.state.imagesTable =', this.state.imagesTable),
                            this.state.imagesTable.map(
                                images => (
                                    <div key={images.id}>
                                        <img 
                                            src={require(`../../../assets/pictures/carousel-galleries-sized/${images.category.toUpperCase()}/img${images.id}.jpg`)}
                                            alt="" />
                                    </div>)
                            )) :
                        (console.log('No Json file to map'),
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