import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
// import { User } from "../../../../Server/models/User";
import axios from 'axios'
import './Profile.css'
import pro from '../../Photos/profile.jpg'
const Profile = () => {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Gender, setGender] = useState("");
    const [CvNum, setCvNum] = useState(0);



    const fetchData = async () => {
        try {
            const response = await axios({
                method: "get",
                url: "http://localhost:8080/auth/me",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },

            })
            console.log(response.data);
            let ob = response.data.user;


            setName(ob.fullName);
            setEmail(ob.email);
            setGender(ob.gender);
            setCvNum(ob.CvNum);



        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    });

    return (
        <div className="main-Profile-Con">
            <div className="Header-Profile"> Welcome {'Mariam'}  </div>
            <div className="form-Profile">
                <div className="space"></div>
                <div className="img-Profile">
                    <img src={pro}></img>
                </div>
                <div className="space"></div>
                <div className="data-Profile">
                    <div >Name :</div>
                    <div> Emial :</div>

                </div>
                <div className="space"></div>
            </div>
            <div className="grid-Profile">

            </div>

        </div>

    );
}


export default Profile;