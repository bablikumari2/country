import { HOME_LOADING, HOME_SUCCESS ,HOME_FAILURE } from "./action";

const initState = {
    loading : false ,
    homedata : [] ,
    error:false,
}

export const homeReducer = (store= initState , {type,payload}) => {
    switch(type){
        case HOME_LOADING:
            return{
                ...store,
                loading:true,
            }

        case HOME_SUCCESS:
            return{
                ...store,
                loading:false,
                homedata:payload,
            }

        case HOME_FAILURE:
            return{
                ...store,
                loading:false,
                error:true,
            }

        default:
            return{
                store ,
            }
    }
}