import React from 'react';
import { useHistory } from 'react-router-dom';
const RegisteredNew = (props) => {

    const {eventName, eventImg, email, _id} = props.events;

    const signedInEmail = JSON.parse(localStorage.getItem("email")); 

    const history = useHistory();

    const handleDelete = () => {
        fetch(`https://young-beyond-69689.herokuapp.com/delete/${_id}`, { method: 'DELETE' })
        .then(res => res.json())
        .then(result => {
            history.go(0);
        })
    }

    return (
        
        <div style={{display: 'inline-block'}}>
            { email === signedInEmail && 
                <div className="card event-block" style={{width: '20rem'}}>
                    <img className="card-img-top" src={eventImg} alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">{eventName}</h5>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-danger" onClick={handleDelete}>Cancel</button>
                    </div>
                </div>
            }
        </div>
        
    );
};

export default RegisteredNew;