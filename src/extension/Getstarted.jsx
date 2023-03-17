import React from 'react'
import GetCSS from './Getstarted.module.css';
import Code from "./images/code.png"
import design from './images/design.png'

const Getstarted = () => {
  return (
    <section className={GetCSS.section}>
        <div className={GetCSS.first}>
            <h3>Ready to get Started?</h3>
            <p>Explore Stripe Payments, or create an account instantly and start accepting payments. 
                You can also contact us to design a custom package for your business</p>
            <button className={GetCSS.btn}>Get Started</button>
        </div>
        <div className={GetCSS.second}>        
            <div className={GetCSS.part1}>
                <img src={design} width="50px"/>
                <p className={GetCSS.p}>Know what you pay</p>
                <p className={GetCSS.b}>Get up and running with payzer in no time.</p>
            </div>
            <div className={GetCSS.part2}>
            <img src={Code} width="50px"/>
                <p className={GetCSS.p}>Start your integration</p>    
                <p className={GetCSS.b}>Integrated per-transaction pricing with no hidden fees.</p>
            </div>
        </div>
    </section>
  )
}

export default Getstarted;