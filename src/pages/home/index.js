import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { trendings } from '../../dumydata/trendings'
import Navbar from '../navbar'
import {data}from '../../dumydata/data'
import './home.css'
import './trendings.css'
import Card from './card'
import { useContext } from 'react'
import { registerContext } from '../../App'


const Home = () => {
  const value =useContext(registerContext)
  useEffect(()=>{
    console.log(value);
  })
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
        {/* <a className='btn started'><h5>GET STARTED </h5> </a> */}
        <Link className='btn started'><h5>GET STARTED </h5> </Link>
        </div>
      </div>
      <div id='home-content'>
        
        <section className='trending-cont'>
          <h5 className='heading'>TRENDINGS</h5>
          <a className='more-btn'>More</a>


            
          <section className='trend-papers'>

            {
              trendings.map((item,index)=>{
                return <Card key={index} item={item}/>
              })
            }
          </section>
        </section>
        <section className='trending-cont explore'>
          <h5 className='heading'>EXPLORE</h5>
          <a className='more-btn'>More</a>
            
          <section className='trend-papers '>

            {
              data.map((item,index)=>{
            return <Card key={index} item={item}/>
              })
            }
          </section>
        </section>
      </div>
    </>
  )
}

export default Home
