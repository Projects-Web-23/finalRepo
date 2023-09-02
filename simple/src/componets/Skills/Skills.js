import React, { useState } from 'react';
import Buttons from '../Buttons/Buttons';
import ski from '../../Photos/Skills.png'
import './Skills.css'
const Skills = ({ title, section, setSection,part,setpart }) => 
{
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState('');

    const [add, setadd] = useState(false);
  
    let addSkill =()=>{
        setadd(false);
        setSkills([...skills,newSkill])      
        setpart({...part,Skills:[...skills,newSkill]});
        console.log(skills);
        setNewSkill('');}
   
    return (
       <div className='skil'>
        <div>
            <h1 className="skillheader" >{title}</h1>


            <div className='main'>
                {skills.map((ele) => {
                    return (
                        <div className='item'>{ele}</div>
                    )
                })}

            </div>
            <div>

            </div>
            <div className="outlink">
                <div className="link" >
                    <h3> Add Your Skills</h3>

                    <div className="add" onClick={() => setadd(true)}>+</div>

                </div>
                {(add && (<div className="newlink" >

                    <label className="name" >Enter Skill  </label>
                    <input className="inputnewlink" type="text" placeholder="please enter a Skill" required onChange={(token) => setNewSkill(token.target.value)} />
                    <div className="buttons">
                        <div className="cancel" onClick={() => setadd(false)}>cancel</div>
                        <div className="save" onClick={addSkill}>save</div>
                    </div>
                </div>)

                )}
            </div>
            <Buttons section={section} setSection={setSection} part={part} setpart={setpart} />

        </div>
        
        <img src={ski} height="400" width="700" />
        
        </div>
    );
}


export default Skills;