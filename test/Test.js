import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Test() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <p>hi</p>
            {data.map((d) => (
                <p key={d.id}>{d.dateTime}</p>
            ))}
        </div>
    );
}

export default Test;
