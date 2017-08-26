import React from 'react';
import PropTypes from 'prop-types';

const ScoreListItem = (score) => (
    <li>
        <div className="player-label-container">
            <button
                className="btn"
                onClick={score.removeScore}
                title="Remove Score"
            >&#10006;</button>
            <span className="player-label" title={score.playerName}>{score.playerName}</span>
        </div>
        <span className="pt-label">{score.point}</span>
    </li>
);

ScoreListItem.propTypes = {
    playerName: PropTypes.string.isRequired,
    point: PropTypes.number.isRequired,
    removeScore: PropTypes.func.isRequired
};

export default ScoreListItem;