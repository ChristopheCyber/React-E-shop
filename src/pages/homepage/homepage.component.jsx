import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component.jsx';
// for Redux use :
import { connect } from 'react-redux';
// for carousel :
import CarouselComponent from "../../components/reusable-components/carousel/carousel.component.jsx";

// functionnal component
const HomePage = ({ triggerPopUpHome }) => {
    return (
        <div>
            {/* Carousel PopUp : */}
            {triggerPopUpHome ? <CarouselComponent className="CarouselComponent" source="Home" imagesJSON="women"/> : null}
            <Directory className="homepage"
            />
        </div>);
};
//fct accessing the state props through the Root-Reducer
const mapStateToProps = state => ({
    triggerPopUpHome: state.menuItemKey.triggerPopUpHome
});

// export default withRouter(SubAppComponent);
/*export default App;*/
export default connect(
    mapStateToProps,
    null
)(HomePage);
