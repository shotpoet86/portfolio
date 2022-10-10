import {useState, useEffect} from 'react';

function Profile(userName) {
	const [loading, setLoading] = useState(false);
	const [profile, setProfile] = useState({});

	useEffect(() => {
		async function fetchData() {
			const profile = await fetch('https://api.github.com/users/${userName}');
			const result = await profile.json();
			if (result) {
				setProfile(result);
				setLoading(false);
			}
		}

		return fetchData();
	}, [userName]);

	return (<div><h2>About Me</h2>
		{loading ? (<span>Loading...</span>) : (<ul>
			<li><span>
				avatar_url:
			</span>
				{profile.avatar.url}</li>
		</ul>)}
	</div>);

}

export default Profile;