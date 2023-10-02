import { useState } from "react";
import "./App.css";
import { gql, request } from "graphql-request";

function App() {
    const [countries, setCountries] = useState([]);

    const query = gql`
        {
            countries {
                currency
                code
                name
                emoji
            }
        }
    `;

    const getCountries = async () => {
        try {
            const countriesData = await request(
                "https://countries.trevorblades.com/graphql",
                query
            );
            setCountries(countriesData.countries)
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <button onClick={getCountries}>Get countries</button>
            {
                countries.map(country=> {
                    return (
                        <div key={country.code}>In {country.name}{country.emoji} the currency is {country.currency}</div>
                    )
                })
            }
        </>
    );
}

export default App;
