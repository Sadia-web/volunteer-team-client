import React, { useEffect, useState } from 'react';
import RegisteredNew from '../RegisteredNew/RegisteredNew';

const RegisteredEvent = () => {

    const [registeredEvent, setRegisteredEvent] = useState([]);

    useEffect( () => {
        fetch('https://young-beyond-69689.herokuapp.com/registeredEvent')
        .then(res => res.json())
        .then(data => setRegisteredEvent(data))
    }, [])

    return (
        <div className="custom-container">
            {
                registeredEvent.map(events => <RegisteredNew event={events} key={events.id}/>)
            }
        </div>
    );
};

export default RegisteredEvent;