// import { useState } from "react";
import summ from '../../Photos/summary.png'
import '../../App.css'
import Buttons from '../Buttons/Buttons'
import './ProfessionalSummar.css'
const ProfessionalSummary = ({ title, part, setpart, section, setSection }) => {
    return (
        <div className="professionalSum" >
            <div className="sqaure" >
                <h1 className="professionalheader" >{title}</h1>
                <div className="left" >
                    <form>
                        <label className="namesumm">Summary about You  </label> <br />
                        <textarea type="text" className="n" style={inputf} required onChange={(token) => setpart({ ...part, Summary: token.target.value })}></textarea>
                        <div style={{ display: "flex", flexDirection: 'column' }}>
                <div className="detail">
                    <div className="head">How to summarize yourself</div>
                    <p >

                        1-Introduce yourself by stating your name.<br></br>
                        2-Mention your current status, such as being a student.<br></br>
                        3-State your career aspirations or professional goals.<br></br>
                        4-Share any specific interests or areas of focus related to your field.<br></br>

                    </p>

                </div>
            </div>
                        <Buttons section={section} setSection={setSection} part={part} setpart={setpart}/>
                    </form>
                </div>
            </div>
       
            <img src={summ} height="450px"></img>

        </div>


    )
}


const inputf = {

    backgrounColor: " #e9e9e9",

    borderRadius: 20,
    marginBottom: 20,
    padding: 15,

    fontFamily: 'Ubuntu',
    width: 400,


    height: 200,

}

export default ProfessionalSummary;