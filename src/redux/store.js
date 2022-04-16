import { applyMiddleware, combineReducers, createStore } from 'redux'
import { cityReducer } from './AddCity/reducer'
import { countryReducer } from './AddCountry/reducer'
import thunk from 'redux-thunk'
import { homeReducer } from './Home/reducer'


export const rootReducer = combineReducers({
    city : cityReducer ,
    country : countryReducer ,
    home : homeReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk)) ;