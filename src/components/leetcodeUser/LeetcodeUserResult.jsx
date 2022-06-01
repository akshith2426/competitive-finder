import React, { useContext} from 'react'
import Spinner from '../layout/Spinner';
import LeetcodeContext from '../../context/leetcode/LeetcodeContext';
import {FaUsers} from 'react-icons/fa'
import { BiCodeAlt } from "react-icons/bi";
import { AiOutlineStock } from "react-icons/ai";
import CountUp from 'react-countup';
const LeetcodeUserResult = () => {
    const { leetcodeUser, leetcodeLoading } = useContext(LeetcodeContext);
    
    if (!leetcodeLoading) {
        return (
            <div >
                
                <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <BiCodeAlt className="text-3xl md:text-5xl"/>
                        </div>
                        <div className="stat-title pr-5">
                            Total Solved Problems
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">
                            <CountUp delay={1} end={leetcodeUser.totalSolved}/>
                        </div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaUsers className="text-3xl md:text-5xl"/>
                        </div>
                        <div className="stat-title pr-5">
                            Rank
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">
                                {leetcodeUser.ranking}
                        </div>
                    </div>
                </div>
                <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaUsers className="text-3xl md:text-5xl"/>
                        </div>
                        <div className="stat-title pr-5">
                            Contribution Points
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">
                                {leetcodeUser.contributionPoints}
                        </div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaUsers className="text-3xl md:text-5xl"/>
                        </div>
                        <div className="stat-title pr-5">
                            Acceptance Rate
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">
                                {leetcodeUser.acceptanceRate}
                        </div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <AiOutlineStock className="text-3xl md:text-5xl"/>
                        </div>
                        <div className="stat-title pr-5">
                            Reputation
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">
                                {leetcodeUser.reputation}
                        </div>
                    </div>
                </div>
                <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
                    
                    <div className="stat">
                        <div className="stat-title pr-5">
                            Solved Easy Problems
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">
                            <CountUp delay={1} end={leetcodeUser.easySolved}/>
                        </div>
                    </div>
                    <div className="stat">
                        <div className="stat-title pr-5">
                            Solved Medium Problems
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">
                            <CountUp delay={1} end={leetcodeUser.mediumSolved}/>
                        </div>
                    </div>
                    <div className="stat">
                        <div className="stat-title pr-5">
                            Solved Hard Problems
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">
                            <CountUp delay={1} end={leetcodeUser.hardSolved}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return <Spinner/>
    }
}
export default LeetcodeUserResult