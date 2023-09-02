import { useState } from "react";
import Buttons from '../Buttons/Buttons'
import './Projects.css'
const Project = ({ title, part, setpart, section, setSection }) => {

    const [experiances, setExperiances] = useState([]);

    const [add, setadd] = useState(false);//button
    const [projecttitle, setprojecttitle] = useState('');//title    
    const [sdate, setsdate] = useState(''); //date
    const [edate, setedate] = useState(''); 
    const [collaborator, setcollaborator] = useState('');//collaboraters   
    const [briefdescription, setbriefdescription] = useState('');//description



    const addexperiance = () => {
        setadd(false);
        const ex = {
            title: projecttitle,           
            start_date: sdate,
            end_date:edate,
            collaborator: collaborator,           
            briefdescription: briefdescription,

        };
        setExperiances([...experiances, ex]);
        setpart({...part, Projects:[...experiances, ex]});


    }



    return (
        <div className="workmain">
            <div className="sqaure" >
                <h1 className="workheader"  >{title}</h1>
                <div className="left" >
                    <form className="formjob">
                        {experiances.map((ele) => {
                            return (

                                <div className="cardwork">
                                    <div className="jobhead">
                                        {ele.title}

                                    </div>
                                    <div className="jobhead">
                                        {ele.collaborator}

                                    </div>
                                    
                                    <div className="jobdate">
                                        {ele.start_date}

                                    </div>
                                    <div className="jobdate">
                                        {ele.end_date}

                                    </div>
                                    
                                    
                                    <div className="summery">
                                        {ele.briefdescription}

                                    </div>
                                </div>
                            )
                        })}

                        <div className="outlink">
                            <div className="link" >
                                <h3>Add a Project Experience</h3>

                                <div className="addwork" onClick={() => setadd(true)}>+</div>

                            </div>
                            {(add && (
                                <div className="new-form " >
                                    <div className="smallform">
                                        <div className="card">
                                            <label className="name" > Project Title  </label>
                                            <input className="feild" type="text" placeholder="please enter a project name..... " onChange={(token) =>  setprojecttitle(token.target.value)} />
                                        </div>                                       
                                        <div className="card">
                                            <label className="name" > Colaborator </label>
                                            <input className="feild" type="text" placeholder="please enter a  colaborator ..... " onChange={(token) => setcollaborator(token.target.value)} />
                                        </div>
                                        <div className="card">
                                            <label className="name" > Start Date  </label>
                                            <input className="feild" type="date" placeholder="please enter its start date...... " onChange={(token) => setsdate(token.target.value)} />
                                        </div>
                                        <div className="card">
                                            <label className="name" > End Date  </label>
                                            <input className="feild" type="date" placeholder="please enter its end date...... " onChange={(token) => setedate(token.target.value)} />
                                        </div>

                                    </div>
                                    
                                   



                                    <label className="namework" > A Brief Description </label>
                                    <textarea className="textarea" type="text" placeholder="please summarize your responsibilities....... " onChange={(token) => setbriefdescription(token.target.value)} />

                                    <div className="buttons">
                                        <div className="cancel" onClick={() => setadd(false)}>cancel</div>
                                        <div className="save" onClick={addexperiance}>save</div>
                                    </div>
                                </div>
                            )

                            )}
                        </div>


                        <Buttons section={section} setSection={setSection} part={part} setpart={setpart}/>
                    </form>
                </div>
            </div>
            {/* <img src={work} height="300" width="400"></img> */}
        </div>
    )
}

export default Project;