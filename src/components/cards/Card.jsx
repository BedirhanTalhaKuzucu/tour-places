import React from 'react';
import  "./Card.css";
import { data } from "../../helper/data.js";

console.log(data);

const Card = ({title, image, desc}) => {
    return (
        <div className='cards'>
            <h2>{title}</h2>
            <div className="card-container">
                <img src={image} alt={title} className="image"/>
                <div className="overlay">{desc}</div>
            </div>
        </div>
        
    )
}

export default Card