import { ADD_COUNTRY,GET_COUNTRY, EDIT_COUNTRY, DELETE_COUNTRY } from "./actionTypes"

const init = {country:[]};
export const reducer = (state=init,{type,payload})=>{
    switch(type){
        case ADD_COUNTRY:
        return{
            ...state,
            country:[...state.country,payload]
        };
        case GET_COUNTRY:
            return{
                ...state,
               country:payload
            };
            case EDIT_COUNTRY:
            return{
                ...state,
               country:payload
            };
            case DELETE_COUNTRY:
            return{
                ...state,
               country:payload
            };

default:return state;
    }
}