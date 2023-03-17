import React from 'react'
import CustomerCSS from './Customers.module.css';
import avatar1 from './images/avatar1.png'
import avatar2 from './images/avatar2.png'
import avatar3 from './images/avatar3.png'
import quotes from './images/quotes.svg'


const Customers = () => {
  return (
    <div className={CustomerCSS.heroall}>
    <div className={CustomerCSS.herosection}>
    <h3 className={CustomerCSS.h3}>Testominials</h3>
    <section className={CustomerCSS.section}>
       
            <div className={CustomerCSS.div}>
                   <div className={CustomerCSS.div2}>
                     <img src={avatar1}  />
                    <h4 className={CustomerCSS}>Lena Gates</h4>
                    </div>
                    <img src={quotes} width='40px' />
                    <p className={CustomerCSS.paragraph}>
                    I had the opportunity of using this platform in making urgent international payment, and it was seamless.
                    </p>    
            </div>

            <div className={CustomerCSS.div}>
                   <div className={CustomerCSS.div2}>
                     <img src={avatar2}  />
                    <h4 className={CustomerCSS}>Bob daves</h4>
                    </div>
                    <img src={quotes} width='40px' />
                    <p className={CustomerCSS.paragraph}>
                    i really love how payzer makes my life easy. i dont have to worry about making international payments. 
                    </p>    
            </div>

            <div className={CustomerCSS.div}>
                   <div className={CustomerCSS.div2}>
                     <img src={avatar3}  />
                    <h4 className={CustomerCSS}>Larry jo</h4>
                    </div>
                    <img src={quotes} width='40px' />
                    <p className={CustomerCSS.paragraph}>
                    Since i began making use of this platform, ive not had any regrets. the experience has been heaven on earth 
                    </p>    
            </div>
    </section>
    </div>
    </div>
  )
}

export default Customers;