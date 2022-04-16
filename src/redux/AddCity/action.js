export const AddCity_LOADING = "AddCity_LOADING" ;
export const AddCity_SUCCESS = "AddCity_SUCCESS" ;
export const AddCity_FAILURE = "AddCity_FAILURE" ;

export const addcity_loading = () => ({
    type: AddCity_LOADING
});

export const addcity_success = () => ({
    type: AddCity_SUCCESS
});

export const addcity_failure = () => ({
    type: AddCity_FAILURE
});

export const addcity = (details) => (dispatch) => {
    dispatch(addcity_loading()) ;
    fetch('http://localhost:8081/city',{
        method:"POST" ,
        body: JSON.stringify(details) ,
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(() => dispatch(addcity_success())) 
    .catch(() => dispatch(addcity_failure())) ;
}

