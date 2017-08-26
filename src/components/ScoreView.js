import React from 'react';
import ScoreList from "./ScoreList"

const ScoreView = () => (
    <div>
        <div className="view-header">
            <span>Plays</span>
            <span>Points</span>
        </div>
        <ScoreList />
    </div>
);


export default ScoreView;