import React from 'react';
import '../MenuHeaderPages/App-component.css'
import AppComponent from '../MenuHeaderPages/App-component';

class shopComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: []
        };
    }


    render() {
        return (
            <div className="App-Component img-class">
                Collections Previews ( 4 samples by collection )
                <AppComponent propPageCat={`paintings`} propSbox={`hideSearchBox`}
                propListLength={4}/>
                <AppComponent propPageCat={`jewerly`} propSbox={`hideSearchBox`}
                propListLength={4}/>
                <AppComponent propPageCat={`fashion`} propSbox={`hideSearchBox`}
                propListLength={4}/>
                <AppComponent propPageCat={`women`} propSbox={`hideSearchBox`}
                propListLength={4}/>
                <AppComponent propPageCat={`men`} propSbox={`hideSearchBox`}
                propListLength={4}/>
            </div>
        );
    }
}

export default shopComponent;