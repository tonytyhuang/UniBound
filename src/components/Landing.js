import React from 'react'
import {Link} from 'react-router-dom';

export default function Landing() {
    return (
        <div>
            
            <h1>Language</h1>
            <Link to="/home">
                <btn>English</btn>
            </Link>
            <Link to="/home_ch">
                <btn>Mandarin</btn>
            </Link>
            
        </div>
    )
}