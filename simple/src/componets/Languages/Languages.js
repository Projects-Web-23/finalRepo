import React, { useState } from 'react';
import Buttons from '../Buttons/Buttons';
import lang from '../../Photos/lang.png'
import './languages.css'
const Skills = ({ title, section, setSection,part,setpart }) => {
    const [language, setLanguage] = useState([]);
    const [newlanguage, setNewlanguage] = useState('');

    const [add, setadd] = useState(false);

    const addlanguage = () => {
        setadd(false);
        setLanguage([...language, newlanguage]);
        setpart({...part,Languages:[...language, newlanguage]});
        setNewlanguage('');
    };

    return (
       
        <div>
            <h1 className="skillheader" >{title}</h1>
          
                <div className='main'>
                {language.map((ele) => {
                    return (
                        <div className='item'>{ele}</div>
                    )
                })}

                </div>
               <div>

               </div>
             <div className="outlink">
                <div className="link" >
                    <h3> Add Your Languages</h3>

                    <div className="add" onClick={() => setadd(true)}>+</div>

                </div>
                {(add && (<div className="newlink" >

                    <label className="name" >Enter a Language  </label>
                    <input className="inputnewlink" type="text" placeholder="please enter a Skill" required onChange={(token) => setNewlanguage(token.target.value)} />
                    <div className="buttons">
                        <div className="cancel" onClick={() => setadd(false)}>cancel</div>
                        <div className="save" onClick={addlanguage}>save</div>
                    </div>
                </div>)

                )}
                
             </div>
             <Buttons section={section} setSection={setSection} part={part} setpart={setpart}/>
            
                <img src={lang} />
               
        </div>
       
    );
}
const total ={
    display:"flex",
    flexDirection:"row"
}
const leftn ={
    display:"flex",
    flexDirection:"column"
}

export default Skills;