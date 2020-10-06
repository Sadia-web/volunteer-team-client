import React from 'react';
import './Event.css';

const Event = (props) => {
    return (

        <div className="card event-block" style={{width: '20rem', display: 'inline-block'}}>
            <img className="card-img-top" src={props.events.img} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.events.name}</h5>
            </div>
            <div className="card-footer">
                <a href={`/RegisterVolunteer/${props.events._id}`} className="btn btn-primary">Register</a>
            </div>
        </div>
        
        
    );
};

export default Event;