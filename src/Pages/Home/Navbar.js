import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {
    
    const[navActive , setNavActive] = useState(false);

    const toggleNav=()=>{
        setNavActive(!navActive);
    };

    const closeManu=()=>{
        setNavActive(false);
    };
    useEffect(()=>{
        const handleResize=()=>{
            if(window.innerWidth<=500){
                closeManu()
            }
        };

        window.addEventListener("resize",handleResize);
        return()=>{
            window.removeEventListener("resize",handleResize);
        };
    },[]);

    useEffect(()=>{
        if(window.innerWidth<=1200){
            closeManu();
        }
    },[]);

  return (
    <nav className={`navbar ${navActive?"active":""}`} style={{zIndex:"1"}}>
      <div style={{marginLeft:"-40px"}}>
       <Link to='heroSection' smooth={true} offset={-70} style={{cursor:"pointer"}}>
       {/* <img src={logo} alt="" /> */}
       </Link>
      </div>
      <a className={`nav__hamburger ${navActive?"active":""}`} onClick={toggleNav}>
        <span className='nav__hamburger__line'></span>
        <span className='nav__hamburger__line'></span>
        <span className='nav__hamburger__line'></span>
        {/* <span className='nav__hamburger__line'></span> */}
      </a>
      <div className={`navbar--items ${navActive?"active":""}`}>
        <ul>
            {/* <li>
                <Link onClick={closeManu} 
                activeClass='navbar--active-content' 
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to='heroSection'
                className='navbar--content'
                >Home</Link>
            </li> */}
            <li>
                <Link onClick={closeManu} 
                activeClass='navbar--active-content' 
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to='MyPortfolio'
                className='navbar--content project--item'
                
                >Projects</Link>
            </li>
            <li>
                <Link onClick={closeManu} 
                activeClass='navbar--active-content' 
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to='myEducation'
                className='navbar--content education--item'
                >Education</Link>
            </li>
            
            <li>
                <Link onClick={closeManu} 
                activeClass='navbar--active-content' 
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to='testimonial'
                className='navbar--content skillset--item'
                >Skillset</Link>
            </li>
            <li>
                <Link onClick={closeManu} 
                activeClass='navbar--active-content' 
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to='AboutMe'
                className='navbar--content about--item'
                >About Me</Link>
            </li>
        </ul>
      </div>
      <Link
      onClick={closeManu} 
      activeClass='navbar--active-content' 
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      to='Contact'
      className='btn btn-outline-primary'
      >
        Contact Me
      </Link>
    </nav>
  )
}

export default Navbar
