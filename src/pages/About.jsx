import React from 'react'

const About = () => {
  return (
    <>
      <h1 className='text-6xl mb-4'>Competitive Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub,Leetcode profiles and see profile details.
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Built By    
        <span> <a className='text-white' href='https://www.linkedin.com/in/sai-akshith-vasa/' target='_blank'>
          Sai Akshith Vasa
        </a></span>
      </p>
    </>
  )
}

export default About