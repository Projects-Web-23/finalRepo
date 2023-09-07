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
        <div className="main-profile">
        <div className="main-profile-grid">
            <div className="user-info">
               <img src={pro} alt="user pic" />
               <h2>user name</h2>
               <button>edit your data</button> {/*should navigate to resume page*/}

            </div>
            <div className="profile-card">
                <h2 className="profile-card-title">card title</h2>
                <div className="profile-info-card">
                    <div className="profile-item">
                    <h4>email</h4>
                    <p>ay haga</p>
                    </div>

                    <div className="profile-item">
                    <h4>email</h4>
                    <p>ay haga</p>
                    </div>

                    <div className="profile-item">
                    <h4>email</h4>
                    <p>ay haga</p>
                    </div>

                </div>

            </div>

            <div className="profile-card">
                <h2 className="profile-card-title">card title</h2>
                <div className="profile-info-card">
                    <div className="profile-item">
                    <h4>email</h4>
                    <p>ay haga</p>
                    </div>

                    <div className="profile-item">
                    <h4>email</h4>
                    <p>ay haga</p>
                    </div>

                    <div className="profile-item">
                    <h4>email</h4>
                    <p>ay haga</p>
                    </div>
                    
                </div>

            </div>

            <div className="profile-card">
                <h2 className="profile-card-title">card title</h2>
                <div className="profile-info-card">
                    <div className="profile-item">
                    <h4>email</h4>
                    <p>ay haga</p>
                    </div>

                    <div className="profile-item">
                    <h4>email</h4>
                    <p>ay haga</p>
                    </div>

                    <div className="profile-item">
                    <h4>email</h4>
                    <p>ay haga</p>
                    </div>
                    
                </div>

            </div>

            <div className="profile-card">
                <h2 className="profile-card-title">card title</h2>
                <div className="profile-info-card">
                    <div className="profile-item">
                    <h4>email</h4>
                    <p>ay haga</p>
                    </div>

                    <div className="profile-item">
                    <h4>email</h4>
                    <p>ay haga</p>
                    </div>

                    <div className="profile-item">
                    <h4>email</h4>
                    <p>ay haga</p>
                    </div>
                    
                </div>

            </div>

            
        </div>
        <div className="big-card-grid">
                <div className="big-card-item">
                    <h3>card title</h3>
                    <div className="big-card-info">
                        <div className="big-card-field">
                            <h4>email</h4>
                            <p>ay haga</p>
                        </div>
                    </div>
                </div>

                <div className="big-card-item">
                    <h3>card title</h3>
                    <div className="big-card-info">
                        <div className="big-card-field">
                            <h4>email</h4>
                            <p>ay haga</p>
                        </div>
                    </div>
                </div>

                <div className="big-card-item">
                    <h3>card title</h3>
                    <div className="big-card-info">
                        <div className="big-card-field">
                            <h4>email</h4>
                            <p>ay haga</p>
                        </div>
                    </div>
                </div>

                <div className="big-card-item">
                    <h3>card title</h3>
                    <div className="big-card-info">
                        <div className="big-card-field">
                            <h4>email</h4>
                            <p>ay haga</p>
                        </div>
                    </div>
                </div>

            </div>
        <div className="resume-grid">

        </div>
        </div>

    );
}


export default Profile;