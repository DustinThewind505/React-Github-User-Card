import React from 'react';

import Card from './Card';

const ListContainer = props => {



    return(
        <div className="list-container">
            <h3>Followers:</h3>
            <Card followers={props.followers}/>
        </div>
    )
}

export default ListContainer;