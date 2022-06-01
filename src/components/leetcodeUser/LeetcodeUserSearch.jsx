import React,{useState,useContext} from 'react'
import LeetcodeContext from '../../context/leetcode/LeetcodeContext';
import AlertContext from '../../context/alert/AlertContext';
const LeetcodeUserSearch = () => {
    const [text, setText] = useState('');
    const { getLeetcodeUser,clearLeetcodeUser} = useContext(LeetcodeContext);
    const { setAlert } = useContext(AlertContext);
    const handleChange = (e) => {
        setText(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (text === '') {
            setAlert('Please enter something','error')
        } else {
            //@todo search leetcode user
            getLeetcodeUser(text);

            setText('');
        }
    }
    const handleClear = () => {
        clearLeetcodeUser();
    }

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
            <div>
                <form onSubmit={handleSubmit} className="form-control">
                    <div className="relative">
                        <input value={text} onChange={handleChange}
                            type="text" className="w-full pr-40 bg-gray-200 input input-lg text-black" placeholder="Search Leetcode Username" />
                        <button type="submit" className="absolute top-0 right-0 rounded-l-none btn btn-lg">Go</button>
                    </div>
                </form>
            </div>
            <div>
                <button onClick={handleClear} className="btn btn-host btn-lg">
                    Clear
                </button>
            </div>
        </div>
    )
}

export default LeetcodeUserSearch