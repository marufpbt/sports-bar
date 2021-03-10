import './ExploreDetail.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import male from '../../images/male.png';
import female from '../../images/female.png';
import founded from '../../icons/found 1.png';
import flag from '../../icons/flag (1) 1.png';
import football from '../../icons/football (1) 1.png';
import maleGender from '../../icons/male-gender-sign 1.png';
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
	const { strBanner, strLogo, strLeague, strSport, strTwitter, strYoutube, strFacebook, strCountry, strDescriptionEN, strDescriptionFR, intFormedYear, strGender } = league;
	let gender;
	if (strGender === "Male") {
		gender = <img src={male} style={{ width: '100%' }} alt="" />;
	}
	else {
		gender = <img src={female} style={{ width: '100%' }} alt="" />;
	}
	return (
		<>
			<section id="home-section" style={{
				backgroundImage: `url(${strBanner})`
			}}>
				<div className="dark-overlay">
					<div className="home-inner">
						<div className="container">
							<div className="row">
								<div className="col-12 banner-logo">
									<img src={strLogo} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="container mt-5">
				<div className="row league-wrapper">
					<div className="col-12 col-md-7">
						<div className="mt-5 controlWidth">
							<h3>{strLeague}</h3>
							<h6><img src={founded} />Founded: {intFormedYear}</h6>
							<h6><img src={flag} />Country: {strCountry}</h6>
							<h6><img src={football} />Sport Type: {strSport}</h6>
							<h6><img src={maleGender} />Gender: {strGender}</h6>
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
						<a href={`https://${strTwitter}`}><img src={twitter} alt="" /></a>
						<a href={`https://${strFacebook}`}><img src={facebook} alt="" /></a>
						<a href={`https://${strYoutube}`}><img src={youtube} alt="" /></a>
					</div>
				</div>
			</div>

		</>
	);
};

export default ExploreDetail;
