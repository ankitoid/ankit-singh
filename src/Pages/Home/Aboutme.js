import React from 'react'
import { SlArrowRight } from 'react-icons/sl'

const Aboutme = () => {
  return (
    <section id='AboutMe' className='about--section'>
        <div className='about--section--img'>
            <img src="./img/about-croped.png" alt="About me" />
            {/* <img src="./img/kk.jpg" alt="About me" /> */}
        </div>
        <div className='hero--section--content-box about--section--box'>
            <div className='hero--section--content'>
                {/* <p className='section--title'> About</p> */}
                <h1 className='skills-section--heading' style={{width:"100%",display:"flex",justifyContent:"center"}}>About Me</h1>
                <p className='hero--section--description' style={{textAlign:"justify"}}>"I am a passionate software developer with a strong analytical mindset, currently working as a Software Developer at GlobalXperts. I am proficient in Java for data structures and algorithms, which helps me deliver optimized and efficient solutions. My expertise spans full-stack web app development, including mobile applications with React Native and modern front-end development with React. On the backend, I build robust and scalable solutions using Node.js, Express.js, and MongoDB. I completed my B.Tech in Computer Science from Sushila Devi Bansal College of Engineering, where I developed a solid foundation in both theoretical and practical aspects of software development."</p>
                <div style={{alignSelf:"flex-start",marginLeft:"35px",width:"100%"}}>
                  <h3>Key Aspects</h3>
                  <ul style={{listStyle:"none","marginTop":"20px","paddingLeft":"0px"}}>
                   <li><SlArrowRight/> <strong> Full stack  developer</strong> </li><br />
                   <li><SlArrowRight/> <strong>DSA problem solver in JAVA</strong></li><br />
                   <li><SlArrowRight/> <strong>Building REST API</strong></li><br />
                   <li><SlArrowRight/> <strong>Managing Database</strong> </li>
                  </ul>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Aboutme
