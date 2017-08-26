import React from 'react';

import PlayerList from './PlayerList'
import AddPlayer from './AddPlayer';

const PlayerView = () => (
    <div>
        <div className="view-header">
            <span>Name</span>
            <span>Points</span>
        </div>
        <PlayerList />
        <AddPlayer />
    </div>
);

export default PlayerView;