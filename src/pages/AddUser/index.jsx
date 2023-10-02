import { useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const AddUser = () => {
    const [name, setName] = useState("")
    const navigate = useNavigate()

    const createNewUser = async () => {
        const res = await axios.post("https://kv63mr-3000.csb.app/users",  {
            name
        })
        if(res.status === 200) navigate("/")
        // console.log(res.data)
    }

    return (
        <>
            <label htmlFor="name">New user:</label>
            <input type="text" id="name" onChange={e => setName(e.target.value)}/>
            <button onClick={createNewUser}>Add</button>
        </>
    )
}

export default AddUser