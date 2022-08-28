export default function Footer() {
    return(
        <div className="w-[100vw] h-36 lg:h-24 flex flex-col lg:flex-row items-center justify-center space-y-2 bg-black text-white">
            <footer className="text-xs text-[#828282]" >SPACEX © 2022</footer>
            <ul className="flex flex-wrap justify-center text-xs font-bold space-x-3 lg:space-x-9 space-y-2 lg:pb-4">
                <li></li>
                <li>TWITTER</li>
                <li>YOUTUBE</li>
                <li>INSTAGRAM</li>
                <li>FLICKR</li>
                <li>LINKEDIN</li>
                <li>PRIVACY POLICY</li>
                <li>SUPPLIERS</li>
            </ul>
        </div>
    )
};
