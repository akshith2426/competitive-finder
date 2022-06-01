import { createContext ,useReducer} from 'react';
import leetcodeReducer from './LeetcodeReducer';
const LeetcodeContext = createContext();

export const LeetcodeProvider = ({ children }) => {
    const initialState = {
        leetcodeUser: {},
        leetcodeLoading:false
    }

    const [state,dispatch]=useReducer(leetcodeReducer,initialState)

    //Get Leetcode User Info
    const getLeetcodeUser = async (username) => {
        setLeetcodeLoading();
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
        if (response.status === 404) {
            window.location('/notfound');
        } else {
            const data = await response.json();
            dispatch({
                type: 'GET_LC_USER',
                payload: data,
            })
        }
        
    }
    const clearLeetcodeUser = () => {
        dispatch({
            type: 'CLEAR_LC_USER',
            payload: {},
        })
    }

    const setLeetcodeLoading = () => {
        dispatch({
            type: 'SET_LC_LOADING',
        })
    }

    return <LeetcodeContext.Provider value={{
        leetcodeUser:state.leetcodeUser, leetcodeLoading: state.leetcodeLoading,setLeetcodeLoading, clearLeetcodeUser,getLeetcodeUser
    }}>
        {children}
    </LeetcodeContext.Provider>

}

export default LeetcodeContext