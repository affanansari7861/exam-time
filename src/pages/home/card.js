import React, { useEffect } from 'react'

const Card = ({item}) => {
    
  return (
    <article className='card'>
    <img className='cover-page' src={require('../../dumydata/book-cover.jpg')} alt=""/>
    <section className='card-foot'>
                  
    <h6>{item.subject}</h6>
    <p>{item.sem} semester</p>
    </section>
                  
    </article>
  )
}

export default Card