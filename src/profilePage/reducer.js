const initialState = {
    data: null
}

export default function profile(state = initialState, action) {
    switch(action.type) {
        case 'GET_PROFILE_SUCCESS':
            return {...state, data: action.payload};
        default:
            return state;
    }
} 