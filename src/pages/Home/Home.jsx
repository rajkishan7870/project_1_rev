import React from 'react'
import ImgContainer from '../../components/ImgContainer/ImgContainer'
import About from '../About/About'
import Footer from '../../components/Footer/Footer'
import Pricing from '../Pricing/Pricing'
import TrainingProg from '../TrainingProg/TrainingProg'
import Team from '../Trainer/Trainer'

export default function Home() {
  return (
    <div>
        <ImgContainer/>
        <About/>
        <Team/>
        <TrainingProg/>
        <Pricing/>
        <Footer/>
    </div>
  )
}
