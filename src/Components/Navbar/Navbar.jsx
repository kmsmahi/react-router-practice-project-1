import { Link } from "react-router";

const Navbar = () => {
    // Shared link styles with active state support
    const links=<>

        <Link to='/' className="m-2 text-xl font-semibold " to="/">
            Home
        </Link>

        <Link to='/listed-books' className="m-2 text-xl font-semibold " to="/listed-books">
            Listed Books
        </Link>

        <Link to='/pages-to-read' className="m-2 text-xl font-semibold " to="/pages-to-read">
            Pages to read
        </Link>

    </>;

    return (
        <div className="navbar bg-base-100 container mx-auto py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
                        {links}
                    </ul>
                </div>
                <a className="text-2xl md:text-3xl font-extrabold tracking-tight cursor-pointer">
                    Book<span className="text-[#23BE0A]">Vibe</span>
                </a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {links}
                </ul>
            </div>

            <div className="navbar-end gap-3">
                <button className="btn bg-[#23BE0A] hover:bg-[#1fa508] text-white border-none px-6 capitalize font-semibold">
                    Sign In
                </button>
                <button className="btn bg-[#59C6D2] hover:bg-[#4baeba] text-white border-none px-6 capitalize font-semibold">
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default Navbar;