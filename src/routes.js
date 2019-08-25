import React from 'react'
import { Route } from 'react-router-dom'

// Import components
import Home from './pages/TvShows'
import Detail from './pages/TvShows/Detail'

const Routes = () => {
	return (
		<div>
			<Route path="/" exact component={Home} />
			<Route path="/:id" component={Detail} />
		</div>
	)
}

export default Routes
