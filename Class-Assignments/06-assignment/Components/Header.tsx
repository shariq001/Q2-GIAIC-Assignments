import Link from "next/link"

export default function Header () {
    return (
        <div>
            <nav className="flex justify-around my-[70px] mx-[100px] h-[50px] gap-[350px] ">
                <div>
                    <h1 className="text-[50px]">ma.</h1>
                </div>
                <div >
                    <ul className="flex justify-center gap-[30px] list-none font-bold mt-[23px] text-[25px]">
                        <li className="hover:border-b-[2px] hover:border-black"><Link href='/'>Work</Link></li>
                        <li className="hover:border-b-[2px] hover:border-black"><Link href='/About-us'>About</Link></li>
                        <li className="hover:border-b-[2px] hover:border-black">Playground</li>
                        <li className="hover:border-b-[2px] hover:border-black">Contact</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}