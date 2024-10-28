import React from 'react'

const Work = () => {
  return (
    <div>
      <title>Portfolio - Work Page</title>
      <div className='flex justify-around gap-[0px] '>
        <div className='text-[60px] font-medium leading-[58.32px] tracking[-0.03em] text-left w-[365px] h-[129px] mt-[180px] mb-[180px] ml-[120px]'>
          <h1>Hello, I&apos;m Mehmet Akif.</h1>
        </div>
        <div className='w-[540px] h-[111px] md:mt-[240px] mb-[240px] mr-[120px] ml-0 text-[32px] font-normal leading-[37.44px]  text-left text-gray-500'>
          <p>A senior-year design student who trying to specialize in 3D modeling & texturing.</p>
        </div>
      </div>
      
      <div className="w-[1120px] h-[473px] mx-[210px] my-[75px] flex justify-around gap-[50px] flex-row border-b-2 border-black">
        <div className="w-[35%]">
          <h2 className='font-bold text-[20px]'>01/PROJECT NAME</h2>
          <br />
          <p className='font-semibold text-[20px]'>Goblin concept digital sculpture with human like skin. Learned a lot of quick tips and look development.</p>
          <br />
          <p className='mb-[75px] text-[20px] text-[#606060]'>Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.</p>
          <a href="" className='font-semibold border-b-[2px] border-b-black text-[20px] '>More shots from this project</a>
        </div>

        <div className="bg-[#606060] w-[640px] h-[364.68px]">
        </div>
      </div>

      <div className="w-[1120px] h-[473px] mx-[210px] my-[75px] flex justify-around gap-[50px] flex-row border-b-2 border-black">
        <div className="w-[35%]">
          <h2 className='font-bold text-[20px]'>02/PROJECT NAME</h2>
          <br />
          <p className='mb-[175px] font-semibold text-[20px]'>Subsurface weight, specular roughness, diffuse maps generated with the procedure and manual techniques.</p>
          <a href="" className='font-semibold border-b-[2px] border-b-black text-[20px]'>See case study →</a>
        </div>

        <div className="bg-[#606060] w-[640px] h-[364.68px]">
        </div>
      </div>

      <div className="w-[1120px] h-[473px] mx-[210px] my-[75px] flex justify-around gap-[50px] flex-row border-b-2 border-black">
        <div className="w-[35%]">
          <h2 className='font-bold text-[20px]'>03/PROJECT NAME</h2>
          <br />
          <p className='mb-[210px] font-semibold text-[20px]'>Experimental creature modeling for school project.</p>
          <a href="" className='font-semibold border-b-[2px] border-b-black text-[20px]'>Project WIP </a>
        </div>

        <div className="bg-[#606060] w-[640px] h-[364.68px]"></div>
      </div>
    </div>
  )
}

export default Work