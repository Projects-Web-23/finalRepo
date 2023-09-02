import { useState } from "react";
import person from '../../Photos/personal.png'
// import '../App.css'
import './PersonalInfo.css'
import Buttons from '../Buttons/Buttons'
// import funcLink from "./Funclink";


const PersonalInfo = ({ title, part, setpart, section, setSection }) => {

    const [links, setLinks] = useState([]);
    const [add, setadd] = useState(false);
    const [newtitles, setnewTitles] = useState([]);
    const [onetitle, setoneTitle] = useState('')
    const [url,setUrl] =useState('');

    const addlink = () => {
        setnewTitles([...newtitles, onetitle]);
        console.log(newtitles)
        setoneTitle('');
        setadd(false);        
    };


    return (
        <div className="personalmain" >
            <div className="table" >
                <h1 className="Personalheader" >{title}</h1>
                <div className="caontainer" >
                    <form className="formcont">
                        <div className="square">

                            <div className="card">

                                <label className="name" >Full Name  </label>
                                <input type="text" placeholder="please enter your name......" required onChange={(token) => setpart({ ...part, FullName: token.target.value })} />

                            </div>

                            <div className="card">

                                <label className="name">Email <span style={{ fontSize: 13, color: 'blue', opacity: 0.3 }}>RECOMMENDED</span> </label>
                                <input type="email" placeholder="please enter your mail ....." optinal onChange={(token) => setpart({ ...part, Email: token.target.value })} />

                            </div>



                            <div className="card">

                                <label className="name" >phone  <span style={{ fontSize: 13, color: 'blue', opacity: 0.3 }}>RECOMMENDED</span></label>
                                <input type="number" placeholder="please enter your home phone ....." required onChange={(token) => setpart({ ...part, Phone: token.target.value })} />

                            </div>
                            <div className="card" >

                                <label className="name" >Address <span style={{ fontSize: 13, color: 'blue', opacity: 0.3 }}>RECOMMENDED  </span> </label>
                                <input type="text" placeholder="please enter your address ......" required onChange={(token) => setpart({ ...part, Address: token.target.value })} />

                            </div>

                            {newtitles.map((ele) => {
                                return (

                                    <div className="card">

                                        <label className="name" >{ele} <span style={{ fontSize: 13, color: 'blue', opacity: 0.3 }}>OPTIONAL  </span> </label>
                                        <input type="url" placeholder="please enter a link ....." required onChange={(token) => 
                                         {
                                            setLinks([...links, {title:ele,url:token.target.value}]);
                                            console.log(links);
                                        setpart({ ...part, Links: [...links, {title:ele,url:token.target.value}] });}
                                        } />
                                    </div>
                                )
                            } )}
                        </div>
                    </form>
                                      

                    <div className="outlink">
                        <div className="link" >
                            <h3> Add Social-Media Links</h3>

                            <div className="add" onClick={() => setadd(true)}>+</div>

                        </div>
                        {(add && (<div className="newlink" >

                            <label className="name" >Enter Title  </label>
                            <input className="inputnewlink" type="text" placeholder="please enter a title of link" required onChange={(token) => setoneTitle(token.target.value)} />
                            <div className="buttons">
                                <div className="cancel" onClick={() => setadd(false)}>cancel</div>
                                <div className="save" onClick={addlink}>save</div>
                            </div>
                        </div>)

                        )}
                    </div>
                    <Buttons section={section} setSection={setSection} part={part} setpart={setpart}/>

                </div>
            </div>
            <img src={person} height="400" width="350" />
        </div>
    )
}






export default PersonalInfo;