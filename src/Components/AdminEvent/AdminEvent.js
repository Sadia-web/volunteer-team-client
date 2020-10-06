import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AdminEventList from '../AdminEventList/AdminEventList';

const AdminEvent = () => {
    const [registeredEvent, setRegisteredEvent] = useState([]);

    const history = useHistory();

    useEffect( () => {
        fetch('/registeredEvent')
        .then(res => res.json())
        .then(data => setRegisteredEvent(data))
    }, [])

    return (
        <div className="custom-container">
            <br/>
            <h3 className="text-center">Volunteer register list</h3><br/>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email Id</th>
                        <th scope="col">Registration Date</th>
                        <th scope="col">Event Name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                
                {
                    registeredEvent.map(e => <AdminEventList event={e} key={e._id}/>) 
                }
                
            </table>
            <button className="btn btn-primary" onClick={() => history.replace('/adminAddEvent')}>Add Event</button>
            
        </div>
    );
};


export default AdminEvent;