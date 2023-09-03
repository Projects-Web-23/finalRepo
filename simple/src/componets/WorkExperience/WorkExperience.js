import { useState } from "react";
import Buttons from '../Buttons/Buttons'
import './WorkExperience.css'
const Work = ({ title, part, setpart, section, setSection, WorkExperience }) => {

    const [experiances, setExperiances] = useState(WorkExperience);
    console.log("work ex", WorkExperience)

    const [add, setadd] = useState(false);
    const [jobtitle, setjobtitle] = useState("");
    const [company, setcompany] = useState("");
    const [sdate, setsdate] = useState("");
    const [edate, setedate] = useState("");
    const [briefdescription, setbriefdescription] = useState("");



    const addexperiance = () => {
        setadd(false);
        const ex = {
            title: jobtitle,
            company: company,
            Start: sdate,
            End: edate,

            briefdescription: briefdescription,

        };
        setExperiances([...experiances, ex]);
        setjobtitle('');
        setcompany('');
        setsdate('');
        setedate('');
        setbriefdescription('');
        setpart({ ...part, WorkExperience: [...experiances, ex] });
        // console.log(experiances)

    }
    const deleteone = (ind) => {
        const arr = experiances.filter((ele, i) => {
            if (ind !== i)
                return ele;
        });
        setExperiances(arr);
        setpart({ ...part, WorkExperience: arr });

    }


    return (
        <div className="workmain">
            <div className="sqaure" >
                <h1 className="workheader"  >{title}</h1>
                <div className="left" >
                    <form className="formjob">
                        {experiances.map((ele, ind) => {
                            return (

                                <div className="cardwork">
                                    <div className="jobhead">
                                        {ele.title}

                                    </div>
                                    <div className="jobcampany">
                                        {ele.company}

                                    </div>

                                    <div className="jobdate">
                                        {ele.Start}

                                    </div>
                                    <div className="jobdate">
                                        {ele.End}

                                    </div>

                                    <div className="summery">
                                        {ele.briefdescription}

                                    </div>

                                    <button className="deleteexperiance" onClick={() => { deleteone(ind) }}>X</button>

                                </div>
                            )
                        })}

                        <div className="outlink">
                            <div className="link" >
                                <h3>Add a Previous Work Experience</h3>

                                <div className="addwork" onClick={() => setadd(true)}>+</div>

                            </div>
                            {(add && (
                                <div className="new-form " >
                                    <div className="smallform">
                                        <div className="card">
                                            <label className="name" > Job Title  </label>
                                            <input className="feild" type="text" placeholder="please enter a job...... " onChange={(token) => setjobtitle(token.target.value)} />
                                        </div>
                                        <div className="card">
                                            <label className="name" > Company  </label>
                                            <input className="feild" type="text" placeholder="please enter a Company...... " onChange={(token) => setcompany(token.target.value)} />
                                        </div>

                                        <div className="card">
                                            <label className="name" > Employment Date  </label>
                                            <input className="feild" type="date" placeholder="please enter a job...... " onChange={(token) => setsdate(token.target.value)} />
                                        </div>
                                        <div className="card">
                                            <label className="name" > End Date  </label>
                                            <input className="feild" type="date" placeholder="please enter a job...... " onChange={(token) => setedate(token.target.value)} />
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


                        <Buttons section={section} setSection={setSection} part={part} setpart={setpart} />
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Work;