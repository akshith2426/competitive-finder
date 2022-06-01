import React from 'react'
import { Link } from 'react-router-dom'
import GithubUserResults from '../components/githubUsers/GithubUserResults'
import GithubUserSearch from '../components/githubUsers/GithubUserSearch'
const GithubSearch = () => {
    return (
        <div className='w-full mx-auto lg:w-10/12'>
            <div className="mb-4">
                <Link to="/" className="btn btn-ghost">Back To Home</Link>
            </div>
            <GithubUserSearch />
            <GithubUserResults/>
        </div>
    )
}

export default GithubSearch