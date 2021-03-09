import './ExploreDetail.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import maleImage from '../../images/male.png';
import femaleImage from '../../images/female.png';
import foundedIcon from '../../icons/found 1.png';
import flagIcon from '../../icons/flag (1) 1.png';
import footballIcon from '../../icons/football (1) 1.png';
import genderIcon from '../../icons/male-gender-sign 1.png';
import youtube from '../../icons/YouTube.png';
import twitter from '../../icons/Twitter.png';
import facebook from '../../icons/Facebook.png';
const ExploreDetail = () => {
	const { idLeague } = useParams();
	const [league, setLeague] = useState({});
	useEffect(() => {
		const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
		fetch(url)
			.then(res => res.json())
			.then(data => setLeague(data.leagues[0]))
	}, [idLeague]);
	const { strBanner, strLeague, strTwitter, strYoutube, strRSS, strCountry, strDescriptionEN, strDescriptionFR, intFormedYear, strGender } = league;
	let gender;
	if (strGender == "Male") {
		gender = <img src={maleImage} style={{ width: '100%' }} alt="" />;
	}
	else {
		gender = <img src={femaleImage} style={{ width: '100%' }} alt="" />;
	}
	return (
		<>
			<div style={{ textAlign: 'center' }}>
				<img src={strBanner} alt={strLeague} style={{ width: '100%' }} />
			</div>
			<div className="container mt-5">
				<div className="row league-wrapper">
					<div className="col-12 col-md-7">
						<div className="mt-5 controlWidth">
							<h3>{strLeague}</h3>
							<h6><img src={foundedIcon}  />Founded: {intFormedYear}</h6>
							<h6><img src={flagIcon}  />Country: {strCountry}</h6>
							<h6><img src={footballIcon}  />Sport Type: Football</h6>
							<h6><img src={genderIcon}  />Gender: {strGender}</h6>
						</div>
					</div>
					<div className="col-12 col-md-5">
						{gender}
					</div>
				</div>
				<div className="row mt-4">
					<div className="col description">
						{strDescriptionEN}
					</div>
				</div>
				<div className="row mt-4">
					<div className="col description">
						{strDescriptionFR}
					</div>
				</div>
				<div className="row my-4">
					<div className="col text-center social-meadia">
						<a href={strTwitter} target="_blank"><img src={twitter} alt="" /></a>
						<a href={strRSS} target="_blank"><img src={facebook} alt="" /></a>
						<a href={strYoutube} target="_blank"><img src={youtube} alt="" /></a>
					</div>
				</div>
			</div>

		</>
	);
};

export default ExploreDetail;
