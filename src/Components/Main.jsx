import React from 'react'
import GuitarPicks from './Guitar-Picks/GuitarPicks'
import Guitars from './Guitar/Guitars'
import Pedals from './Pedals/Pedals'
import Bass from './Bass/Bass'
import Background from './Background-Slider/BackgroundSlider'
import './main.css'

window.addEventListener('scroll', () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY
  console.log(scrollable)
})
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