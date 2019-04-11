import React, { Component } from 'react'
import Nav from './Nav.js'
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from './pages/Home.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import Photos from './pages/Photos.js'
import Projects from './pages/Projects.js'
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import Footer from './Footer.js'
import './style.css'


class App extends Component {
    constructor(){
        super()
        this.state = {
            navToggle: false
        }
    }


    toggler = () => this.setState(prevState => ({ navToggle: !prevState.navToggle}))
    render(){

       const { navToggle } = this.state
       const { location }  = this.props //idk what this does
        return(
            <div>
               
               
                <Nav navToggle={navToggle} toggler={this.toggler}/>
                
                <div id="home">
                    <Home/>
                </div>
                <Projects/>
                <div onClick={this.toggler} className={`overlay overlay-${navToggle ? "closed" : "open"}`}></div>
                <button className={`rotate rotate-${navToggle ? "open" : "closed"}`} onClick={this.toggler}>|||</button>
                {/* do i need page fade??? */}
                <Footer/>
                {/* <Switch location={location}> */}
                    <Route exact path="/" component= { Home } />
                    <Route path="/about" component={ About }/>
                    <Route path="/contact" component={ Contact } />
                    <Route path="/photos" component= { Photos }/>
                    <Route path="/projects" component={ Projects }/>
                {/* </Switch> */}
                <div>
                    <ScrollUpButton
                        StopPosition={0}
                        ShowAtPosition={150}
                        EasingType='easeOutCubic'
                        AnimationDuration={500}
                        ContainerClassName='ScrollUpButton__Container'
                        TransitionClassName='ScrollUpButton__Toggled'  
                        style={{}}
                        ToggledStyle={{}}
                    />
                </div>
               
            
            </div>
        )
    }
}

export default withRouter(App)