import { useState } from "react";
import axios from "axios";
import DataDisplay from "../DataDisplay";

const FrontPage = () => {
    const dataUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
    const [data, setData] = useState([]);

    const getData = async () => {
        axios.get(dataUrl).then((res) => {
            const state = [res.data.url, res.data.title, res.data.explanation];
            setData(state);
        });
    };

    return (
        <>
            <button onClick={getData}>Display image</button>
            <p>{data}</p>
            <DataDisplay url={data.url} title={data.title} explanation={data.explanation}/>
        </>
    );
};

export default FrontPage;
