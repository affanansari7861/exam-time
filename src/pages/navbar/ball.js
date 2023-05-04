import React, { useEffect, useRef } from 'react'
import './ball.css'
import { Link } from 'react-router-dom'


const Ball = () => {
  const ham = useRef();
  const nav = useRef();
  return (
    <>
      <nav id='nav'>
          <section id='nav-content' ref={nav}className='active-nav'>
                    {/* <a className='btn btn-1 nav-btn' href={'/'}>home</a>
                    <a className='btn btn-2 nav-btn' href={'/login'}>login</a>
                    <a className='btn btn-3 nav-btn' href={'/register'}>register</a> */}
                    <Link className='btn btn-1 nav-btn' to={'/exam-time'}>home</Link>
                    <button className='btn btn-2 nav-btn' >login</button>
                    <button className='btn btn-3 nav-btn' >register</button>
          </section>
                </nav>
      <div ref={ham} onClick={() => {
        nav.current.classList.toggle("active-nav");
        ham.current.classList.toggle('active-ham')
        }} id='ham'>
                      <div className='hamChild'></div>
                      <div className='hamChild'></div>
                      <div className='hamChild'></div>
                </div>
    </>
  )
}

export default Ball