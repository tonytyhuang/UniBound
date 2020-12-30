import React from 'react'
import {Jumbotron, Button} from 'react-bootstrap'
import "./Home.css"
import Navigation from './Navigation.js'
import Form from './Form.js'
import Timelinew from './Timeline'
import { Link } from "react-scroll";
//import Background from '/logo512.png'

export default function Home() {

    return (
        <div>
            <div className = "homePage">
                <Navigation/>
                <h1 className = "homeTitle">UNIBOUND</h1>
                <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
                </p>
                <Link
                    activeClass="active"
                    to="form"
                    spy={true}
                    smooth={true}
                    offset={20}
                    duration={500}
                
                >
                <Button variant="primary">Learn more</Button>
                </Link>
                
            </div> 
            <div>
                <Timelinew/>
            </div>
            
            <div id="form">
                <Form/>
            </div>




        </div>


    )
}
