import "./App.css";
import { gql, request } from "graphql-request";
import { useState } from "react";

function App() {
    const [countries, setCountries] = useState([]);

    const query = gql`
        {
            countries(filter: {code: {eq: "HR"}}) {
                code
                currency
                name
                emoji
                continent {
                    name
                }
            }
        }
    `;

    const getCountries = async () => {
        try {
            const countriesData = await request(
                "https://countries.trevorblades.com/graphql",
                query
            );
            console.log(countriesData);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <button onClick={getCountries}>Get countries</button>
        </>
    );
}

export default App;
