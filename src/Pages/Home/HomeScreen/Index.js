import React from 'react'
import HeroSection from '../HeroSection'
// import MySkills from '../MySkills'
import Aboutme from '../Aboutme'
import MyPortfolio from '../MyPortfolio'
// import Testimonial from '../Testimonial'
import Contact from '../Contact'
import Footer from '../Footer'
import SkillSet from '../SkillSet'
import Education from '../Education'
const Index = () => {
  return (
    <div>
      <HeroSection/>
      {/* <MySkills/> */}
      <SkillSet/>
      <Aboutme/>
      <MyPortfolio/>
      <Education/>
      {/* <Testimonial/> */}
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Index
