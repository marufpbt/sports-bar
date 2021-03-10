import React, { useEffect, useState } from 'react';
import banner from '../../images/header.jpg'
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
				<section id="home-section" style={{
				backgroundImage: `url(${banner})`,
				minHeight:'100vh'
			}}>
				<div class="dark-overlay" style={{minHeight: '100vh'}}>
					<div class="home-inner">
						<div class="container">
							<div class="row">
								<div class="col-12 banner-logo" style={{ height: '100vh'}}>
										<h1>Sports Bar</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="league-container">
				{
					leagues.map(league => <League key={league.idLeague} league={league}></League> )
				}
			</div>
		</div>
	);
};

export default Home;
