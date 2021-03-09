import React, { useEffect, useState } from 'react';
import banner from '../../images/Rectangle 28.png'
import League from '../League/League';
import './Home.css'

const Home = () => {
	const [leagues, setLeagues] = useState([]);
	useEffect(() => {
		const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
		fetch(url)
			.then(res => res.json())
			.then(data => setLeagues(data.leagues))
	}, []);
	// const first9 = leagues.slice(1,10);
	return (
		<div>
			<div className="banner-container">

			</div>
			<div className="league-container">
				{
					leagues.map(league => <League key={league.idLeague} league={league}></League> )
				}
			</div>
		</div>
	);
};

export default Home;
