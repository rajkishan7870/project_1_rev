import React from 'react'
import ImgContainer from '../../components/ImgContainer/ImgContainer'
import About from '../About/About'
import Footer from '../../components/Footer/Footer'
import Pricing from '../Pricing/Pricing'
import TrainingProg from '../TrainingProg/TrainingProg'

export default function Home() {
  return (
    <div>
        <ImgContainer/>
        <About/>
        <TrainingProg/>
        <Pricing/>
        <Footer/>
    </div>
  )
}
