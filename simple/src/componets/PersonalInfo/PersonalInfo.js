import { useState } from "react";
import person from '../../Photos/personal.png'
// import '../App.css'
import './PersonalInfo.css'
import Buttons from '../Buttons/Buttons'
// import funcLink from "./Funclink";


const PersonalInfo = ({ title, part, setpart, section, setSection }) => {

    const [links, setLinks] = useState([]);
    const [add, setadd] = useState(false);
    // const [newtitles, setnewTitles] = useState([]);

    const [onetitle, setoneTitle] = useState('')
    const [url, setUrl] = useState('');

    const addlink = () => {
        // setnewTitles([...newtitles, onetitle]);
        // console.log(newtitles)
        setadd(false);
        const obj = {
            title: onetitle,
            url: url
        }

        setLinks([...links, obj]);
        setUrl('');
        setoneTitle('');
        // console.log(links);
        setpart({ ...part, Links: links });
    };

    const deleteone = (ind) => {

        const arr = links.filter((ele, i) => {
            if (ind !== i) {
                return ele;

            }
        });
        setLinks(arr);
    }


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

                            {links.map((ele, ind) => {
                                return (

                                    <div className="card">

                                        <label className="name" >{ele.title} <span style={{ fontSize: 13, color: 'blue', opacity: 0.3 }}>OPTIONAL  </span> </label>
                                        <div className="main-new-feild" >
                                            <input type="url" value={ele.url} disabled className="newone" />

                                            <button className="delete" onClick={() => { deleteone(ind) }}>X</button></div>
                                    </div>
                                )
                            })}
                        </div>





                        <div className="outlink1">
                            <div className="link" >
                                <h3> Add Social-Media Links</h3>

                                <div className="add" onClick={() => setadd(true)}>+</div>

                            </div>
                            {(add && (<div className="newlink" >

                                <label className="name" >Enter Title  </label>
                                <input className="inputnewlink" type="text" placeholder="please enter a title of link" required onChange={(token) => setoneTitle(token.target.value)} />
                                <label className="name" >Enter URL  </label>
                                <input className="inputnewlink" type="text" placeholder="please enter a title of link" required onChange={(token) => setUrl(token.target.value)} />
                                <div className="buttons">
                                    <div className="cancel" onClick={() => setadd(false)}>cancel</div>
                                    <div className="save" onClick={addlink}>save</div>
                                </div>
                            </div>)

                            )}
                        </div>
                    </form>

                    <Buttons section={section} setSection={setSection} part={part} setpart={setpart} />

                </div>
            </div>
            <img src={person} height="400" width="350" />
        </div>
    )
}






export default PersonalInfo;