import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactHtmlParser from 'react-html-parser'

// Import the application store actions
import { fetchTvShow } from '../../store/actions/TvShows'

class Detail extends Component {
	constructor(props) {
		super(props)
		props.loadTvShow(props.id)
	}

	render() {
		const { props } = this
		const item = props.tvShow
		return (
			<div className="tv-shows-detail">
				<div className="row">
					<div className="col-md-3">
						<img src={item.image && item.image.original} className="image-responsive" alt={item.name} />
					</div>
					<div className="col-md-9">
						<div className="tv-shows-detail__content">
							<div className="tv-shows-detail__title">{item.name}</div>
							{ReactHtmlParser(item.summary)}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	id: ownProps.match.params.id,
	tvShow: state.tvShows.item
})

const mapDispatchToProps = dispatch => ({
	loadTvShow: id => dispatch(fetchTvShow(id))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Detail)
