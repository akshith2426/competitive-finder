import React, { useContext} from 'react'
import Spinner from '../layout/Spinner';
import GithubUserItem from '../githubUsers/GithubUserItem'
import GithubContext from '../../context/github/GithubContext'

const GithubUserResults = () => {
    const { gitUsers, gitLoading } = useContext(GithubContext);
    if (!gitLoading) {
        return (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {gitUsers.map((user) => {
                    return <GithubUserItem key={user.id} user={user} />
                })}
            </div>
        )
    } else {
        return <Spinner />
    }
}

export default GithubUserResults