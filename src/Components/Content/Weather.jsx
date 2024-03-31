import { useState } from "react"
const API_KEY = process.env.REACT_APP_API_KEY;
const cities = ["Paris", "Ha Noi", "New York", "Tokyo"]

export default function Weather() {
    const [data, setData] = useState("")
    const fetchData = async () => {
        // const respone = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
        const respone = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Paris`)

        const jsonData = await respone.json()
        setData(jsonData)
    }
    console.log(data)
    return <>
        <h1>Fetching data</h1>
        <button className="button" onClick={fetchData}>Fetch data</button>
        {data && <div><img className="" src="" />
            <p className="city">City: {data.location.name}</p>
            <p className="country">Country: {data.location.country}</p>
            <p className="weather">Weather: {data.current.condition.text}</p>
            <img src={`${data.current.condition.icon}`} />
        </div>}

    </>
} 