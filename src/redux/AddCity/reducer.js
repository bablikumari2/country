import {AddCity_LOADING , AddCity_SUCCESS ,AddCity_FAILURE} from "./action" ;

const initState = {
    loading : false ,
    addCity : false ,
    error : false ,
}

export const  cityReducer = (store= initState , {type}) => {
    switch (type){
      case AddCity_LOADING:
          return{
              ...store,
              loading:true,
          };

      case AddCity_SUCCESS:
          return{
              ...store,
              loading:false,
              addCity:true
          }
    
       case AddCity_FAILURE:
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