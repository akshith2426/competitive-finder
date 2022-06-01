import React from 'react';
import { Link } from 'react-router-dom'
import LeetcodeUserResult from '../components/leetcodeUser/LeetcodeUserResult'
import LeetcodeUserSearch from '../components/leetcodeUser/LeetcodeUserSearch'
const LeetcodeSearch = () => {
  return (
    <div className='w-full mx-auto lg:w-10/12'>
      <div className="mb-4">
          <Link to="/" className="btn btn-ghost">Back To Home</Link>
      </div>
      <LeetcodeUserSearch />
      <LeetcodeUserResult/>
    </div>
  )
}

export default LeetcodeSearch