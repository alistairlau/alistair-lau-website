import React from 'react'
import Carousel from '../components/Carousel/Carousel';
import Features from '../components/Features/Features';
import { Content } from '../components/Content/Content';
import Hero  from '../components/Hero/Hero'
import {heroOne, heroTwo, heroThree } from '../data/HeroData'

// Hero feature Content Carousel

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Content {...heroOne} />
      <Content {...heroTwo} /> 
      <Content {...heroThree} />
      <Carousel />
    </>
  )
}

export default Home