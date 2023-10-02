import { useState } from "react";
import axios from "axios";
// @ts-check

import DataDisplay from "../DataDisplay";

const FrontPage = () => {
    const dataUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
    const [data, setData] = useState([]);

    const getData = async () => {
        axios.get(dataUrl).then((res) => {
            const state = [res.data.url, res.data.title, res.data.explanation];
            console.log(state)
            setData(state);
        });
    };

    return (
        <>
            <button onClick={getData}>Display image</button>
            <DataDisplay url={data[0]} title={data[1]} explanation={data[2]}/>
        </>
    );
};

export default FrontPage;
