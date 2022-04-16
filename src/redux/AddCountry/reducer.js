import {AddCountry_LOADING , AddCountry_SUCCESS ,AddCountry_FAILURE} from "./action" ;

const initState = {
    loading : false ,
    addCountry : false ,
    error : false ,
}

export const  countryReducer = (store= initState , {type}) => {
    switch (type){
      case AddCountry_LOADING:
          return{
              ...store,
              loading:true,
          };

      case AddCountry_SUCCESS:
          return{
              ...store,
              loading:false,
              addCountry:true
          }
    
       case AddCountry_FAILURE:
           return{
               ...store ,
               loading:false,
               error:true ,
           }
       
        default:
            return{
                store ,
            }

    }
}