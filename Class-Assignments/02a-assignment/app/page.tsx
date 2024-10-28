import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='flex justify-around'>
        <div className='bg-[#bdd1c5] w-[400px] h-[450px] text-center items-center mx-auto m-[100px] p-[50px] shadow-2xl text-[#a36361]'>
          <h1 className='text-[25px] font-bold '>Personal Information</h1> <br />

          <p className='text-[18px] text-white'><span className='font-bold text-[#a36361]'>Name:</span> Muhammad Shariq</p><br />

          <p className='text-[18px] text-white'><span className='font-bold text-[#a36361]'>Goal:</span> Aspiring to become a Software Engineer</p><br />

          <p className='text-[18px] text-white'><span className='font-bold text-[#a36361]'>GitHub Projects:</span> Shared projects independently completed for academic tasks, including a variety of command-line applications, a personal portfolio website, and TypeScript concepts.</p>

        </div>

        <div className='bg-[#bdd1c5] w-[400px] h-[500px] text-center items-center mx-auto m-[100px] p-[50px] shadow-2xl text-[#a36361]'>

          <h1 className='text-[25px] font-bold '>Skills</h1>

          <p className='text-[18px] text-white'><span className='font-bold text-[#a36361]'>Languages & Frameworks:</span> TypeScript, JavaScript, Next.js, HTML, CSS</p><br />

          <p className='text-[18px] text-white'><span className='font-bold text-[#a36361]'>Tools:</span> Visual Studio Code (VSCode)</p><br />

          <p className='text-[18px] text-white'><span className='font-bold text-[#a36361]'>UI/UX Design:</span> Currently working on a UI/UX design for a portfolio website in Next.js</p>

          <p className='text-[18px] text-white'><span className='font-bold text-[#a36361]'>Development Preferences:</span>
          <ul >
            <li>Using Font Awesome icons via links</li>
            <li>Styling borders under text only (not around)</li>
            <li>Simple, autonomous function implementations in projects</li>
          </ul></p>

        </div>
      </div>
    </div>
  )
}

export default Home