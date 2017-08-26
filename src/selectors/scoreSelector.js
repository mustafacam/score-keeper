import {createSelector} from 'reselect';



const getScoreSelector = (state) => {
    let playerList = state.playerReducer;

    return state.scoreReducer.map((scoreItem, index) => ({
        playerIndex: scoreItem[0],
        point: scoreItem[1],
        playerName: playerList[scoreItem[0]]
    })).reverse();
};


const getState = (getScoreSelector) => ({
    scoreList: getScoreSelector
});

export default createSelector(
    getScoreSelector,
    getState);

