// import { useState } from "react";
import job from '../../Photos/job.png'
import Buttons from '../Buttons/Buttons'
import './JobObjective.css'
const Job = ({ title, part, setpart, section, setSection }) => {

    return (
        <div className="Jobmain" >
            <div className="sqaurejob" >
                <h1 className="Jobheader">{title}</h1>
                <div className="left" >
                    <form>
                        <div className="card">
                            <label className="name" >What is your job objective? <span style={{ fontSize: 13, color: 'blue', opacity: 0.3 }} >OPTIONAL</span> </label> <br />
                            <input placeholder="Enter Here .........." type="text" className="n" required onChange={(token) => setpart({ ...part, Objective: token.target.value })} />
                        </div>

                        <div className="card" >
                            <label className="name" >Are You available for work  <span style={{ fontSize: 13, color: 'blue', opacity: 0.3 }} >OPTIONAL</span> </label> <br />
                            <input placeholder="Enter Here .........." type="text" className="n" required onChange={(token) => setpart({ ...part, Available: token.target.value })} />
                        </div>
                        <div className="card">
                            <label className="name" >Do You Prefer Full-Time OR Part-Time Work <span style={{ fontSize: 13, color: 'blue', opacity: 0.3 }} >OPTIONAL</span> </label> <br />
                            <input placeholder="Enter Here .........." type="text" className="n" required onChange={(token) => setpart({ ...part, JobDuration: token.target.value })} />
                        </div>
                        <Buttons section={section} setSection={setSection} part={part} setpart={setpart}/>
                    </form>
                </div>
            </div>
            <img src={job} height="500" width="300" alt="photo"></img>
        </div>


    )



}

export default Job;