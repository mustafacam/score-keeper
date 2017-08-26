export function addScore(playerIndex, point) {
    return {
        type: 'ADD_SCORE',
        payload: [
            playerIndex,
            point
        ]
    };
}

export function removeScore(scoreIndex) {
    return {
        type: 'REMOVE_SCORE',
        payload: scoreIndex
    }
}