import React from 'react';

import Card from './Card';

const ListContainer = props => {



    return(
        <div>
            <h3>Followers:</h3>
            {props.followers.map(element => 
                <h4>{element.login}</h4>
            )}
            <Card />
        </div>
    )
}

export default ListContainer;