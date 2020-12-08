import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import "./Form.css";
import Navigation from './Navigation.js'

export default function Form() {

        
    const history = useHistory()
    const {register, handleSubmit } = useForm()

    const onSubmit = (values) => {
        console.log(values);
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
        <div>
        <Navigation/>
        <div class="user-form">
            
            <h1>Connect with us!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="txtb">
                    <label>Full Name</label>
                    <input type="text" name="name" placeholder="Enter Your Name" ref={register}/>
                </div>

                <div class="txtb">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Enter Your Email" ref={register}/>
                </div>

                <div class="txtb">
                    <label>University</label>
                    <input type="text" name="university" placeholder="Enter Your University" ref={register}/>
                </div>

                <div class="txtb">
                    <label>Program</label>
                    <input type="text" name="program" placeholder="Enter Potential/Future Program" ref={register}/>
                </div>
                <div>


                </div>
                <div>
                    <label className = "switch">
                        <input type="checkbox" onClick = {toggler1}  />
                        <span className="slider rounded" />
                    </label>

                    <label className = "switch">
                        <input type="checkbox" onClick = {toggler2}  />
                        <span className="slider rounded" />
                    </label>

                    <label className = "switch">
                        <input type="checkbox" onClick = {toggler3}  />
                        <span className="slider rounded" />
                    </label>
                   
                </div>

                {toggle1 &&
                    <div class="txtb" id="popup">
                        <label>Facebook</label>
                        <input type="text" name="facebook" placeholder="Enter Facebook Link" ref={register}/>
                    </div>   
                }

                {toggle2 &&
                    <div class="txtb" id="popup">
                        <label>Instagram</label>
                        <input type="text" name="instagram" placeholder="Enter Instagram Account Name" ref={register}/>
                    </div>   
                }

                {toggle3 &&
                    <div class="txtb" id="popup">
                        <label>Wechat</label>
                        <input type="text" name="wechat" placeholder="Enter WeChat ID" ref={register}/>
                    </div>   
                }

                <div class="txtb" id="popup">
                    <label>Other Means of Connection (optional)</label>
                    <input type="text" name="other" placeholder="Any other way you want us to reach you" ref={register}/>
                </div>                 

                


                <div class="txtb">
                    <label>Message/Questions</label>
                    <textarea placeholder="Tell us a few points you want to ask about so help you find a better match"> </textarea>

                </div>
                <input type="submit" class = "btnn"/>
            </form>

            
        </div>
        </div>
    )
}
