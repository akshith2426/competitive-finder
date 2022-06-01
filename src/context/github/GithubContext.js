import { createContext ,useReducer} from 'react';
import githubReducer from './GithubReducer';
const GithubContext = createContext();


const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
    const initialState = {
        gitUsers: [],
        gitUser: {},
        gitRepos:[],
        gitLoading:false
    }

    const [state,dispatch]=useReducer(githubReducer,initialState)


    //Get Github Search results
    const searchGitUsers = async (text) => {
        setGitLoading();
        const params = new URLSearchParams({
            q:text
        })
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                Authorization:`token ${GITHUB_TOKEN}`
            }
        })
        const {items} = await response.json();
        dispatch({
            type: 'GET_GIT_USERS',
            payload: items,
        })
    }

    //Get Github User Info
    const getGitUser = async (login) => {
        setGitLoading();
        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
            headers: {
                Authorization:`token ${GITHUB_TOKEN}`
            }
        })
        if (response.status === 404) {
            window.location('/notfound');
        } else {
            const data = await response.json();
        
        dispatch({
            type: 'GET_GIT_USER',
            payload: data,
        })
        }
        
    }

    //Get Github User Repos
    const getGitUserRepos = async (login) => {
        setGitLoading();

        const params = new URLSearchParams({
            sort: 'created',
            per_page:10
        })

        const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
            headers: {
                Authorization:`token ${GITHUB_TOKEN}`
            }
        })
        const data = await response.json();
        console.log(data);
        dispatch({
            type: 'GET_GIT_REPOS',
            payload: data,
        })
    }

    const clearGitUsers = () => {
        dispatch({
            type: 'CLEAR_GIT_USERS',
            payload: [],
        })
    }

    const setGitLoading = () => {
        dispatch({
            type: 'SET_GIT_LOADING',
        })
    }

    return <GithubContext.Provider value={{
        gitUsers: state.gitUsers,gitUser:state.gitUser,gitRepos:state.gitRepos, gitLoading: state.gitLoading, searchGitUsers, setGitLoading, clearGitUsers,getGitUser,getGitUserRepos
    }}>
        {children}
    </GithubContext.Provider>

}

export default GithubContext