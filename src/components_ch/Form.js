import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import {Spring} from 'react-spring/renderprops';
import "./Form.css";
import insta from '../images/insta.png';
import facebook from '../images/facebook.png';
import axios from 'axios'


export default function Form() {

        
    const history = useHistory()
    const {register, handleSubmit } = useForm()



    const onSubmit = (values) => {
        console.log(values);
        const form = values;

        axios.post('http://localhost:5000/forms/add', values)
            .then(res => console.log(res.data));

        window.location = '/home';
    }

    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);

    const toggler1 = () =>{
        toggle1 ? setToggle1(false): setToggle1(true);
    }

    const toggler2 = () =>{
        toggle2 ? setToggle2(false): setToggle2(true);
    }

    const toggler3 = () =>{
        toggle3 ? setToggle3(false): setToggle3(true);
    }



    return (
<div class="user-form">
            
            <h1>联系!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="txtb">
                    <label>全名</label>
                    <input type="text" name="name" placeholder="Enter Your Name" ref={register}/>
                </div>

                <div class="txtb">
                    <label>电子邮件</label>
                    <input type="email" name="email" placeholder="Enter Your Email" ref={register}/>
                </div>

                <div class="txtb">
                    <label>大学</label>
                    <input type="text" name="university" placeholder="Enter Your University" ref={register}/>
                </div>

                <div class="txtb">
                    <label>大学课程</label>
                    <input type="text" name="program" placeholder="Enter Potential/Future Program" ref={register}/>
                </div>
                <div>
                    <img src= {facebook} class="logos" alt="oopsies"></img>
                    <img src= {insta} class="logos" alt="oopsies"></img>
                    <img src= {insta} class="logos" alt="oopsies"></img>
                </div>
                <div>
                    <label class = "toggle">
                        <input type = "checkbox" onClick={toggler1}></input>
                    </label>

                    <label class = "toggle" >
                        <input type = "checkbox" onClick={toggler2}></input>
                    </label>

                    <label class = "toggle">
                        <input type = "checkbox" onClick={toggler3}></input>
                    </label>
                   
                </div>

                {toggle1 &&
                    <Spring
                        from={{ opacity: 0, marginTop: -100}} 
                        to={{ opacity: 1, marginTop: 0}}
                    >
                        {props => (
                            <div style={props}>
                                <div class="txtb" id="popup">
                                    <label>Facebook</label>
                                    <input type="text" name="facebook" placeholder="Enter Facebook Link" ref={register}/>
                                </div> 
                            </div>
                        )}
                    </Spring>
 
                }

                {toggle2 &&
                    <Spring
                    from={{ opacity: 0, marginTop: -100}} 
                    to={{ opacity: 1, marginTop: 0}}
                    >
                    {props => (
                        <div style={props}>
                            <div class="txtb" id="popup">
                                <label>Instagram</label>
                                <input type="text" name="instagram" placeholder="Enter Instagram Account Name" ref={register}/>
                            </div>   
                        </div>
                    )}
                    </Spring>

                }

                {toggle3 &&
                    <Spring
                    from={{ opacity: 0, marginTop: -100}} 
                    to={{ opacity: 1, marginTop: 0}}
                    >
                    {props => (
                        <div style={props}>
                            <div class="txtb" id="popup">
                                <label>微信帐号</label>
                                <input type="text" name="weChat" placeholder="Enter WeChat ID" ref={register}/>
                            </div>  
                        </div>
                    )}
                    </Spring>
                
 
                }

                <div class="txtb" id="popup">
                    <label>其他连接方式 (可选的)</label>
                    <input type="text" name="other" placeholder="Any other way you want us to reach you" ref={register}/>
                </div>                 

                


                <div class="txtb">
                    <label>问题(可选的)</label>
                    <textarea placeholder="Tell us a few points you want to ask about so help you find a better match" name="message" ref={register}> </textarea>

                </div>
                <input type="submit" class = "btnn"/>
            </form>

            
        </div>
    )
}
