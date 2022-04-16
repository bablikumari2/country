import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react"
import { home } from '../Redux/Home/action';
import { Link } from "react-router-dom"


export const Home = () => { 
    const dispatch = useDispatch() ;
    // const [data , usedata] = useState([]) ;

    useEffect(() => {
        dispatch(home()) ;
     },[]) ;
    
   const {loading , homedata , error} = useSelector((state) => state.home) ;
    console.log(homedata)
    return(
        <div>
            <h1>Welcome!</h1>
           <Link to="/add-country">Add Country</Link>
           <Link to="/add-city">Add City</Link>
            <table>
                <thead>
                    <th>Country</th>
                    <th>City</th>
                    <th>Population</th>

                </thead>
            </table>
        </div>
    )
}