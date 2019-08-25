import { FETCH_TV_SHOWS, FETCH_TV_SHOW } from '../constants/Actions'

export const fetchTvShows = () => dispatch => {
	fetch('http://api.tvmaze.com/search/shows?q=batman')
		.then(res => res.json())
		.then(tvShows =>
			dispatch({
				type: FETCH_TV_SHOWS,
				payload: tvShows
			})
		)
}

export const fetchTvShow = id => dispatch => {
	fetch(`http://api.tvmaze.com/shows/${id}`)
		.then(res => res.json())
		.then(item =>
			dispatch({
				type: FETCH_TV_SHOW,
				payload: item
			})
		)
}
