import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const Foods = (props) => {
    const [data, setData] = useState([])
    const da = props.input;

    useEffect(() => {
        const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${da}`;
        fetch(URL)
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [da])

    return (
        <div>
            <Food d ={ data}></Food>
        </div>
    );
};

export default Foods;