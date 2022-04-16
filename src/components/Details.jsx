import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



export const Details=()=>{
    const [data,setData] = useState([])
    useEffect(()=>{
        getData()
    },[])
    const {id} =useParams()
    const getData=()=>{
        fetch(`http://localhost:3002/country/${id}`)
        .then((d)=>d.json())
        .then((res)=>{
            setData(res);
            console.log(res)
        })
    };
    return(
        <div>
            <div id="info">
                <p id="title">
                <b>Title:</b>{DataTransfer.title}
                </p>
                <p id="des">
                    <b>City:</b>{data.description}
                </p>
                <p id="popp">
                    <b>Population</b>{data.population}
                </p>
            </div>
        </div>
    )
}