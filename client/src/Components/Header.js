import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="text-gray-400 bg-gray-900 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer">
                        <span className="ml-3 text-xl">Plogging</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link to="/" className="mr-5 hover:text-white">Home</Link>
                        <Link to="/aboutus" className="mr-5 hover:text-white">About Us</Link>
                        <a href="/" className="mr-5 hover:text-white">Watch Plog</a>
                        <a href="/" className="mr-5 hover:text-white">AI Plog</a>
                    </nav>
                    <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Login
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
                <hr className="border-[#986dff]" />
            </header>
        </>
    )
}

export default Header;