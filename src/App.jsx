import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import Photogrid from './components/PhotoGrid.jsx';

export default function App() {
	const info = {
        url: require("./assets/flapjacks.jpg"),
        photographer: "Photo by Unknown Borba from Pexels"
    }
	return (
		<main className="container">
		{/* {console.log(info.url.default)}
		<img src={info.url.default} alt={info.photographer} />
			<StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={4}
          editing={false}
        /> */}
		<Photogrid />
		</main>
	);
}
