import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {useState} from 'react';
import Auth from '../routes/Auth';
import Home from '../routes/Home';

export default function AppRouter() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<Router>
			<Switch>
				{isLoggedIn ? (
					<>
						<Route exact path='/'>
							<Home />
						</Route>
					</>
				) : (
					<Route>
						<Auth exact path='/' />
					</Route>
				)}
			</Switch>
		</Router>
	);
}
