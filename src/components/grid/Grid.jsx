import React from 'react'
import Card from '../cards/Card';
import './Grid.css';
import { data } from "../../helper/data";

const grid = () => {
  return (
    <>
        <h1>POPULAR TOUR PLACES</h1>
        <div className='gridContainer'>
          {data.map((element) => {
            return (
              <Card title={element.title}
              image={element.image}
              desc = {element.desc}/>
            )
          })}
        </div>
    </>
  )
}

export default grid