import { useState } from "react";
import Buttons from '../Buttons/Buttons'
import './Certification.css'

const Certificate = ({ title, part, setpart, section, setSection }) => {

    const [certificates, setCertificates] = useState([]);

    const [add, setadd] = useState(false);//button
    const [certTitle, setCertTitle] = useState('');//title
    const [certDescription, setCertDescription] = useState(''); //date
    const [Cdate, setCdate] = useState('');
    const [certLink, setCertLink] = useState('');//collaboraters




    const addCert = () => {
        setadd(false);
        const ex = {
            title: certTitle,
            cert_date: Cdate,
            link: certLink,
            description: certDescription

        };
        setCertificates([...certificates, ex]);
        setpart({ ...part, Certificates: [...certificates, ex] });


    }
    const deleteone = (ind) => {

        const arr = certificates.filter((ele, i) => {
            if (ind !== i) {
                return ele;

            }
        });
        setCertificates(arr);
    }


    return (
        <div className="workmain">
            <div className="sqaure" >
                <h1 className="workheader"  >{title}</h1>
                <div className="left" >
                    <form className="formjob">
                        {certificates.map((ele, ind) => {
                            return (

                                <div className="cardwork">
                                    <div className="certhead">
                                        {ele.title}

                                    </div>
                                    <div className="certlink">
                                        {ele.link}

                                    </div>
                                    <div className="summery">
                                        {ele.description}

                                    </div>

                                    <div className="jobdate">
                                        {ele.cert_date}

                                    </div>
                                    <button className="deletecert" onClick={() => { deleteone(ind) }}>X</button>



                                </div>

                            )
                        })}

                        <div className="outlink">
                            <div className="link" >
                                <h3>Add a Certificate</h3>

                                <div className="addwork" onClick={() => setadd(true)}>+</div>

                            </div>
                            {(add && (
                                <div className="new-form " >
                                    <div className="smallform">

                                        <div className="card">
                                            <label className="name" > Certificate/License Title  </label>
                                            <input className="feild" type="text" placeholder="please enter Certificate title " onChange={(token) => setCertTitle(token.target.value)} />
                                        </div>


                                        <div className="card">
                                            <label className="name" > Certification Date  </label>
                                            <input className="feild" type="date" placeholder="please enter Certificate date " onChange={(token) => setCdate(token.target.value)} />
                                        </div>
                                        <div className="card">
                                            <label className="name" > Link to Certificate/License  </label>
                                            <input className="feild" type="text" placeholder="please attach a link to certificate" onChange={(token) => setCertLink(token.target.value)} />
                                        </div>

                                    </div>





                                    <label className="namework" > Certificate/License details</label>
                                    <textarea className="textarea" type="text" placeholder="please enter your certificate details " onChange={(token) => setCertDescription(token.target.value)} />

                                    <div className="buttons">
                                        <div className="cancel" onClick={() => setadd(false)}>cancel</div>
                                        <div className="save" onClick={addCert}>save</div>
                                    </div>
                                </div>
                            )

                            )}
                        </div>


                        <Buttons section={section} setSection={setSection} part={part} setpart={setpart} />
                    </form>
                </div>
            </div>
            {/* <img src={work} height="300" width="400"></img> */}
        </div>
    )
}

export default Certificate;