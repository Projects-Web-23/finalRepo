import { useState } from "react";
import React from "react";
import axios from 'axios'
import Sign from '../Photos/Sign.png'
import {Link,useNavigate} from 'react-router-dom'
const Signup=()=>
{
    //const navigate = useNavigate();
    const [info,setInfo]=useState({
        fullName:"",
        email:"",
        password:"",
        confirmPassword:"",
        gender:""
    })
    async function sign(event){

        event.preventDefault();
        
                await axios.post("http://localhost:8080/auth/signup",info).then(res=>console.log(res.data)).catch(err=>console.log(err));
       
    }
    return (
        <div className="container" >           
         
         <h1 className="projheader" style={header}>Sign Up</h1> 
         <div className="caontainer" style={container}>
            <img src={Sign}/>
         <form onSubmit={sign} >
            <div style={grid}>
            <card>
         <label className="name" style={namen}>Full Name  </label> <br/>
         <input type="text"value={info.fullName} style={inputf}placeholder="please enter your full name" required onChange={(token)=>setInfo({...info,fullName:token.target.value})}/>      
         </card>
         <card>
         <label className="name" style={namen}>Email  </label> <br/>
         <input type="email" value={info.email}style={inputf}placeholder="please enter your email" required onChange={(token)=>setInfo({...info,email:token.target.value})}/>      
         </card>
         <card>
         <label className="name" style={namen}>Password  </label> <br/>
         <input type="password" value={info.password} style={inputf}placeholder="please enter your password" required onChange={(token)=>setInfo({...info,password:token.target.value})}/>      
         </card>
         <card>
         <label className="name" style={namen}>Confirm Password </label> <br/>         
         <input type="password" value={info.confirmPassword} style={inputf}placeholder="please confirm your password" required onChange={(token)=>setInfo({...info,confirmPassword:token.target.value})}/>      
         </card>
         <card className="card" >         
         
         <label className="name" style={namen}>Male </label>            
         <input type="radio" name="gender" onChange={(token)=>setInfo({...info,gender:"Male"})}/>      
        
        
         <label className="name" style={namen}>Female </label> 
           <input type="radio"  name="gender" onChange={(token)=>setInfo({...info,gender:"Female"})}/>         
        </card>
        <card>
        <button className="btn1" type="submit" style={btn} >Sign Up</button>
        
        </card>
         </div>
         </form>               
        
        </div>
            
        
        
    </div> 
    );
}
const container={
    display:'flex',
    flexDirection:'row',   
    padding:20,
    width:'cover' 
}
const header={
    fontFamily:'Inter',
    color:'white',
    padding:20
    }
    const namen={
        fontFamily:'Inter',
        color:'white' ,
         
    }
    const button={
        display:'flex',
        flexDirection:'row',   
        
    }
    const btn={
        height: 30,
        width: 100,
        borderRadius:10,
        backgroundImage: 'linear-gradient(rgb(21, 127, 226),rgb(136, 133, 133))',
       
        margin: 30,
        fontFamily:'Inter',
        color:'white',  
    }
    const inputf={
    height:40,
    borderRadius:15,
    margin:15,
    backgroundColor:`#48d1cc`,
    placeholderTextColor:'#333',
    width:300}
    const grid={
        display:"flex",
        flexDirection:"column"
    }
export default Signup;