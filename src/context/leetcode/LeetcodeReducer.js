const leetcodeReducer = (state, action) => {
    switch (action.type) {
        case 'GET_LC_USER':
            return {
                ...state,
                leetcodeUser: action.payload,
                leetcodeLoading:false,
            }
        case 'SET_LC_LOADING':
            return {
                ...state,
                leetcodeLoading: true
            }
        case 'CLEAR_LC_USER':
            return {
                ...state,
                leetcodeUser: action.payload,
                gitLoading:false
            }
        default:
            return state;
    }
}

export default leetcodeReducer