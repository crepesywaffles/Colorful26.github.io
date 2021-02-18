import {Link} from "gatsby"
import "../pages/index.css"
import React, { Component} from 'react'
import after from  "../images/After.jpg"
import logo from "../images/ColorFul26.png"
import about from "../images/AboutUs.jpg"
import services from "../images/Services.jpg"
import team from "../images/team.jpg"
import Contact from "../images/contac.jpg"
import { Fragment } from "react"
import video1 from "../videos/production ID_4770971.mp4"
import video2 from "../videos/production ID_4799866.mp4"
import video3 from "../videos/video2.mp4"

export default class index extends Component {
    constructor(){
        super()

        this.imagen = React.createRef()
        this.menu = React.createRef()
        this.nav= React.createRef()
        this.video= React.createRef()
        this.box1 = React.createRef()
        this.box2 = React.createRef()
        this.box3 = React.createRef()
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
        const element3 = this.video.current
        { element && element.classList.toggle("active")
         element2 && element2.classList.toggle("active")
         element3 && element3.classList.toggle("active") } 
    }
    BoxToggle1 =()=>{
        const element = this.box1.current
        {element && element.classList.toggle("active")
        }
    }
    BoxToggle2 =()=>{
        const element2 = this.box2.current
        {
        element2 && element2.classList.toggle("active")
        }
    }
    BoxToggle3 =()=>{
        const element3 = this.box3.current
        {element3 && element3.classList.toggle("active")}
    }
    mainToggle = (e) => {
        if(e.target.id === "menu"){
            const element = this.video.current
            element && element.classList.toggle("active")
        }
    }
    
    
    render() {
        return (
            <Fragment onClick={this.props.fun}>
                <div onClick={this.menuToggle} ref={this.menu} className="menuToggle" id="menu"></div>
                    <div ref={this.nav} className="navigation">
                        <div className="navArea">
                            <ul>
                                <li>
                                    <Link
                                        onMouseEnter={this.changeImage1}
                                        className="link"
                                        to="#"
                                    >
                                        Home
                    </Link>
                                </li>
                                <li>
                                    <Link
                                        onMouseEnter={this.changeImage2}
                                        className="link"
                                        to="AboutUs"
                                    >
                                        About Us
                    </Link>
                                </li>
                                <li>
                                    <Link
                                        onMouseEnter={this.changeImage3}
                                        className="link"
                                        to="Services"
                                    >
                                        Services
                    </Link>
                                </li>
                                <li>
                                    <Link
                                        onMouseEnter={this.changeImage4}
                                        className="link"
                                        to="OurWork"
                                    >
                                        Our Work
                    </Link>
                                </li>
                                <li>
                                    <Link
                                        onMouseEnter={this.changeImage5}
                                        className="link"
                                        to="Team"
                                    >
                                        Team
                    </Link>
                                </li>
                                <li>
                                    <Link
                                        onMouseEnter={this.changeImage6}
                                        className="link"
                                        to="Contact"
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
                    <div ref={this.video} className="container1">
                        <div onClick={this.BoxToggle1} className="box box1" ref={this.box1}>
                            <video src={video1} autoplay="true" loop muted />
                            <div className="content">
                            <h2>Profesional Painters</h2>
                            </div>
                        </div>
                        <div  onClick={this.BoxToggle2} className="box box2" ref={this.box2} >
                            <video src={video3} autoplay="true" loop muted />
                            <div className="content">
                            <h2>Quality and Efficiency</h2>
                            </div>
                        </div>
                        <div onClick={this.BoxToggle3} className="box box3" ref={this.box3}>
                            <video src={video2} autoplay="true" loop muted />
                            <div className="content">
                            <h2>Expertise and Answerable</h2>
                            </div>
                        </div>
                    </div>
            </Fragment>
        );
    }
}


