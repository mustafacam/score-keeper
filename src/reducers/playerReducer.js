const defaultState =
    (JSON.parse(localStorage.getItem('scoreKeeper') || "{}")).pl || [];

const updateStorage = (state) => {
    let storage = (JSON.parse(localStorage.getItem('scoreKeeper') || "{}"));
    storage.pl = state;
    localStorage.setItem('scoreKeeper', JSON.stringify(storage));
};

const changePlayerName = (state, {playerIndex, newName}) => {
    state[playerIndex] = newName;
    return state;
};

const addNewPlayer = (state, playerName) => {
    state.push(playerName);
    return state;
};

export default (state = defaultState, action) => {
    let newState = [...state];

    switch (action.type) {
        case 'CHANGE_PLAYER_NAME':
            newState = changePlayerName(newState, action.payload);
            break;
        case 'ADD_NEW_PLAYER':
            newState = addNewPlayer(newState, action.payload);
            break;

        default:
            return newState;
    }

    updateStorage(newState);

    return newState;
};