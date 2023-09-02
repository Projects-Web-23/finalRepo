import { useState } from "react";
import React from "react";
import axios from 'axios'
import Sign from '../Photos/Sign.png'
const Login = () => {
    const [info, setInfo] = useState({

        email: "",
        password: "",

    })
    function handleLoginUser(res)
    {
      const data=res.data;
      localStorage.setItem("token",data?.token);
      console.log(res.data);
    }
    async function login(event) {

        event.preventDefault();
        console.log(info);
        await axios.post("http://localhost:8080/auth/login", info).then( handleLoginUser).catch(err => console.log(err));        
    }
    return (
        <div className="container" >

            <h1 className="projheader" style={header}>Login</h1>
            <div className="caontainer" style={container}>
                <img src={Sign} />
                <form onSubmit={login}>
                    <div style={grid}>
                        <card>
                            <label className="name" style={namen}>Email  </label> <br />
                            <input type="email" value={info.email} style={inputf} placeholder="please enter your full name" required onChange={(token) => { setInfo({ ...info, email: token.target.value }); console.log(info.email) }} />
                        </card>
                        <card>
                            <label className="name" style={namen}>Password  </label> <br />
                            <input type="password" value={info.password} style={inputf} placeholder="please enter your email" required onChange={(token) => setInfo({ ...info, password: token.target.value })} />
                        </card>
                        <card>
                            <button className="btn1" type="submit" style={btn} >Login</button>

                        </card>
                    </div>
                </form>
            </div>
        </div>
    );
}
const container = {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    width: 'cover'
}
const header = {
    fontFamily: 'Inter',
    color: 'white',
    padding: 20
}
const namen = {
    fontFamily: 'Inter',
    color: 'white',

}

const btn = {
    height: 30,
    width: 100,
    borderRadius: 10,
    backgroundImage: 'linear-gradient(rgb(21, 127, 226),rgb(136, 133, 133))',

    margin: 30,
    fontFamily: 'Inter',
    color: 'white',
}
const inputf = {
    height: 40,
    borderRadius: 15,
    margin: 15,
    backgroundColor: `#48d1cc`,
    placeholderTextColor: '#333',
    width: 300
}
const grid = {
    display: "flex",
    flexDirection: "column"
}
export default Login;