import React, { Component } from 'react'
import { connect } from 'react-redux'

// Import the application store actions
import { fetchTvShows } from '../../store/actions/TvShows'

// Import Child Components
import TvShowsItem from '../../components/TvShowsItem'

class Index extends Component {
	constructor(props) {
		super(props)

		props.fetchTvShows()
	}

	render() {
		const { props } = this
		return (
			<div>
				<h4 className="tv-shows__title">Batman TV Showları</h4>
				<div className="row">
					{props.tvShows.map(item => (
						<TvShowsItem key={item.show.id} item={item} />
					))}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	tvShows: state.tvShows.items
})

export default connect(
	mapStateToProps,
	{ fetchTvShows }
)(Index)
