import { FETCH_TV_SHOWS, FETCH_TV_SHOW } from '../constants/Actions'

const initialState = {
	items: [],
	item: {}
}

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_TV_SHOWS:
			return {
				...state,
				items: action.payload
			}
		case FETCH_TV_SHOW:
			return {
				...state,
				item: action.payload
			}
		default:
			return state
	}
}
