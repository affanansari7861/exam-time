import React from 'react'
import { Link } from 'react-router-dom'
import { trendings } from '../../dumydata/trendings'
import Navbar from '../navbar'
import {data}from '../../dumydata/data'
import './home.css'
import './trendings.css'


const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div id="hero-cont">
        {/* <div className='overlay'></div> */}
        <div id="hero-sec">

        <h1>EXAM</h1>
        <h1>TIME</h1>
        <hr />
        <div className='desc'>
        <p >THE BEST WEBSITE FOR PREPARING EXAM AND FIND 
        SOLVED PREVIOUS YEARS QUESTION PAPERS</p>
        </div>
        <Link className='btn started'><h5>GET STARTED </h5> </Link>
        </div>
      </div>
      <div id='home-content'>
        
        <section className='trending-cont'>
          <h5 className='heading'>TRENDINGS</h5>
          <Link className='more-btn'>More</Link>

            
          <section className='trend-papers'>

            {
              trendings.map((item)=>{
                return <article className='card'>
                  <img className='cover-page' src={require('../../dumydata/book-cover.jpg')} alt=""/>
                  <section className='card-foot'>
                  
                   <h6>{item.subject}</h6>
                   <p>{item.sem} semester</p>
                  </section>
                  
                </article>
              })
            }
          </section>
        </section>
        <section className='trending-cont explore'>
          <h5 className='heading'>EXPLORE</h5>
          <Link className='more-btn'>More</Link>
            
          <section className='trend-papers '>

            {
              data.map((item)=>{
                return <article className='card'>
                  <img className='cover-page' src={require('../../dumydata/book-cover.jpg')} alt=""/>
                  <section className='card-foot'>
                  
                   <h6>{item.subject}</h6>
                   <p>{item.sem} semester</p>
                  </section>
                  
                </article>
              })
            }
          </section>
        </section>
      </div>
    </>
  )
}

export default Home
