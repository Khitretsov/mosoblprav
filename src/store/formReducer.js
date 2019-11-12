export default function formReducer(state = {}, action) {
    if (action.type === '__FORMS__') {
        return {...state, [action.payload.formID]: action.payload.data}
    } 
    if (action.type === '__FORMS__DELETE__') {
        const newState = {...state}
        delete newState.formID;
        return newState
    }
    return state;
}