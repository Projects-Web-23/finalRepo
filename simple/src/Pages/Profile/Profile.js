import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
// import { User } from "../../../../Server/models/User";
import axios from 'axios'
import './Profile.css'
const Profile = () => {
    const [Name, setName] = useState();
    const [Email, setEmail] = useState(" ");
    const [Gender, setGender] = useState(" ");



    const fetchData = async () => {
        try {
            const response = await axios({
                method: "get",
                url: "http://localhost:8080/User/",


            })
            console.log(response.data);
            let ob = response.data;


            setName(ob.FullName);
            setEmail(ob.Email);
            setGender(ob.Gender);


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
            <div className="Header-Profile"> Welcome{Name}  </div>
            <div className="form-Profile">

            </div>
            <div className="grid-Profile">

            </div>

        </div>

    );
}


export default Profile;