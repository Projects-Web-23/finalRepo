import { useState } from "react";
import grad from '../../Photos/grad.png'
import Buttons from '../Buttons/Buttons'
import './Education.css'
const Education = ({ title, part, setpart, section, setSection }) => {

    const [add, setadd] = useState(false);
    const [awards, setawards] = useState([]);
    // const [award, setaward] = useState({
    //     header: '',
    //     organization:'',

    // });
    const [header, setheader] = useState('');
    const [organization, setorganization] = useState('');

    const addaward = () => {
        const obj = { header: header, organization: organization };
        setawards([...awards, obj]);        
        setpart({...part,honors:[...awards, obj]});
        setheader('');
        setorganization('');
        setadd(false);

    }

    return (
        <div className="edulmain">
            <div className="sqaure">
                <h1 className="eduheader" >{title}</h1>
                <div className="con" >
                    <form className="leftedu">
                        <div className="card">

                            <label className="name" >Degrees earned  </label>
                            <input type="text" placeholder=" enter......" required onChange={(token) => setpart({ ...part, Degreesearned: token.target.value })} />

                        </div>
                        <div className="card">

                            <label className="name" >field of study  </label>
                            <input type="text" placeholder=" enter......" required onChange={(token) => setpart({ ...part, fieldofstudy: token.target.value })} />

                        </div>
                        <div className="card">

                            <label className="name" >educational institutions  </label>
                            <input type="text" placeholder=" enter " required onChange={(token) => setpart({ ...part, educationalinstitutions: token.target.value })} />

                        </div>
                        
                        <div className="card">

                            <label className="name" >Graduation dates </label>
                            <input type="date" placeholder="please enter your name......" required onChange={(token) => setpart({ ...part, Graduationdates: token.target.value })} />

                        </div>


                    </form>
                    <div className="award">
                        {awards.map((ele) => {
                            return (
                                <div className="awarditem">
                                    <div className="n1">{ele.header}</div>
                                    <div className="n2">{ele.organization}</div>

                                </div>
                            )
                        })}
                    </div>




                    <div className="outlinkaward">
                        <div className="link" >
                            <h3> Awards</h3>

                            <div className="add" onClick={() => setadd(true)}>+</div>

                        </div>
                        {(add && (<div className="newlink" >

                            <label className="name" >Title of Honors/Awards</label>
                            <input className="inputnewlink" type="text" placeholder="please enter a title ....." required onChange={(token) => setheader(token.target.value)} />

                            <label className="name" >Institution/Organization</label>
                            <input className="inputnewlink" type="text" placeholder="please enter organization.........." required onChange={(token) => setorganization(token.target.value)} />
                            <div className="buttons">
                                <div className="cancel" onClick={() => setadd(false)}>cancel</div>
                                <div className="save" onClick={addaward}>save</div>
                            </div>
                        </div>)

                        )}
                    </div>
                </div>
                <Buttons section={section} setSection={setSection} part={part} setpart={setpart}/>
            </div>
            <img src={grad} height="400" width="300"></img>
        </div>


    )



}

export default Education;