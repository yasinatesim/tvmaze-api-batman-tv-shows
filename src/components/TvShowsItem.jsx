import React from 'react'
import { Link } from 'react-router-dom'

const TvShowsItem = props => {
	const { item } = props
	return (
		<div className="col-md-3">
			<Link to={`/${item.show.id}`}>
				<div className="tv-shows__item">
					<img
						className="image-responsive tv-shows__item-image"
						src={item.show.image.medium}
						alt={item.show.image.name}
					/>
					<div className="tv-shows__item-content">
						<span className="tv-shows__item-title">{item.show.name}</span>
						<div className="row">
							<div className="col-6">
								<div className="tv-shows__item-languge">
									<span className="icon-language" />
									<span style={{ display: 'inline-block', marginLeft: '5px' }}>{item.show.language}</span>
								</div>
							</div>
							<div className="col-6">
								<div className="tv-shows__item-rating">
									<span className="icon-rating" />
									<span style={{ display: 'inline-block', marginLeft: '5px' }}>{item.show.rating.average}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default TvShowsItem
