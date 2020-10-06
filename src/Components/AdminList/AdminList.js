import React from 'react';
import { useHistory } from 'react-router-dom';


const AdminList = (props) => {

    const history = useHistory();

    const {_id, name, email, date, eventName} = props.event;

    const handleDelete = () => {
        fetch(`https://young-beyond-69689.herokuapp.com/delete/${_id}`, { method: 'DELETE' })
        .then(res => res.json())
        .then(result => {
            history.go(0);
        })
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{date}</td>
            <td>{eventName}</td>
            <td><button className="logout-btn" onClick={handleDelete}></button></td>
        </tr>
    );
};

export default AdminList;