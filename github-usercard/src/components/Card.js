import React from 'react';


const Card = props => {



    return (
        <div>
            {props.followers.map(element =>
                <div className="followers" key={element.id}>
                    <h4>{element.login}</h4>
                    <img src={element.avatar_url} alt={element.login} className="App-logo"/>
                </div>

            )}
        </div>
    )
}

export default Card;