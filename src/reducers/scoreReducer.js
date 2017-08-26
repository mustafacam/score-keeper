const defaultState =
    (JSON.parse(localStorage.getItem('scoreKeeper') || "{}")).sl || [];

const updateStorage = (state) => {
    let storage = (JSON.parse(localStorage.getItem('scoreKeeper') || "{}"));
    storage.sl = state;
    localStorage.setItem('scoreKeeper', JSON.stringify(storage));
};

const addScore = (state, payload) => {
    state.push(payload);
    return state;
};


const removeScore = (state, scoreIndex) => {
    state.splice(scoreIndex, 1);
    return state;
};

export default (state = defaultState, action) => {
    let newState = [...state];

    switch (action.type) {
        case 'ADD_SCORE':
            newState = addScore(newState, action.payload);
            break;
        case 'REMOVE_SCORE':
            newState = removeScore(newState, action.payload);
            break;

        default:
            return newState;
    }

    updateStorage(newState);

    return newState;
};