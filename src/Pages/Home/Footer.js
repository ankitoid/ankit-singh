import { Link } from "react-scroll";
import React from "react";
import { CiLocationOn } from 'react-icons/ci'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFacebook, BsInstagram, BsPhone, BsTwitter, BsWhatsapp } from 'react-icons/bs'
// import{Link} from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div>
          {/* <img src="./img/logofooter.png" alt="Logoipsum" /> */}
          <Link to='heroSection' smooth={true} offset={-70} style={{cursor:"pointer"}}><img src="./img/logoAnkit.png" alt="Logoipsum" /></Link>
        </div>
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="text-md project--item"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="myEducation"
                className="text-md education--item"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="testimonial"
                className="text-md skillset--item"
              >
                Skillset
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="text-md about--item"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="text-md contact--item"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=916265227382"
                className="navbar--content"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsWhatsapp size="30px" className="whatsapp---icon"/>
                
              </a>
            </li>
            
            <li>
              <a
                href="https://x.com/ankit_thakur12"
                className="navbar--content"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTwitter size="30px" className="twitter---icon"/>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/ankitoid"
                className="navbar--content"
                target="_blank"
                rel="noopener noreferrer"
              >
               <BsFacebook size="30px" className="facebook---icon"/>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ankit.__.thakur/"
                className="navbar--content"
                target="_blank"
                rel="noopener noreferrer"
              >
             <BsInstagram size="30px" className="insta---icon"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content made--by--kuldeep">Made by💜Ankit</p>
        <div className="footer--social--icon">
          <ul className="footer--contact--section">
            <li>
               <CiLocationOn className='footer--icon address--icon'/>{'\u00A0\u00A0'} <a className="address---link" href="https://www.google.com/maps/@28.5415911,77.2895358,13z?entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color:"inherit"}}> <strong>Noida, Uttar Pradesh INDIA 201317 </strong></a>
            </li>
            <li>
               <AiOutlineMail className='footer--icon'/>{'\u00A0\u00A0'} <a href="mailto:ankitsinghghoshi1234@gmail.com" target="_blank" rel="noopener noreferrer" className="email---link" style={{textDecoration:"none",color:"inherit"}}><strong>ankitsinghghoshi1234@gmail.com</strong></a>
            </li>
            <li>
               <BsPhone className='footer--icon'/>{'\u00A0\u00A0'} <a href="tel:6265227382" className="phone---link" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color:"inherit"}}><strong>+91 6265227382</strong></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;