import React from 'react'
import style from "./Home.module.css"
import logo from "../../assets/avataaars.svg";

export default function Home() {
  return <>
    <div className='columns-1 py-10 my-10'>
    <div className='columns-1'>
    <img src={logo} className='w-56 mx-auto' alt="" />
    </div>
    <div className='columns-1'>
    <h1 className='porto'>START FRAMEWORK</h1>
    <h5 className='font-medium'>Graphic Artist - Web Designer - Illustrator</h5>
    </div>
    </div>
  </>
}