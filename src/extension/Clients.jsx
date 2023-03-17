import React from "react";
import ClientCSS from './Client.module.css'
import dropbox from './images/dropbox.png'
import binance from './images/binance.png'
import coinbase from './images/coinbase.png'
import forbes from './images/forbes.png'
import redbull from './images/redbull.png'
import airbnb from './images/airbnb-logo.png'


const Clients = () => {
    return(
        <div className={ClientCSS.overall}>
            <section className={ClientCSS.section}>
                <div className={ClientCSS.clients}>
                    <img src={binance} alt="binance" width='150px'  />
                    <img src={dropbox} alt="dropbase" width='150px' />
                    <img src={coinbase} alt="coinbase" width='150px' />
                </div>
                <div className={ClientCSS.clients}>
                    <img src={forbes} alt="forbes" width='100px' />
                    <img src={redbull} alt="redbull" width='100px' />
                    <img src={airbnb} alt="airbnb" width='100px' />
                </div>
            </section>
    </div>
    )
}
export default Clients;