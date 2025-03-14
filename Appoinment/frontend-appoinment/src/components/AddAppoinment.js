import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../styles/AddAppoinment.css'

export default function AddAppoinment() {
    let navigate = useNavigate();

    const [appoinmentno, setAppoinmentNo] = useState("");
    const [fullname, setFullName] = useState();
    const [email, setEmail] = useState("");
    const [bloodType, setBloodType] = useState("");
    const [date, setDate] = useState("");
    const [condition, setCondition] = useState();
    
    async function addAppoinment(e) {
        e.preventDefault();

        const newAppoinment = {
            appoinmentno,
            fullname,
            email,
            bloodType,
            date,
            condition
        }

        await axios.post("http://localhost:5000/appoinments",newAppoinment)
        .then(() => {
            alert("Appoinment Added Successfully");
            navigate('/appoinments');
        })
        .catch(err => {
            alert(err);
        })
    }

    return (
        <div className='container'>
            <br></br>
            <form onSubmit={addAppoinment} className="my-form">
                <div className="mb-3">
                    <label forHtml="appoinmentno" className="form-label">Appoinment No</label>
                    <input type="number" className="form-control" id="appoinmentno" placeholder="Enter Appoinment No" value={appoinmentno} onChange={(e) => {setAppoinmentNo(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label forHtml="fullname" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fullname" placeholder="Enter Name" value={fullname} onChange={(e) => {setFullName(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label forHtml="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label forHtml="bloodType" className="form-label">Blood Type</label>
                    <input type="text" className="form-control" id="bloodType" value={bloodType} onChange={(e) => {setBloodType(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label forHtml="date" className="form-label">Date</label>
                    <input type="date" className="form-control" id="date" value={date} onChange={(e) => {setDate(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label forHtml="condition" className="form-label">Condition</label>
                    <textarea type="text" className="form-control" id="condition" placeholder="Enter Condition" value={condition} onChange={(e) => {setCondition(e.target.value)}}/>
                </div>
                <button type="submit" >ADD</button>
            </form>
        </div>
    )
}