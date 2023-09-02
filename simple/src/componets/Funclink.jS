
import React from 'react';
import './PersonalInfo/style.css'



const funcLink = ({ newtitles, part, setpart, links, setLinks }) => {
    return (<>
        {newtitles.map((ele) => {
            return (

                <div className="card" >

                    <label className="name" >{ele} <span style={{ fontSize: 13, color: 'blue', opacity: 0.3 }}>RECOMMENDED  </span> </label>
                    <input type="text" placeholder="please enter your address" required onChange={(token) => {
                        const newobj = {
                            title: { ele },
                            url: token.target.value,
                        };
                        setLinks([...links, newobj]);
                        setpart({ ...part, Links: links });
                    }} />
                </div>
            )
        })}
    </>
    )

}
export default funcLink;