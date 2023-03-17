import React from 'react'
 import FooterCSS from './footer.module.css';
 import linkedin from '../images/linkedin.svg'
 import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'

const Footer = () => {
  return ( 
    <div className={FooterCSS.hero}>
        <div className={FooterCSS.div}>
          <h5 className={FooterCSS.paragragh}>
          2023 Hoobank. All right Reserved.
          </h5>
          <div className={FooterCSS.div2}> 
            <img src={linkedin}/>
            <img className={FooterCSS.img} src={facebook}/>
            <img src={instagram}/>
          </div>
        </div>
      </div>
  )
}

export default Footer;


