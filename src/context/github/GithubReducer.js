const githubReducer = (state, action) => {
    switch (action.type) {
        case 'GET_GIT_USER':
            return {
                ...state,
                gitUser: action.payload,
                gitLoading:false,
            }
        case 'GET_GIT_REPOS':
            return {
                ...state,
                gitRepos: action.payload,
                gitLoading:false,
        }
        case 'GET_GIT_USERS':
            return {
                ...state,
                gitUsers: action.payload,
                gitLoading:false,
            }
        case 'CLEAR_GIT_USERS':
            return {
                ...state,
                gitUsers: action.payload,
                gitLoading:false
            }
        case 'SET_GIT_LOADING':
            return {
                ...state,
                gitLoading: true
            }
        default:
            return state;
    }
}

export default githubReducer