const initialState = {
    data: null
}

export default function news(state = initialState, action) {
    switch(action.type) {
        case 'GET_NEWS_SUCCESS':
            return {...state, data: action.payload};
        default:
            return state;
    }
} 