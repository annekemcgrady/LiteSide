import React from 'react';
import './CardContainer.css'
import Card from '../Card/Card.js'



const CardContainer = ({ data }) => {

const Cards = data.map( item => {

  return <Card key={item.id} item={item} />

  })

  return (
    <main className="main">
      { Cards }
    </main>
  )


}



export default CardContainer;