import { useState } from "react";

function Card ({id  , name, info , price , image , removeCard}  ){

    
    const [readmore , setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0,200)}... `;

    function readMoreHandler(){
        setReadmore(!readmore);
    }

function notInterestedHandler(){
    removeCard(id);
    
}
    

    return(
        <div className="card">
            <img className="image" src={image} loading="lazy" alt={name} ></img>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
   
                <div className="tour-description">
                    {description}
                    <span className="read-more" onClick={readMoreHandler}>
                        {readmore ? ' Show less' : 'Read More'}
                    </span>
                </div>
            </div>
            <button button onClick={notInterestedHandler} className="btn-red"> Not Interested</button>

        </div>
    )
}

export default Card;