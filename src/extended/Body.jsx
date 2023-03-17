import React from 'react';
import BodyCSS from "./body.module.css";
import bill from '../images/bill.png'
import apple from '../images/apple.svg'
import google from '../images/google.svg'

const Body = () => {
  return (
    <div className={BodyCSS.herodiv}>
         <section className={BodyCSS.layout}>

            <div className={BodyCSS.sectionInfo}>
                <h2 className={BodyCSS.heading2}>Easily control your <br />billing & invoicing.</h2>
                <p className={BodyCSS.paragraph}>
                payzer makes moving money as easy and programmable as moving data. Our teams are based in offices around the world and we process hundreds of billions of dollars each year for ambitious businesses of all sizes.
                </p>
                <div >
                    <img src={apple} alt="apple_store" />
                    <img src={google} alt="google_play" />
                </div>
            </div>

            <div className={BodyCSS.layout2}>
                    <img src={bill} alt='billing' className={BodyCSS.img} />
            </div>
          
        </section>
    </div>
  )
}

export default Body;