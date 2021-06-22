import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

export default function App() {
	return (
		<>
			<StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={5}
          editing={false}
        />
		</>
	);
}
