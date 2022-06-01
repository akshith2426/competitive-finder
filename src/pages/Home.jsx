import React from 'react'
import { SiLeetcode ,SiGithub,SiCodeforces} from 'react-icons/si';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{margin:'0 3%'}} className="grid grid-cols-1 gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
          <div className="card  bg-gray-700 shadow-xl">
            <figure><SiLeetcode className="text-9xl mt-5"/></figure>
            <div className="card-body">
              <h1 className="card-title">Leetcode</h1>
              <p>Explore other user leetcode profile and stats!</p>
              <div className="card-actions justify-center">
                <Link to="/leetcode/search"><button className="btn btn-primary">View More !</button></Link>
              </div>
            </div>
          </div>
          <div className="card  bg-gray-700 shadow-xl">
            <figure><SiGithub className="text-9xl mt-5"/></figure>
            <div className="card-body">
              <h2 className="card-title">Github</h2>
              <p>Explore other user github profile and stats!</p>
              <div className="card-actions justify-center">
                <Link to="/github/search"><button className="btn btn-primary">View More !</button></Link>
              </div>
            </div>
          </div>
          <div className="card  bg-gray-700 shadow-xl">
            <figure><figure><SiCodeforces className="text-9xl mt-5"/></figure></figure>
            <div className="card-body">
              <h2 className="card-title">Codeforces</h2>
              <p>Explore other user codeforces profile and stats!</p>
              <div className="card-actions justify-center">
                <Link to="/codeforces/search"><button className="btn btn-primary">View More !</button></Link>
              </div>
            </div>
          </div>
          
    </div>
  )
}

export default Home