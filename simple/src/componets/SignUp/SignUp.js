import { useState } from "react";
import React from "react";
import axios from 'axios'
// import Sign from '../../Photos/Sign.png'
import { Link, useNavigate } from 'react-router-dom'
import './SignUp.css'
const Signup = () => {
    //const navigate = useNavigate();
    const [info, setInfo] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: ""
    })
    async function sign(event) {

        event.preventDefault();

        await axios.post("http://localhost:8080/auth/signup", info).then(res => console.log(res.data)).catch(err => console.log(err));

    }
    return (
        <div className="container-sign" >
            <h1 className="sign-header" >Sign Up</h1>
            <div className="caontainer-sign">
                {/* <img src={Sign} /> */}
                <form onSubmit={sign} >
                    <div className="grid-con">
                        <card>
                            <label className="name-sign" >Full Name  </label> <br />
                            <input type="text" value={info.fullName} placeholder="please enter your full name" required onChange={(token) => setInfo({ ...info, fullName: token.target.value })} />
                        </card>
                        <card>
                            <label className="name-sign" >Email  </label> <br />
                            <input type="email" value={info.email} placeholder="please enter your email" required onChange={(token) => setInfo({ ...info, email: token.target.value })} />
                        </card>
                        <card>
                            <label className="name-sign" >Password  </label> <br />
                            <input type="password" value={info.password} placeholder="please enter your password" required onChange={(token) => setInfo({ ...info, password: token.target.value })} />
                        </card>
                        <card>
                            <label className="name-sign" >Confirm Password </label> <br />
                            <input type="password" value={info.confirmPassword} placeholder="please confirm your password" required onChange={(token) => setInfo({ ...info, confirmPassword: token.target.value })} />
                        </card>



                    </div>
                    <div className="radio">
                        <input type="radio" name="gender" className="rd" onChange={(token) => setInfo({ ...info, gender: "Male" })} />
                        <label className="name-sign-rd" >Male </label>
                        <input type="radio" name="gender" className="rd" onChange={(token) => setInfo({ ...info, gender: "Female" })} />
                        <label className="name-sign-rd">Female </label>

                    </div>
                    <div className="radio">

                    </div>
                    <div className="butttons-log-sign">
                        <button className="btn-sign" type="submit"  >Sign Up</button>
                        <Link to="/Login">   <button className="btn-sign" type="submit"  >Login</button></Link>

                    </div>
                </form>

            </div>



        </div>
    );
}

export default Signup;