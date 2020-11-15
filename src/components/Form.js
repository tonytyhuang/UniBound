import React from 'react';
import "./Form.css";

export default function Form() {
    return (
        <div class="user-form">
            <h1>Info Below</h1>
            <div class="txtb">
                <label>Full Name</label>
                <input type="text" name="" value="" placeholder="Enter Your Name"></input>
            </div>

            <div class="txtb">
                <label>Email</label>
                <input type="email" name="" value="" placeholder="Enter Your Name"></input>
            </div>

            <div class="txtb">
                <label>Future University</label>
                <input type="text" name="" value="" placeholder="Enter Your Name"></input>
            </div>

            <div class="txtb">
                <label>Program</label>
                <input type="text" name="" value="" placeholder="Enter Your Name"></input>
            </div>
            <a href="#link" class="btnn">Submit</a>
            
        </div>
    )
}
