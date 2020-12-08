import React from 'react'
import {Jumbotron, Button} from 'react-bootstrap'
import "./Home.css"
//import Background from '/logo512.png'

export default function Home() {

    return (
        <div className = "homePage">
            
                <h1>UNIBOUND</h1>
                <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
                </p>
                <p>
                <Button variant="primary">Learn more</Button>
                </p>
            
        </div>
    )
}
