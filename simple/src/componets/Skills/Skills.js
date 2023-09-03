import React, { useState } from 'react';
import Buttons from '../Buttons/Buttons';
import ski from '../../Photos/Skills.png'
import './Skills.css'
const Skills = ({ title, section, setSection, part, setpart,Skills }) => {
    const [skills, setSkills] = useState(Skills);
    const [newSkill, setNewSkill] = useState('');

    const [add, setadd] = useState(false);

    let addSkill = () => {
        setadd(false);
        setSkills([...skills, newSkill])
        setpart({ ...part, Skills: [...skills, newSkill] });
        console.log(skills);
        setNewSkill('');
    }
    const deleteone = (ind) => {
        const arr = skills.filter((ele, i) => {
            if (i !== ind)
                return ele;
        });
        setSkills(arr);
    }

    return (
        <div className='skill'>
            <div >
                <h1 className="skillheader" >{title}</h1>


                <div className='main'>
                    {skills.map((ele, ind) => {
                        return (
                            <div className='item'>{ele}
                                <button className="deleteskill" onClick={() => { deleteone(ind) }}>X</button></div>
                        )
                    })}

                </div>
                <div>

                </div>
                <div className="outlinkskill">
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

            <img src={ski} />

        </div>
    );
}


export default Skills;