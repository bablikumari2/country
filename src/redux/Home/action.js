import axios from 'axios' ;

export const HOME_LOADING = "HOME_LOADING" ;
export const HOME_SUCCESS = "HOME_SUCCESS" ;
export const HOME_FAILURE = "HOME_FAILURE" ;

export const home_loading = () => ({
    type: HOME_LOADING
});

export const home_success = (payload) => ({
    type: HOME_SUCCESS,
    payload
});

export const home_failure = () => ({
    type: HOME_FAILURE
});

export const home = () => (dispatch) => {
    dispatch(home_loading()) ;
    axios.get('http://localhost:8081/city')
    .then((res) => dispatch(home_success(res))) 
    .catch((err) => dispatch(home_failure())) ;
}

