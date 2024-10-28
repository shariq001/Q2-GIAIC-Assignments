export default function About () {
    return (
        <div>
            <title>Portfolio - AboutUs</title>
            <div className="w-[1120px] h-[590px] mt-[220px] ml-[200px] flex justify-between gap-[30px]">
                <div className="">
                    <h1 className="w-[480px] h-[199px] text-[60px] leading-[70px] font-medium text-left mb-[70px]">Hi I&apos;m Mehmet Akif Karasu, 3D artist & sculptor.</h1>

                    <p className="text-gray-500 w-[575px] h-[359px] font-normal text-[25px] leading-[40px]">My work is mainly focused on third-dimension modeling, texturing and rendering. I like exploring the creatures with a touch of dark surrealism for characters and production.
                    <br /><br />
                    Now I&apos;m an interactive media design student i Istanbul -- currently freelancing and seeking internship opportunites.
                    </p>
                </div>

                <div className="">
                    <img src="/Images/Profile Photo.png" alt="Profile Photo" className="w-[421px] h-[590px]"/>
                </div>
            </div>

            <div className="w-[623px] h-[216px] mt-[150px] ml-[160px]">
                <div className="m-[40px] flex jusitfy-begween gap-[150px] w-[750px]">
                    <div>
                        <h2 className=" text-[23px] font-medium leading-[21.87px] text-left underline decoration-black decoration-[2px] w-[160px]">Main Software</h2>
                    </div>

                    <div>
                        <p className="text-[23px]">Pixologic ZBrush, Autodesk Maya, The Foundry Mari, Arnold Renderer, Blender, Forger
                        <br /><br />
                        Adobe CC, Figma, Ableton
                        </p>
                    </div>
                </div>

                <div className="m-[40px] flex jusitfy-begween gap-[150px] w-[750px] ">
                    <div>
                        <h2 className=" text-[23px] font-medium leading-[21.87px]  text-left underline decoration-black decoration-[2px] w-[160px]">Main Skills</h2>
                    </div>

                    <div>
                        <p className="text-[23px]">Organic and Polygonal Modeling, UV Layout, Texturing, Retopology, Ilustration, Sound Design
                        </p>
                    </div>
                </div>
            </div>

            <div className="m-[200px] border-t-[3px] border-black pt-[100px] flex justify-between gap-[200px] sm: justify-center ">
                <div className="text-[45px] w-[500px] ">
                    <h1>I am thrilled to answer to your next project </h1>
                </div>

                <div className=" w-[500px] pt-[5px] ">
                    <h1 className="text-[40px]">makifkarasu@outlook.com</h1>
                    <br />
                    <a href="" className="text-[20px]">View Resume</a>
                </div>
            </div>
        </div>
    )
}