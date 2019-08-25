import { combineReducers } from 'redux'
import tvShowReducer from './TvShows'

export default combineReducers({
	tvShows: tvShowReducer
})
