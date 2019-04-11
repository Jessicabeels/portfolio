import React from 'react'
import { Link } from 'react-router-dom'


const Nav = (props) => {
    const { navToggle, toggler } = props
    return (
        <div onClick = { toggler } className={`nav nav-${navToggle ? "closed" : "open"}`}>

            {/* <Link className="home-nav" to="/">Jessica Beeli </Link> */}
            <Link className="about-nav" to="/about">about</Link>
            <Link className="projects-nav" to="/projects">projects</Link>
            <Link className="photos-nav" to="/photos">photography</Link>
            
            <Link className="contact-nav" to="/contact"></Link>
            <Link className="contact-nav" to="/"> jessica beeli </Link>
            <Link className="contact-nav" to="/contact"></Link>
            
            
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

