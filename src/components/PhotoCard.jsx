import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

export default function PhotoCard({card}) {
    return (
        <div className="gridItem">
            <div className="image">
                <img src={card.url.default} alt={card.photographer} />
            </div>
            <div className="description">
                <div className="splitter">
                    <p className="name">
                        {card.name}
                    </p>
                    <StarRatingComponent 
          name={card.name} 
          starCount={5}
          value={card.rating}
          editing={false}
          starColor={"#F98404"}
        />
                </div>
                <p className="info">
                    {card.description}
                </p>
            </div>
        </div>
    )
}
