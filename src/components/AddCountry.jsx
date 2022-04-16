import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addcountry } from '../Redux/AddCountry/action';
import { Spinner } from 'react-bootstrap';

export const AddCountry = () => { 
  const [name , setname] = useState("") ;
  const dispatch = useDispatch()
  
  const handleSubmit = () => {
      const countryName = {
      name ,
      } 
      dispatch(addcountry(countryName)) ;
  }

  const {loading , addCountry , error} = useSelector((state) => state.country) ;
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
           placeholder='country name'
           value={name}
           onChange={(e) =>  setname(e.target.value)}
           />
           <br/>
           <button
           onClick={handleSubmit}
           >Submit</button>
        </div>
    )
}