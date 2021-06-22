import React from 'react'
import PhotoCard from './PhotoCard.jsx';

const data = [
    {
        name:"Jerry's Flapjack Highstack",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, praesentium. Est ex eos ipsam, praesentium dolor suscipit, nam esse consectetur placeat fuga dolorem, fugit illo repudiandae voluptatibus. Exercitationem.",
        rating: 5,
        url: require("../assets/flapjacks.jpg"),
        photographer: "Photo by Unknown from Pexels"
    },
    {
        name:"Rusty's Last Meal",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, recusandae!",
        rating: 4,
        url: require("../assets/burger.jpg"),
        photographer: "Photo by Jonathan Borba from Pexels"
    },
    {
        name:"High Naan Wheat Bread",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, recusandae!",
        rating: 3,
        url: require("../assets/drywheatbread.jpg"),
        photographer: "Photo by Mariana Kurnyk from Pexels"
    },
    {
        name:"Slim Bob's Shishkebabs",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, recusandae!",
        rating: 4,
        url: require("../assets/shishkebabs.jpg"),
        photographer: "Photo by Unknown from Pexels"
    },
    {
        name:"Suzy's Afternoon Salad",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, recusandae!",
        rating: 4,
        url: require("../assets/salad.jpg"),
        photographer: "Photo by julie aagaard from Pexels"
    },
]

export default function Photogrid() {
    return (
        <section className="grid">
            {data.map(card => {
                return(<PhotoCard key={card.name} card={card} />)
            })}
            
        </section>
    )
}
