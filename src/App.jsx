import React from 'react';
import Photogrid from './components/PhotoGrid.jsx';

export default function App() {
	return (
		<main className="container">
		<section className="header">
			<h1 className="category">Featured Eats!</h1>
		</section>
		<Photogrid />
		</main>
	);
}
