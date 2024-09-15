import data from "../../data/index.json";
// import{ TbBrandCpp } from "react-icons/tb"
// import skilldata from 
import {  Col, Row } from 'react-bootstrap';

export default function SkillSet() {
  return (
    <section className="skillset--section" id="testimonial">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Skill Section</p>
          <h2 className="sections--heading">Technology Stack</h2>
        </div>
      </div>
      <div>
        <Row className="skillset--card--container">
          {data.skilldata.map((itm,idx)=>{
            return(
            <Col className="card" sm="6" md="4" lg="4">
              <img src={itm.src} alt="" width="50%" className="language--img"/>
              <h2 className="language--name">{itm.title} </h2>
            </Col>
            )
          })}
        </Row>
      </div>
     
      {/* <div className="portfolio--section--container">
      <div  className="testimonial--section--card">
      <div className="testimonial--section--card--author--detail">
              <img src={data[0]?.src} alt="Avatar" />
              <div>
                <p className="text-md testimonial--author--name">
                  C language
                </p>
                <p className="text-md testimonial--author--designation">
                  great language
                </p>
              </div>
            </div>
            <div className="testimonial--section--card--review">
             
            </div>
            <p className="text-md">Assumenda impedit quae dicta itaque minima corrupti!</p>
            
          </div>
        {data?.testimonial?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            <div className="testimonial--section--card--review">
             
            </div>
            <p className="text-md">{item.description}</p>
            <div className="testimonial--section--card--author--detail">
              <img src={item.src} alt="Avatar" />
              <div>
                <p className="text-md testimonial--author--name">
                  {item.author_name}
                </p>
                <p className="text-md testimonial--author--designation">
                  {item.author_designation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
}