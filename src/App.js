import Header from './components/Header';
import Profile from './pages/Profile';
import './App.css';
import logo from './assets/logo.svg';

function App() {
	return (<div className="App">
		<Header logo={logo}/>
		<Profile userName="octocat"/>
	</div>);
}

export default App;
