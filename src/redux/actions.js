import { ADD_COUNTRY,GET_COUNTRY, EDIT_COUNTRY, DELETE_COUNTRY } from "./actionTypes"


export const addCountry = (data)=>({
    type :ADD_COUNTRY,
    playload:data
})
export const getCountry = (data)=>({
    type :GET_COUNTRY,
    playload:data
})
export const editCountry = (data)=>({
    type :EDIT_COUNTRY,
    playload:data
})
export const deleteCountry = (data)=>({
    type :DELETE_COUNTRY,
    playload:data
})


