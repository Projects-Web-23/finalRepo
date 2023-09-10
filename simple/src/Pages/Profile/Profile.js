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
    // function readURL(input) {
    //     if (input.files && input.files[0]) {
    //         var reader = new FileReader();
    //         reader.onload = function (e) {

    //             // ('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
    //             // ('#imagePreview').hide();
    //             // ('#imagePreview').fadeIn(650);
    //         }
    //         reader.readAsDataURL(input.files[0]);
    //     }
    // }


    const [image, setimage] = useState("");

    let arr = [];
    for (let i = 1; i <= CvNum; i++) {
        arr = [...arr, i];
    }
    // ("#imageUpload").onchange(function () {
    //     readURL(this);
    // });



    function handleFileChange(event) {
        const file = event.target.files[0];
        readURL(file);
    }
    function readURL(file) {

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const result = e.target.result;
                setimage(result);

                console.log(result);
            };

            reader.readAsDataURL(file);
        }

    };
    return (
        <div className="main-profile">
            <div class="avatar-upload">
                <div class="avatar-preview">
                    <div id="imagePreview">
                        {image && <img src={image} alt="user pic" />}
                    </div>
                </div>
                <div class="avatar-edit">
                    <input type='file' id="imageUpload" onChange={handleFileChange} accept=".png, .jpg, .jpeg" ></input>

                    <label for="imageUpload " > </label>
                </div>
            </div>
            <h2>User Name : {Name}</h2>
            <h3> User Email : {Email}</h3>
            <h3> User Gender : {Gender}</h3>

            <div className="profile-card">

                {
                    arr.map((element) => {

                        let s = `/Built/${element}`
                        return (
                            <Link to={s}><div className="cards">
                                <p>RESUME <span>{element}</span></p>
                            </div></Link>)
                    }


                    )}


            </div>


        </div>

    );
}


export default Profile;