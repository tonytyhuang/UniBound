import React from 'react'
import {Jumbotron, Button} from 'react-bootstrap'
import "./Home.css"
import Navigation from './Navigation.js'
import Form from './Form.js'
//import Background from '/logo512.png'

export default function Home() {

    return (
        <div className = "homePage">
                <Navigation/>
                <h1 className = "homeTitle">UNIBOUND</h1>
                <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
                </p>
                <p>
                <Button variant="primary">Learn more</Button>
                </p>
                <Form/>
        </div>

    )
}
