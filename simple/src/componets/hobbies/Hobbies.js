import React, { useState } from 'react';
import Buttons from '../Buttons/Buttons';
import './Hobbies.css'
import ski from '../../Photos/Skills.png'

const Hobbies = ({ title, section, setSection, part, setpart,Hobbys }) => {
    const [hobbies, setHobbies] = useState(Hobbys);
    const [newHobby, setNewHobby] = useState('');

    const [add, setadd] = useState(false);

    const addHobby = () => {
        setadd(false);
        setHobbies([...hobbies, newHobby]);
        setpart({ ...part, Hobbies: [...hobbies, newHobby] });
        setNewHobby('');
    };
    const deleteone = (ind) => {

        const arr = hobbies.filter((ele, i) => {
            if (ind !== i) {
                return ele;

            }
        });
        setHobbies(arr);
    }


    return (
        <div className='hobby'>
            <div>
                <h1 className="hobbyHeader" >{title}</h1>


                <div className='main'>
                    {hobbies.map((ele, ind) => {
                        return (
                            <div className='item'>{ele} <button className="deletehoobie" onClick={() => { deleteone(ind) }}>X</button>
                            </div>
                        )
                    })}

                </div>

                <div className="outlinkhobbie">
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