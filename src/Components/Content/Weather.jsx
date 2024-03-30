import { useState } from "react"

export default function Weather() {
    const [data, setData] = useState("")
    const fetchData = async () => {
        // const respone = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
        const respone = await fetch(`https://api.weatherapi.com/v1/current.json?key=APIKEY&q=Paris`)

        const jsonData = await respone.json()
        setData(jsonData)
    }

    return <>
        <h1>Fetching data</h1>
        <button className="button" onClick={fetchData}>Fetch data</button>
        {data && <p>{JSON.stringify(data)}</p>}
    </>
}