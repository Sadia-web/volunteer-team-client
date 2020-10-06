  
import React, { useEffect, useState } from 'react';

import Event from '../Event/Event';
import './Home.css';

const Home = () => {

    const [eventData, setEventData] = useState([])

    useEffect(() => {
        fetch('https://young-beyond-69689.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setEventData(data))
    }, [])  

    return (
        <div className="custom-container"><br/>
            <h1 className="text-center">I grow by helping people in need.</h1><br/>
            {
                eventData.map(event => <Event key={event._id} event={event}></Event>)
            }
        </div>
    );
};

export default Home;