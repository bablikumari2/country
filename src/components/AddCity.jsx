import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios' ;
import "../App.css"
import { addcity } from "../Redux/AddCity/action";
import { Spinner } from 'react-bootstrap';


export const AddCity = () => { 
   const [countryData , setCountryData] = useState([]) ;
   const [city , setCity] = useState("") ;
   const [population , setpopulation] = useState("") ;
   const [countryName , setcountryName] = useState("") ;
   const dispatch = useDispatch()
    
   const handleSubmit = () => {
    const details = {
    city ,
    population,
    countryName,
    } 
    dispatch(addcity(details)) ;
   }

   useEffect(() => {
      axios.get('http://localhost:8081/country').then(res => {
        setCountryData(res.data) ;
      }) 
   },[]) ;
  
   const {loading , addCity , error} = useSelector((state) => state.city) ;
   if(loading){
    return(
       <div className='spinner'>
       <link
           rel="stylesheet"
           href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
           integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
           crossorigin="anonymous"
       />
           Please Wait  
   {<Spinner animation="border" role="status"></Spinner>}    
   </div> 
    )
 }
 
    return(
        <div>
            <input
            type="text"
            value={city}
            placeholder="Enter City Name"
            onChange={(e) => setCity(e.target.value)}
            />
            <br/>
            <input
            type="number"
            value={population}
            placeholder="Enter Population"
            onChange={(e) => setpopulation(e.target.value)}
            />
            <br/>
            <div className="countryName">
            {countryData.map((e,id) => {
                return(
                    <div className="countrys">{e.name}</div>
                )
            })}
            </div>
            <br/>
            <label>Enter Country Name As per above</label>
            <input
            type="text"
            value={countryName}
            placeholder="Enter CountryName as per about Names"
            onChange={(e) => setcountryName(e.target.value)}
            />
            <br/>
            <button
            onClick={handleSubmit}
            >Submit</button>
        </div>
    )
}