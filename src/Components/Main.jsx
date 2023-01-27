import React from 'react'
import GuitarPicks from './GuitarPicks'
import Guitars from './Guitars'
import Pedals from './Pedals'
import Bass from './Bass'
import Background from './BackgroundSlider'
import './main.css'

function Main() {
  return (
    <div className='background' >
      <section > <Background /></section>
      <section id='guitars'> <Guitars /></section>
      <section id='bass'> <Bass /></section>
      <section id='pedals'> <Pedals /></section>
      <section id='GuitarPicks'> <GuitarPicks /></section>
    </div>)
}

export default Main