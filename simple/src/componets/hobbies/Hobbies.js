import React, { useState } from 'react';
import Buttons from '../Buttons/Buttons';
import ski from '../../Photos/Skills.png'

const Hobbies = ({ title, section, setSection,part,setpart }) => {
    const [hobbies, setHobbies] = useState([]);
    const [newHobby, setNewHobby] = useState('');

    const [add, setadd] = useState(false);

    const addHobby = () => {
        setadd(false);
        setHobbies([...hobbies, newHobby]);
        setpart({...part,Hobbies:[...hobbies, newHobby]});
        setNewHobby('');
    };

    return (
       <div className='hobby'>
        <div>
            <h1 className="hobbyHeader" >{title}</h1>


            <div className='main'>
                {hobbies.map((ele) => {
                    return (
                        <div className='item'>{ele}</div>
                    )
                })}

            </div>
            <div>

            </div>
            <div className="outlink">
                <div className="link" >
                    <h3> Add Your Hobbies</h3>

                    <div className="add" onClick={() => setadd(true)}>+</div>

                </div>
                {(add && (<div className="newlink" >

                    <label className="name" >Enter a Hobby  </label>
                    <input className="inputnewlink" type="text" placeholder="please enter a Hobby" required onChange={(token) => setNewHobby(token.target.value)} />
                    <div className="buttons">
                        <div className="cancel" onClick={() => setadd(false)}>cancel</div>
                        <div className="save" onClick={addHobby}>save</div>
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


export default Hobbies;