import React from 'react'
import data from "../../data/index.json"

const MySkills = () => {
  return (
    <div>
      <section className='skills--section' id='mySkills'>
            <div className='portfolio-container'>
                <p className='section--title'>My Skills</p>
                <h2 className='skills--section--heading'>Programming Knowledge</h2>
            </div> 
            <div>
                {data?.skills?.map((item,idx)=>{
                   return (
                    <div key={idx}
                    className='skills--section--card'
                    >
                        <div className='skills--section--img'>
                            <img src={item.src} alt="product chain" />
                        </div>
                        <div
                        className='skills--section--card--content'
                        >
                            <h3 className='skills--section--title'>{item.title}</h3>
                            <p className='skills--section--description'>{item.description}</p>
                        </div>
                    
                    </div>
                   ) 
                })}
                </div>   
      </section>
    </div>
  )
}

export default MySkills
