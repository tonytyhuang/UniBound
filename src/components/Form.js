import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import "./Form.css";

export default function Form() {

        
    const history = useHistory()
    const {register, handleSubmit } = useForm()

    const onSubmit = (values) => {
        console.log(values);
    }

    return (
   
        <div class="user-form">
            <h1>Info Below</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="txtb">
                    <label>Full Name</label>
                    <input type="text" name="name" placeholder="Enter Your Name" ref={register}/>
                </div>

                <div class="txtb">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Enter Your Name" ref={register}/>
                </div>

                <div class="txtb">
                    <label>University</label>
                    <input type="text" name="university" placeholder="Enter Your Name" ref={register}/>
                </div>

                <div class="txtb">
                    <label>Program</label>
                    <input type="text" name="program" placeholder="Enter Your Name" ref={register}/>
                </div>

                <div class="txtb">
                    <label>Message</label>
                    <textarea> </textarea>

                </div>
                <input type="submit" class = "btnn"/>
            </form>

            
        </div>
    )
}
