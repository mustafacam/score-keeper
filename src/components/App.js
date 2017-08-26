import React from 'react';

import PlayerView from "./PlayerView";
import ScoreView from "./ScoreView";

const App = () => (
    <div className="app-container">
        <h2>Score Keeper</h2>
        <PlayerView />
        <ScoreView />
    </div>
);

export default App;