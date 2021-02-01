import React from 'react'
import {after,before, logo} from "../images/index"
import "../pages/index.css"

export default function Test() {
    return (
    <div>
        <div className="home">
            <div className="home_header">
            <img className="home_logo" src={logo} />
            <h1 className="home_text">ColorFul26</h1>
            </div>
            <img className="home_img" src={after} />
        </div>
        <section>
        Aqui servicios 
    </section>
    </div> 
    )
}
