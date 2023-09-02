import { useState } from "react";
import './Resume.css';
import sections from './formsection'
import PersonalInfo from '../../componets/PersonalInfo/PersonalInfo' //formSections
import ProfessionalSummary from "../../componets/ProfessionalSummar/ProfessionalSummar";
import Job from "../../componets/JobObjective/JobObjective";
import Work from "../../componets/WorkExperience/WorkExperience";
import Education from "../../componets/Education/Education";
import Project from "../../componets/Projects/Projects";
import Hobbies from "../../componets/hobbies/Hobbies";
import Certificate from "../../componets/Certification/Certification";
import Languages from "../../componets/Languages/Languages";
import Volunteer from "../../componets/volunteer/Volunteer";
import Skills from "../../componets/Skills/Skills";
const Resume = () => {
    const [section, setSection] = useState(0);//rendered pages
    const [resume, setResume] = useState({
        FullName: "",
        Address: "",
        Phone: "",
        Email: "",
        // Linked: "",
        Links: [],//sec1
        Summary: "",//sec2
       
        // Portfolio: "",
        // jobTitles: "",
       
        WorkExperience:[],//sec4
        Degreesearned: '',//sec5 
                
        Graduationdates: '',
       
        educationalinstitutions: '',
        fieldofstudy: '',       
        honors: [],     
               
        Skills:[],//sec6
        Projects:[],//sec7
        Certificates:[], //sec8
        
        Hobbies:[],
        


    });

    let whichTorender = () =>  //Handle what to apper
    {
        if (section === 0)
            return <PersonalInfo title={sections[0]} part={resume} setpart={setResume} section={section} setSection={setSection} />
        else if (section === 1)
            return <ProfessionalSummary title={sections[1]} part={resume} setpart={setResume} section={section} setSection={setSection} />
        
        else if (section === 2)
            return <Work title={sections[2]} part={resume} setpart={setResume} section={section} setSection={setSection} />
        else if (section === 3)
            return <Education title={sections[3]} part={resume} setpart={setResume} section={section} setSection={setSection} />
        else if (section === 4)
            return <Skills title={sections[4]} part={resume} setpart={setResume} section={section} setSection={setSection} />
        else if (section === 5)
            return <Project title={sections[5]} part={resume} setpart={setResume} section={section} setSection={setSection} />
        else if (section === 6)
            return <Languages title={sections[6]} part={resume} setpart={setResume} section={section} setSection={setSection} />
        else if (section === 7)
            return <Certificate title={sections[7]} part={resume} setpart={setResume} section={section} setSection={setSection} />
        
        else
            return <Hobbies title={sections[8]} part={resume} setpart={setResume} section={section} setSection={setSection} />

    }


    return (
        <div>
            <h1 className="header">Welcome to our form sections</h1>
            <div className="main-container">
                <div ></div>
                <div className="container" >
                    <div className="Process">
                        {/* {sections.forEach((ele, index) => { return (<><div style={section >= index && { backgroundColor: 'blue' }}>{index}</div><span>____</span></>) })} */}
                        <div style={(section >= 0 && { backgroundColor: 'blue' }) || {}}>1</div><span>____</span>
                        <div style={(section >= 1 && { backgroundColor: 'blue' }) || {}}>2</div><span>____</span>
                        
                        <div style={(section >= 2 && { backgroundColor: 'blue' }) || {}}>3</div><span>____</span>
                        <div style={(section >= 3 && { backgroundColor: 'blue' }) || {}}>4</div><span>____</span>
                        <div style={(section >= 4 && { backgroundColor: 'blue' }) || {}}>5</div><span>____</span>
                        <div style={(section >= 5 && { backgroundColor: 'blue' }) || {}}>6</div><span>____</span>
                        <div style={(section >= 6 && { backgroundColor: 'blue' }) || {}}>7</div><span>____</span>
                        <div style={(section >= 7 && { backgroundColor: 'blue' }) || {}}>8</div><span>____</span>
                        
                        <div style={(section === 8 && { backgroundColor: 'blue' }) || {}}>9</div>
                    </div>
                    <div className="formelement">
                        {whichTorender()}
                    </div>
                </div>
                <div ></div>
            </div>
        </div >
    )



}
export default Resume;