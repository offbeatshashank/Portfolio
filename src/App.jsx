
import React , {useRef} from 'react'
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import "./app.scss"
import Navbar from './components/nav/Navbar'
import Hero from   './components/hero/Hero'
import Parallax from './components/parallax/Parallax'
import Services from './components/sevices/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Cursor from './components/cursor/Cursor'

const App = () => {

 
 
  return (
    
    <Router>
    <div>
      <Cursor/>

      <section  id='Homepage'>
        <Navbar/>
        < Hero/>np
      </section>

       <section ><Parallax type="services"/>
      </section>

      <section id='Services'><Services/></section>

      <section id='Portfolio' ><Parallax type="portfolio"/>
      </section>
      <Portfolio/>
      

      <section  id='Contact'><Contact/></section> 
      
    </div>   
    </Router>
    )

}

export default App
