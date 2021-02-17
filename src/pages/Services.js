import React, { Component } from 'react'
import Card from "../components/Card/Card"
import "./Services.css"
import Home from "../images/After.jpg"
import comercial from "../images/Before.jpg"
import Nav from "../components/Nav/Nav"

export default class Services extends Component {
    constructor() {
        super()

        this.services = React.createRef()
    }
    mainToggle = (e) => {
        if(e.target.id === "menu"){
            const element = this.services.current
            element && element.classList.toggle("active")
        }
    }

    render() {
        return (
            <div>
                <Nav fun={this.mainToggle} />
                <div className="main">
                    <div ref={this.services} className="services">
                        <div className="cards">
                            <Card
                                img={Home}
                                title="House Painting"
                                description="Upddate old surfaces with a home painting project.
                 Whit just the rigth colors and paint consultans, we can turn hard
                 work today into a beutiful home tomorrow"
                            />
                            <Card
                                img={comercial}
                                title="Comercial Services"
                                description="Refresh your environment for the better. Let us be the painting
                company to help make sure your workdays are as wonderful as our own"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
