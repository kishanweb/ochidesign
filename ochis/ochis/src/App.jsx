import React from 'react'
import Navbar from "./components/Navbar"
import LandingPage from "./components/landingpage.jsx"
import Marquee from './components/Marquee.jsx'
import Aboutsection from './components/aboutsection.jsx'
// import Services from './components/page/service/services.jsx'
import Eyeanimation from './components/eyeanimation.jsx'
import Featured from './components/Featured.jsx'
import Cards from './components/cards.jsx'
import Footer from './components/footer.jsx'
import Clients from './components/clients.jsx'
import Startproject from './components/startproject.jsx'
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();


function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (<div>
    <Navbar></Navbar>
    <LandingPage></LandingPage>
    <Marquee/>
    <Aboutsection/>
    <Eyeanimation/>
    <Featured/>
    <Clients/>
    <Cards/>
    <Startproject/>
    <Footer/>
    
  
    
    
    </div>
  )
}

export default App
