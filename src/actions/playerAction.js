export function changePlayerName(playerIndex, newName) {
    return {
        type: 'CHANGE_PLAYER_NAME',
        payload: {
            playerIndex,
            newName
        }
    };
}
export function addNewPlayer(playerName) {
    return {
        type: 'ADD_NEW_PLAYER',
        payload: playerName
    };
}
