import React from 'react'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='font-sans text-4xl italic font-bold tracking-wide bg-gradient-to-r from-indigo-500 to-slate-400 inline-block text-transparent bg-clip-text'>
        Jonathan W. Mendez
      </h1>
      <h2 className='font-sans text-xl italic font-bold tracking-wide pt-4 pb-4'>
        This Website is Currently Under Maintenance
      </h2>
      <a href="https://drive.google.com/file/d/14HXJDcq_16h9GN4h-bIsTgytKDGKiw6F/view?usp=share_link" target='_blank'>
        <button type='button' className='bg-indigo-500 rounded-full px-2 outline outline-1 hover:outline-2 hover:bg-violet-800'>Download Resume</button>
      </a>
      
    </div>
    
  )
}

export default HomePage