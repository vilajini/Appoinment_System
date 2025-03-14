import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/AllAppoinments.css'
export default function AllAppoinments() {
    const[appoinments, setAppoinments] = useState([]);
    let navigate = useNavigate();

    const getData = async () => {
        await axios.get("http://localhost:5000/appoinments")
        .then((res) => {            
            setAppoinments(res.data)
        })
        .catch((err) => {
            alert(err.message);
        })
    }

    const onDelete = async (id) => {
        await axios.delete(`http://localhost:5000/appoinments/${id}`)
        .then(() => {
            alert("Appoinment Deleted Successfully")
            getData();
        })
        .catch((err) => {
            alert(err.message);
        })
    }

    useEffect(() => {
        getData();
    }, [])

    if(!appoinments)
    return alert("No Appoinments")

    const onUpdate = (data) => {
        localStorage.setItem('id', data._id);
        localStorage.setItem('appoinmentno', data.appoinmentno);
        localStorage.setItem('fullname', data.fullname);
        localStorage.setItem('email', data.email);
        localStorage.setItem('bloodType', data.bloodType);
        localStorage.setItem('date', data.date);
        localStorage.setItem('condition', data.condition);

        navigate('/update-appoinment');
    }
    const generateReport = () => {
        let reportContent = "Appointments Report\n\n";
        appoinments.forEach((appointment) => {
            reportContent += `Appointment No: ${appointment.appoinmentno}\n`;
            reportContent += `Full Name: ${appointment.fullname}\n`;
            reportContent += `Email: ${appointment.email}\n`;
            reportContent += `Blood Type: ${appointment.bloodType}\n`;
            reportContent += `Date: ${new Date(appointment.date).toISOString().slice(0,10)}\n`;
            reportContent += `Condition: ${appointment.condition}\n\n`;
        });
        const reportBlob = new Blob([reportContent], { type: "text/plain" });
        const url = URL.createObjectURL(reportBlob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", "appointments-report.txt");
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    

  if (!appoinments) return alert('No Appointments');



    return(
        <div className="container">
            <h1 style={{textAlign:'center'}}>All Appoinments</h1>
            <div className="container">
            <button type='button' className="btn-report" onClick={() => generateReport()}>Generate Report</button>
            
                <table>
                    <thead>
                        <tr>
                            <th>Appoinment No</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Blood Type</th>
                            <th>Date</th>
                            <th>Condition</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appoinments.map(appoinment => (
                            <tr key={appoinment._id}>
                                <td>{appoinment.appoinmentno}</td>
                                <td>{appoinment.fullname}</td>
                                <td>{appoinment.email}</td>
                                <td>{appoinment.bloodType}</td>
                                <td>{new Date(appoinment.date).toISOString().slice(0,10)}</td>
                                <td>{appoinment.condition}</td>
                                <td>    
                                    <button type='button' className="btn-update" onClick={() => onUpdate(appoinment)}>Update</button>
                                    &nbsp;
                                    <button type='button' className="btn-delete" onClick={() => onDelete(appoinment._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )         
}
