import React from 'react';
import PropTypes from 'prop-types';

const increment = (player, point) =>
    player.increment(player.index, point);

const editPlayerName = (player) => (
    <div>
        <input
            type="text"
            value={player.edit.editingName}
            onChange={player.edit.changeName}
        />
        <button
            className="btn"
            onClick={player.edit.saveName}
            disabled={player.edit.editingName === player.name || player.edit.editingName === ''}>&#x2713;
        </button>
        <button
            className="btn"
            onClick={player.edit.cancel}>X
        </button>
    </div>
);

const showPlayerName = (player) => (
    <div className="player-label-container">
        <button
            className="btn"
            onClick={() => player.edit.editName(player)}
            title="Edit Player">✎
        </button>
        <span className="player-label" title={player.name}>{player.name}</span>
    </div>
);

const PlayerListItem = (player) => (
    <li>
        {(player.edit.isEditing(player) && editPlayerName(player)) || showPlayerName(player)}
        <div>
            <button className="btn" onClick={() => increment(player, 2)}>2pt</button>
            <button className="btn" onClick={() => increment(player, 3)}>3pt</button>
            <span className="pt-label">{player.totalPoint}</span>
        </div>
    </li>
);


PlayerListItem.propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    totalPoint: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    edit: PropTypes.shape({
        editingName: PropTypes.string.isRequired,
        editName: PropTypes.func.isRequired,
        isEditing: PropTypes.func.isRequired,
        changeName: PropTypes.func.isRequired,
        saveName: PropTypes.func.isRequired,
        cancel: PropTypes.func.isRequired
    }),
};

export default PlayerListItem;