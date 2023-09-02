





import "../Buttons/Buttons.css"
import axios from 'axios'


let Buttons = ({ section, setSection, part, setpart }) => {
    async function submit(event) {
  console.log("done");
        event.preventDefault();
        axios({
            method: "post",
            url:"http://localhost:8080/Cv/create",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
           data:part
        }).then(res => console.log(res.data)).catch(err => console.log(err));


    }
    return (
        <div className="Buttons" align="center">
            <button className="btn" disabled={section === 0} onClick={() => { setSection((section) => section - 1) }}>Back</button>
            <button className="btn" onClick={(event) => {
                if (section === 8) { alert('Cv submited successfully'); submit(event) } else { setSection((section) => section + 1); console.log(part) }
            }}>{section == 8 ? "Submit" : "Next"}</button>
        </div>
    )

}
export default Buttons;