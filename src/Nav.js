import React from 'react'
import { Link } from 'react-router-dom'
import Scrollchor from 'react-scrollchor';

const Nav = (props) => {
    const { navToggle, toggler } = props
    return (
        <div onClick = { toggler } className={`nav nav-${navToggle ? "closed" : "open"}`}>

            {/* <Link className="home-nav" to="/">Jessica Beeli </Link> */}
            <Scrollchor className="about-nav" to="#about">about</Scrollchor>
            <Scrollchor className="projects-nav" to="#projects">dev</Scrollchor>
            <Scrollchor className="photos-nav" to="#photos">work</Scrollchor>
            
            <Scrollchor className="contact-nav" to="/contact"></Scrollchor>
            <Scrollchor className="contact-nav" to="#home" > jessica beeli </Scrollchor>
            <Scrollchor className="contact-nav" to="/contact"></Scrollchor>
            {/* href = #id in container  */}
            
            <a className="linkedin-nav" href='https://www.linkedin.com/in/jessicabeeli/'>
                <i class="fab fa-linkedin"></i>
            </a>
            <a className="github-nav" href='https://github.com/Jessicabeels'>
                <i class="fab fa-github"></i>
            </a>
            <a className="twitter-nav" href='https://twitter.com/jessicabeeli'>
                <i class="fab fa-twitter"></i>
            </a>
            
        </div>
    )
}

export default Nav

