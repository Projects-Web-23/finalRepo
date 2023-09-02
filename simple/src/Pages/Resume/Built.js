import React,{useState, useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './BuiltResume.css';
import data from '../../ThisDataResume2.json';

{/*const doc = new jsPDF({
	orientation: 'p',
	unit: 'in',
	format: 'a4',
});
doc.html(BuiltResume, {
	async callback(doc) {
		await doc.save('pdf_name');
	},
});*/}


const BuiltResume =()=>
{
    const [Name,setName]=useState();
    const [Email,setEmail]=useState(" ");
    const [Address,setAddress]=useState(" ");
    const [Phone,setPhone]=useState(" ");
    const [Summary,setSummary]=useState(" ");
    const [Edu,setEdu]=useState([]);
    const [work,setWork]=useState([]);
    const [Soft,setSoft]=useState([]);
    const [Tech,setTech]=useState([]);
    const [Cert,setCert]=useState([]);
    const [Proj,setProject]=useState([]);
    const [Lang,setLang]=useState([]);
    const [Hobbies,setHobbies]=useState([]);

    useEffect(() => {
        const fetchData = async()=>
        {
            try
            {
                setName(data.Name);
                setEmail(data.Email);
                setAddress(data.Address);
                setPhone(data.Phone);
                setSummary(data.ProfessionalSummary);
                setWork(data.WorkExperience);
                setEdu(data.Education);
                setSoft(data.SoftSkills);
                setTech(data.TechnicalSkills);
                setCert(data.Certifications);
                setProject(data.Project);
                setLang(data.Languages);
                setHobbies(data.Hobbies);

            }
            catch(error)
            {
                console.log(error);
            }
        }
        fetchData();
    },[]);

    return(
        <div className="page">
        <div className="center">
            <div className="intro">
                <h1 id="name">{Name}</h1>
                <div className="info">
                <h4 id="Address">{Address}</h4>
                <h4>|</h4>
                <h4 id="Number">{Phone}</h4>
                <h4>|</h4>
                <h4 id="email">{Email}</h4>
                </div>
            </div>
            <hr/>
            <div className="summary">
                <h2>
                    Summary:
                </h2>
                <h4 id="summary">
                    {Summary}
                </h4>
            </div>
            <hr/>
            <div className="Education">
                <h2>
                    Education:
                </h2>
            {Edu.map((element)=>{return(
                <>
                <h3>
                {element.Degree}&nbsp; 
                </h3>
                <h3 id='two'>
                    at {element.Name}
                </h3>
                <h5>
                {element.StartDate} - {element.EndDate}
                </h5>
                <h4>
                Cumulative GPA: {element.GPA}
                </h4>
                </>);
            })}
            </div>
            <hr/>
            <div className="work">
                <h2>
                    Work Experience:
                </h2>
            {work.map((element)=>{return(
                <>
                <h3>
                {element.Position}&nbsp; 
                </h3>
                <h3 id='two'>
                    at {element.Name}
                </h3>
                <h5>
                {element.StartDate} - {element.EndDate}
                </h5>
                <h4>
                {element.Description}
                </h4>
                </>);
            })}
            </div>
            <hr/>
            <div className="Projects">
                <h2>
                    Projects:
                </h2>
                {Proj.map((element)=>{return(
                <>
                <h3>
                {element.Name}&nbsp; 
                </h3>
                <h5>
                {element.Award}
                </h5>
                <h4>
                {element.Description}
                </h4>
                </>);
            })}
            </div>
            </div>
            <div class="side">
            <div className="soft">
                <h2>
                    Soft Skills:
                </h2>
                {Soft.map((element)=>{return(
                    <>
                    <h4 className='bullet'>
                    &#x2022; {element}
                    </h4>
                    </>);
                })}
            </div>
            <hr/>
            <div className="technical">
                <h2>
                    Tech Skills:
                </h2>
                {Tech.map((element)=>{return(
                    <>
                    <h4 className='bullet'>
                    &#x2022; {element}
                    </h4>
                    </>);
                })}
            </div>
            <hr/>
            <div className="Languages">
                <h2>
                    Tech Skills:
                </h2>
                {Lang.map((element)=>{return(
                    <>
                    <h4 className='bullet'>
                    &#x2022; {element}
                    </h4>
                    </>);
                })}
            </div>
            <hr/>
            <div className="Certificates">
                <h2>
                    Certificates:
                </h2>
                {Cert.map((element)=>{return(
                    <>
                    <h4 className='bullet'>
                    &#x2022; {element}
                    </h4>
                    </>);
                })}
            </div>
            <hr/>
            <div className="Hobbies">
                <h2>
                    Hobbies:
                </h2>
                {Hobbies.map((element)=>{return(
                    <>
                    <h4 className='bullet'>
                    &#x2022; {element}
                    </h4>
                    </>);
                })}
            </div>
            <hr/>
            </div>
        </div>
    );
}

function PrintPdf() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
     content: () => componentRef.current,
     documentTitle: 'Resume',
     onAfterPrint: () => console.log('Printed PDF successfully!'),
    });
    return (
        <>
         <div
          className="pass-title"
          ref={componentRef}
          style={{ width: '100%', height: window.innerHeight }}
         >
         {BuiltResume()}
         </div>
         <br/>
         <button id="Print" onClick={handlePrint}>Print or Download PDF</button>
         </>);
}


export default PrintPdf;