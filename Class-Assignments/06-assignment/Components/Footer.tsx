export default function Footer () {
    return (
        <footer className="flex justify-around text-[25px] h-[35px] pt-[7px] m-[30px] gap-[110px] mt-[150px] mb-[60px]">
        <div>
            <h1 className="text-[#2429af] text-[25px]">Mehmet Akif Karasu -- 2020</h1>
        </div>
        <div>
            <ul className="flex justify-center gap-[25px] list-none font-bold">
                <li><a href="https://www.artstation.com" className="text-black no-underline">Artstation</a></li>
                <li><a href="https://www.linkedin.com" className="text-black no-underline">Linkedin</a></li>
                <li><a href="https://www.twitter.com" className="text-black no-underline">Twitter</a></li>
            </ul>
        </div>
    </footer>
    )
}