const initialState = {
    loginAndPassword: null,
    isLoading: false,
    informMessage: null,
    session: null
}

export default function user(state = initialState, action) {
    switch(action.type) {
        case 'LOGIN_BUTTON_CLICKED':
            return {...state, loginAndPassword: action.payload};
        case 'REJECT_PASSWORD': 
            return {...state, loginAndPassword: action.payload};
        case 'LOADING_USER':
            return {...state, isLoading: !state.isLoading};
        case 'ERROR_MESSAGE':
            return {...state, informMessage: action.payload};
        case 'SESSION':
            return {...state, session: action.payload};
        default:
            return state;
    }
}