import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

// Import the application store
import store from './store'

// Import All Routes
import Routes from './routes'

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<div className="container">
					<Routes />
				</div>
			</Router>
		</Provider>
	)
}

export default App
