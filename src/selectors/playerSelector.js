import {createSelector} from 'reselect';


const getPlayerTotalPoint = (scoreList, playerIndex) => {
    let totalPoint = 0;
    scoreList.forEach((scoreItem) =>
        (scoreItem[0] == playerIndex) && (totalPoint += scoreItem[1])
    );
    return totalPoint;
};

const getPlayerSelector = (state) => {

    let scoreList = state.scoreReducer;

    return state.playerReducer.map((playerName, playerIndex) => ({
        name: playerName,
        index: playerIndex,
        totalPoint: getPlayerTotalPoint(scoreList, playerIndex)
    }));
};

const getTotalPoint = (state) => {
    let totalPoint = 0;
    state.scoreReducer.forEach((scoreItem) =>
        (totalPoint += scoreItem[1]));

    return totalPoint;
};


const getState = (getPlayerSelector, getTotalPoint) => ({
    playerList: getPlayerSelector,
    totalPoint: getTotalPoint
});

export default createSelector(
    getPlayerSelector,
    getTotalPoint,
    getState);

