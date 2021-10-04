import {useState} from 'react';
import AppRouter from 'components/Router';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import firebase from 'fb';
function App() {
	const auth = getAuth();
	const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser);
	return <AppRouter isLoggedIn={isLoggedIn} />;
}

export default App;
