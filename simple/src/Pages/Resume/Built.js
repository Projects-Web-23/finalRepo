import React, { useState, useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './BuiltResume.css';
import axios from 'axios'

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

const BuiltResume = () => {
    const [Name, setName] = useState();
    const [Email, setEmail] = useState(" ");
    const [Address, setAddress] = useState(" ");
    const [Phone, setPhone] = useState(" ");
    const [Summary, setSummary] = useState(" ");

    const [work, setWork] = useState([]);
    const [Skills, setSkills] = useState([]);
    const [Cert, setCert] = useState([]);
    const [Proj, setProject] = useState([]);
    const [Lang, setLang] = useState([]);
    const [Hobbies, setHobbies] = useState([]);
    const [Honors, setHonors] = useState([]);
    const [Links, setLinks] = useState([]);

    const [Degreesearned, setDegreesearned] = useState('');
    const [educationalinstitutions, seteducationalinstitutions] = useState('');
    const [fieldofstudy, setfieldofstudy] = useState('');
    const [Graduationdates, setGraduationdates] = useState('');

    const fetchData = async () => {
        try {
            const response = await axios({
                method: "get",
                url: "http://localhost:8080/Cv/",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },

            })
            console.log(response.data);
            let ob = response.data;


            setName(ob.FullName);
            setEmail(ob.Email);
            setAddress(ob.Address);
            setPhone(ob.Phone);
            setLinks(ob.Links);
            setSummary(ob.Summary);
            setWork(ob.WorkExperience);
            setSkills(ob.Skills);
            setCert(ob.Certificates);
            setProject(ob.Projects);
            setLang(ob.Languages);
            setHobbies(ob.Hobbies);
            setHonors(ob.honors);
            setDegreesearned(ob.Degreesearned);
            seteducationalinstitutions(ob.educationalinstitutions);
            setfieldofstudy(ob.fieldofstudy);
            setGraduationdates(ob.Graduationdates);


        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData();
    });

    return (
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
                <hr />
                <div className="summary">
                    <h2>
                        Summary:
                    </h2>
                    <h4 id="summary">
                        {Summary}
                    </h4>
                </div>
                <hr />
                <div className="Education">
                    <h2>
                        Education:
                    </h2>

                    <>
                        <h3>
                            {Degreesearned} of {fieldofstudy}&nbsp;
                        </h3>
                        <h3 id='two'>
                            at {educationalinstitutions}
                        </h3>
                        <h5>
                            Graduation: {Graduationdates}
                        </h5>
                        </>
                </div>
                <hr />

                <div className="work">
                    <h2>
                        Work Experience:
                    </h2>
                    {work.map((element) => {
                        return (
                            <>
                                <h3>
                                    {element.title}&nbsp;
                                </h3>
                                <h3 id='two'>
                                    at {element.company}
                                </h3>
                                <h5>
                                    {element.Start} - {element.End}
                                </h5>
                                <h4>
                                    {element.briefdescription}
                                </h4>
                            </>);
                    })}
                </div>
                <hr />
                <div className="Projects">
                    <h2>
                        Projects:
                    </h2>
                    {Proj.map((element) => {
                        return (
                            <>
                                <h3>
                                    {element.title}&nbsp;
                                </h3>
                                <h4 style={{ display: 'inline' }}>
                                    from&nbsp;
                                </h4>
                                <h4 id="two" style={{ display: 'inline', fontWeight: 700 }}>
                                    {element.start_date}&nbsp;
                                </h4>
                                <h4 style={{ display: 'inline' }}>
                                    to&nbsp;
                                </h4>
                                <h4 id="two" style={{ display: 'inline', fontWeight: 700 }}>
                                    {element.end_date}
                                </h4>
                                <h4>
                                    {element.briefdescription}
                                </h4>
                            </>);
                    })}
                </div>
            </div>
           <div class="side">
           <div className="Links">
                    <h2>
                        Links:
                    </h2>
                    {Links.map((element) => {
                        return (
                            <>
                                <h4 >
                                    &#x2022; {element.title}
                                </h4>
                                <h5 className='bullet'>
                                    &#x2022; {element.url}
                                </h5>
                            </>);
                    })}
                </div>
                <hr />
                <div className="Skills">
                    <h2>
                        Skills:
                    </h2>
                    {Skills.map((element) => {
                        return (
                            <>
                                <h4 className='bullet'>
                                    &#x2022; {element}
                                </h4>
                            </>);
                    })}
                </div>
                <hr />
                <div className="Languages">
                    <h2>
                        Languages:
                    </h2>
                    {Lang.map((element) => {
                        return (
                            <>
                                <h4 className='bullet'>
                                    &#x2022; {element}
                                </h4>
                            </>);
                    })}
                </div>
                <hr />
                <div className="Certificates">
                    <h2>
                        Certificates:
                    </h2>
                    {Cert.map((element) => {
                        return (
                            <>
                                <a href={element.link}>&#x2022; {element.title}</a>
                                <h4 id="two" style={{ display: 'inline' }}>
                                    - {element.cert_date}
                                </h4>
                                <h4>
                                    &nbsp; {element.description} <br />
                                </h4>
                            </>);
                    })}
                </div>
                <hr />
                <div className="Certificates">
                    <h2>
                        Honors:
                    </h2>
                    {Honors.map((element) => {
                        return (
                            <>
                                <h5 href={element.link}>&#x2022; {element.header}</h5>
                                <h4>
                                    &nbsp; {element.organization} <br />
                                </h4>
                            </>);
                    })}
                </div>
                <hr />
                <div className="Hobbies">
                    <h2>
                        Hobbies:
                    </h2>
                    {Hobbies.map((element) => {
                        return (
                            <>
                                <h4 className='bullet'>
                                    &#x2022; {element}
                                </h4>
                            </>);
                    })}
                </div>
                <hr />
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
            <br />
            <button id="Print" onClick={handlePrint}>Print or Download PDF</button>
        </>);
}


export default PrintPdf;
