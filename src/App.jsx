import React from 'react'
import Navbar from '/src/components/Navbar'
import Hero from '/src/components/Hero'
import Sidebar from '/src/components/Sidebar'
import Submenu from './components/Submenu'
import Body from './extended/Body'
import Clients from './extension/Clients'
import Customers from './extension/Customers'
import Footer from './extended/Footer'
import Getstarted from './extension/Getstarted'

export default function App(){
   return (
    <>
      <Navbar/>
      <Sidebar/>
      <Hero/>
      <Submenu/>
      <Body/>
      <Clients/>
      <Customers/> 
      <Getstarted/> 
      <Footer/>
   </>

)
 
}; 