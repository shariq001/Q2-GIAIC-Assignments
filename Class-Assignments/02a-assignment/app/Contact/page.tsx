import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='bg-[#bdd1c5] w-[400px] h-[500px] text-center items-center mx-auto m-[100px] p-[50px] shadow-2xl text-[#a36361]'>

        <h1 className='text-[25px] font-bold '>Contact Me</h1>

        <label htmlFor="Name" className='font-bold text-[20px]'>Name: </label>
        <input type="text" className='w-[100%] border-none p-[15px] my-[15px] mx-0 text-center text-[18px] mt-0' />
<br /><br />
        <label htmlFor="Email" className='font-bold text-[20px]'>Email: </label>
        <input type="email" className='w-[100%] border-none p-[15px] my-[15px] mx-0 text-center text-[18px] mt-0' />
<br /><br />
        <label htmlFor="Message" className='font-bold text-[20px]'>Message:</label>
        <textarea name="Message" id="msg" className='w-[100%] border-none p-[15px] my-[15px] mx-0 text-center text-[18px] mt-0'></textarea>
      </div>
    </div>
  )
}

export default Contact