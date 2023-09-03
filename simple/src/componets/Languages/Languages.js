import React, { useState } from 'react';
import Buttons from '../Buttons/Buttons';
import lang from '../../Photos/lang.png'
import './languages.css'
const Languages = ({ title, section, setSection, part, setpart,Languages_val }) => {
    const [language, setLanguage] = useState(Languages_val);
    const [newlanguage, setNewlanguage] = useState('');

    const [add, setadd] = useState(false);

    const addlanguage = () => {
        setadd(false);
        setLanguage([...language, newlanguage]);
        setpart({ ...part, Languages: [...language, newlanguage] });
        setNewlanguage('');
    };
    const deleteone = (ind) => {

        const arr = language.filter((ele, i) => {
            if (ind !== i) {
                return ele;

            }
        });
        setLanguage(arr);
    }


    return (

        <div className='mainlang'>
            <div className='lang-form'>
                <h1 className="langheader" >{title}</h1>
                <div className='main'>
                    {language.map((ele, ind) => {
                        return (

                            <div className='item'>{ele} <button className="deletelang" onClick={() => { deleteone(ind) }}>X</button></div>

                        )
                    })}

                </div>



                <div className="outlinklang">
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
                <Buttons section={section} setSection={setSection} part={part} setpart={setpart} />
            </div>
            <img src={lang} />

        </div>

    );
}


export default Languages;