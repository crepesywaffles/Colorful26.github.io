import {Link} from "gatsby"
import "../Nav/Nav.css"
import React, { Component } from 'react'
import after from  "../../images/After.jpg"
import logo from "../../images/ColorFul26.png"
import about from "../../images/AboutUs.jpg"
import services from "../../images/Services.jpg"
import team from "../../images/team.jpg"
import Contact from "../../images/contac.jpg"

export default class Nav extends Component {
    constructor(){
        super()

        this.imagen = React.createRef()
        this.menu = React.createRef()
        this.nav = React.createRef()
    }
    
    changeImage1 = () => {
        const element = this.imagen.current
        { element && element.setAttribute("src", `${logo}`) }
    }
    changeImage2 = () => {
        const element = this.imagen.current
        { element && element.setAttribute("src", `${about}`) }
    }
    changeImage3 = () => {
        const element = this.imagen.current
        { element && element.setAttribute("src", `${services}`) }
    }
    changeImage4 = () => {
        const element = this.imagen.current
        { element && element.setAttribute("src", `${after}`) }
    }
    changeImage5 = () => {
        const element = this.imagen.current
        { element && element.setAttribute("src", `${team}`) }
    }
    changeImage6 = () => {
        const element = this.imagen.current
        { element && element.setAttribute("src", `${Contact}`) }
    }
    menuToggle = () => {
        const element = this.menu.current
        const element2 = this.nav.current
        { element && element.classList.toggle("active")
         element2 && element2.classList.toggle("active")
         }
    }
    
    
    render() {
        return (
            <div onClick={this.props.fun}>
                <div onClick={this.menuToggle} ref={this.menu} className="menuToggle" id="menu"></div>
                    <div ref={this.nav} className="navigation">
                        <div className="navArea">
                            <ul>
                                <li>
                                    <Link
                                        onMouseEnter={this.changeImage1}
                                        className="link"
                                        to="/#"
                                    >
                                        Home
                    </Link>
                                </li>
                                <li>
                                    <Link
                                        onMouseEnter={this.changeImage2}
                                        className="link"
                                        to="/AboutUs"
                                    >
                                        About Us
                    </Link>
                                </li>
                                <li>
                                    <Link
                                        onMouseEnter={this.changeImage3}
                                        className="link"
                                        to="/Services"
                                    >
                                        Services
                    </Link>
                                </li>
                                <li>
                                    <Link
                                        onMouseEnter={this.changeImage4}
                                        className="link"
                                        to="/OurWork"
                                    >
                                        Our Work
                    </Link>
                                </li>
                                <li>
                                    <Link
                                        onMouseEnter={this.changeImage5}
                                        className="link"
                                        to="/Team"
                                    >
                                        Team
                    </Link>
                                </li>
                                <li>
                                    <Link
                                        onMouseEnter={this.changeImage6}
                                        className="link"
                                        to="/Contact"
                                    >
                                        Contact
                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="imgArea">
                            <img ref={this.imagen} src={logo} id="slider" />
                        </div>
                    </div>
            </div>
        );
    }
}


