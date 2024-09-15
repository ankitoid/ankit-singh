import React from "react";
import data from "../../data/index.json"

export const Education = () => {
  return (
    <section className="education--section" id="myEducation">
      <div className="education--section--heading">
        {/* <p className="sub--title">Education & Training</p> */}
        <h2 className='section--heading'>Education & Training</h2>
      </div>
      <div className="education--container">
          <div className="education--column edu--column">
            <h2 style={{alignSelf:"flex-start"}}>Education</h2>
            {
             data?.education?.map((itm)=>{
               return(
                 <div className="my--education">
                   <h4>{itm?.course}</h4>
                   <p style={{fontStyle:"italic"}}>{itm?.intitute}</p>
                   <div style={{"display":"flex",justifyContent:"space-between"}}>
                      <div>{itm?.session}</div>
                      <div>Grade : {itm?.grade}</div>
                   </div>
                 </div>
                 )
               })
             }
            </div>
          <div className="training--column edu--column" >
            <h2 style={{alignSelf:"flex-start"}}>Training</h2>
            {
              data?.training?.map((itm)=>{
                return(
                  <div className="my--training">
                    <div style={{"display":'flex',justifyContent:"space-between"}}>
                       <h4>{itm?.name}</h4>
                       <p>{itm.duration}</p>
                    </div>
                   <p style={{fontStyle:"italic"}}>{itm?.intitute}</p>
                   <p>{itm.discription}</p>
                   {/* <div style={{"display":"flex",justifyContent:"space-between"}}>
                      <div>{itm?.session}</div>
                      <div>Grade : {itm?.grade}</div>
                   </div> */}

                 </div>
                )
              })
            }
          </div>
      </div>
    </section>
  );
};

export default Education;
