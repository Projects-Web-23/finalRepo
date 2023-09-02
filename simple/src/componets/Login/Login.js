import { useState } from "react";
import React from "react";
import axios from 'axios'
import Sign from '../../Photos/Sign.png'
import "./Login.css"
const Login = () => {
    const [info, setInfo] = useState({

        email: "",
        password: "",

    })
    function handleLoginUser(res) {
        const data = res.data;
        localStorage.setItem("token", data?.token);
        console.log(res.data);
    }
    async function login(event) {

        event.preventDefault();
        console.log(info);
        await axios.post("http://localhost:8080/auth/login", info).then(handleLoginUser).catch(err => console.log(err));
    }
    return (
        <div className="container-Log" >

            <h1 className="logheader" >Login</h1>
            <div className="main-con-log">

                <form onSubmit={login}>
                    <div className="form-log" >
                        <card>
                            <label className="name-log" >Email  </label> <br />
                            <input type="email" value={info.email} placeholder="please enter your full name" required onChange={(token) => { setInfo({ ...info, email: token.target.value }); console.log(info.email) }} />
                        </card>
                        <card>
                            <label className="name-log">Password  </label> <br />
                            <input type="password" value={info.password} placeholder="please enter your email" required onChange={(token) => setInfo({ ...info, password: token.target.value })} />
                        </card>
                        <card>
                            <button className="btn1" type="submit"  >Login</button>

                        </card>
                    </div>
                </form>

                {/* <img src={Sign} /> */}
            </div>
        </div>
    );
}


export default Login;