import { useState } from "react";
import Buttons from '../Buttons/Buttons'

const Volunteer = ({ title, part, setpart, section, setSection }) => {

    const [volunteering, setVolunteering] = useState([]); //list of vol. experiences

    const [add, setadd] = useState(false);//button
    const [volunteerPlace, setVolunteerPlace] = useState('');//title    
    const [sdate, setsdate] = useState(''); //date
    const [edate, setedate] = useState(''); 
    const [vRole, setVrole] = useState('');//volunteer role 
    const [briefdescription, setbriefdescription] = useState('');//description



    const addexperience = () => {
        setadd(false);
        const ex = {
            organization: volunteerPlace,           
            start_date: sdate,
            end_date:edate,
            role: vRole,         
            briefdescription: briefdescription,

        };
        setVolunteering([...volunteering, ex]);
        setpart({...part, volunteering:[...volunteering, ex]});


    }



    return (
        <div className="workmain">
            <div className="sqaure" >
                <h1 className="workheader"  >{title}</h1>
                <div className="left" >
                    <form className="formjob">
                        {volunteering.map((ele) => {
                            return (

                                <div className="cardwork">
                                    <div className="jobhead">
                                        {ele.organization}

                                    </div>
                                    <div className="jobhead">
                                        {ele.role}

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
                                <h3>Add a Volunteering Experience</h3>

                                <div className="addwork" onClick={() => setadd(true)}>+</div>

                            </div>
                            {(add && (
                                <div className="new-form " >
                                    <div className="smallform">
                                        <div className="card">
                                            <label className="name" > Volunteering Organization  </label>
                                            <input className="feild" type="text" placeholder="please enter volunteering organization " onChange={(token) =>  setVolunteerPlace(token.target.value)} />
                                        </div>                                       
                                        <div className="card">
                                            <label className="name" > Volunteer role </label>
                                            <input className="feild" type="text" placeholder="please enter your role ..... " onChange={(token) => setVrole(token.target.value)} />
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
                                        <div className="save" onClick={addexperience}>save</div>
                                    </div>
                                </div>
                            )

                            )}
                        </div>


                        <Buttons section={section} setSection={setSection} part={part} setpart={setpart} />
                    </form>
                </div>
            </div>
            {/* <img src={work} height="300" width="400"></img> */}
        </div>
    )
}

export default Volunteer;