import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './league.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const League = (props) => {
	const { strLeague, idLeague, strSport } = props.league;
	const history = useHistory();
	const exploreDetail = (idLeague) => {
		const url = `/league/${idLeague}`;
		history.push(url);
	}
	return (
		<div className="leagueStyle">
			<h3>{strLeague}</h3>
			<p><small>Sports type: {strSport}</small></p>
			<button className="btn btn-primary" onClick={() => exploreDetail(idLeague)}>Explore <FontAwesomeIcon icon={faAngleRight} /></button>
		</div>
	);
};

export default League;
