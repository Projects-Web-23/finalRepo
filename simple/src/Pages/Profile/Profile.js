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

    let arr=[];
    for(let i=1;i<=CvNum;i++)
    {
      arr=[...arr,i];
    }
    // ("#imageUpload").onchange(function () {
    //     readURL(this);
    // });

    return (
        <div className="main-profile">
            {/* <div className="user-info">
                <img src={pro} alt="user pic" />
                <h2>{Name}</h2>
                <h3>{Email}</h3>
                 <h3>{Gender}</h3>
                <button>edit your data</button>

            </div> */}
            <div class="avatar-upload">
                <div class="avatar-edit">
                    <input type='file' id="imageUpload" onChange={(token) => setimage(token.target.value)} accept=".png, .jpg, .jpeg" />
                    <label for="imageUpload " > {image && (<img src={image}></img>)} </label>
                </div>
                <div class="avatar-preview">
                    <div id="imagePreview">

                    </div>
                </div>
            </div>
            <h2>User Name : {Name}</h2>
            <h3> User Email : {Email}</h3>
            <h3> User Gender : {Gender}</h3>

            <div className="profile-card">
                {/* <div className="cards">
                    <p> MY RESUME <span>{1}</span></p>
                </div>
                <div className="cards">
                    <p> MY RESUME <span>{2}</span></p>
                </div>
                <div className="cards">
                    <p>MY RESUME <span>{3}</span></p>
                </div>
                <div className="cards">
                    <p> MY RESUME <span>{4}</span></p>
                </div> */}

                {/*{() => {
                    for (let i=0; i < CvNum; i++) {
                        return (
                            <div className="cards">
                                <p>RESUME <span>{i+1}</span></p>
                            </div>)
                    }
                }}*/}
                {
                    arr.map((element) => {

                        let s=`/Built/${element}`
                            return (
                                <Link to={s}><div className="cards">
                                <p>RESUME <span>{element}</span></p>
                            </div></Link>)}
                       

                    )}
                

            </div>


        </div>

    );
}


export default Profile;