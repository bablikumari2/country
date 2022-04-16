export const AddCountry_LOADING = "AddCountry_LOADING" ;
export const AddCountry_SUCCESS = "AddCountry_SUCCESS" ;
export const AddCountry_FAILURE = "AddCountry_FAILURE" ;

export const addcountry_loading = () => ({
    type: AddCountry_LOADING
});

export const addcountry_success = () => ({
    type: AddCountry_SUCCESS
});

export const addcountry_failure = () => ({
    type: AddCountry_FAILURE
});

export const addcountry = (countryName) => (dispatch) => {
    dispatch(addcountry_loading()) ;
    fetch('http://localhost:8081/country',{
        method:"POST" ,
        body: JSON.stringify(countryName) ,
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(() => dispatch(addcountry_success())) 
    .catch(() => dispatch(addcountry_failure())) ;
}

