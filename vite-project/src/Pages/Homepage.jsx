import React from 'react'
import '../App.css'
import { BrandSlider, EditorC, Essential, FabSec, TopSlider } from '../Components/Slider'

const Homepage = () => {
  return (
    <div>
      <TopSlider/>
      <FabSec/>
      <Essential/>
      <BrandSlider/>
      <EditorC/>
    </div>
  )
}

export default Homepage
