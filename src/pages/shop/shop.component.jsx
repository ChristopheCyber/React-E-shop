import React from 'react';
import '../MenuHeaderPages/SubApp-component.css'
import SubAppComponent from '../MenuHeaderPages/SubApp-component';

const shopComponent = () => {
    return (
        <div className="App-Component img-class">
            Collections Previews ( 4 samples by collection )
            <SubAppComponent propPageCat={`paintings`} propSbox={`hideSearchBox`}
            propListLength={4}/>
            <SubAppComponent propPageCat={`jewerly`} propSbox={`hideSearchBox`}
            propListLength={4}/>
            <SubAppComponent propPageCat={`fashion`} propSbox={`hideSearchBox`}
            propListLength={4}/>
            <SubAppComponent propPageCat={`women`} propSbox={`hideSearchBox`}
            propListLength={4}/>
            <SubAppComponent propPageCat={`men`} propSbox={`hideSearchBox`}
            propListLength={4}/>
        </div>
    );
}

export default shopComponent;