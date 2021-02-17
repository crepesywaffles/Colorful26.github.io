import React, { Component } from 'react'
import "../Card/Card.css"
import prueba from "../../images/team.jpg"

export default class Card extends Component {
    render() {
        return (
            
                <div className="container">
                <div className="card">
                    <div className="imgBX">
                        <img src={this.props.img}/>
                    </div>
                    <div className="content">
                        <h2>{this.props.title}</h2>
                        <p>
                            {this.props.description}
                        </p>
                        <button> 
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            
            
        )
    }
}
