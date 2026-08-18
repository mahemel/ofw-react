import { RiCloseLargeFill } from "react-icons/ri";
import Logo from "./../assets/oldfashionedweek-logo.svg";
import { NavLink } from "react-router";

const navItems = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/join-our-cause",
        label: "OUR Cause",
    },
    {
        href: "/mix-old-fashioned",
        label: "Mix an old fashioned",
    },
    {
        href: "/login",
        label: "Register your bar",
    },
    {
        href: "/archive",
        label: "Past Events",
    },
    {
        href: "/faqs",
        label: "FAQ'S",
    },
    {
        href: "/contact",
        label: "Contact",
    },
];
const Navbar = () => {
    return (
        <header className="navbar bg-black text-white">
            <div className="navbar-start">
                <select
                    defaultValue="USA"
                    className="select select-ghost w-20"
                    aria-label="Select country"
                >
                    <option value="USA">USA</option>
                    <option value="CA">CA</option>
                    <option value="UK">UK</option>
                </select>
            </div>

            <div className="navbar-center">
                <NavLink to="/">
                    <img src={Logo} alt="Old Fashioned Week" />
                </NavLink>
            </div>

            <div className="navbar-end">
                <div className="drawer drawer-end">
                    <input
                        id="sideMenu"
                        type="checkbox"
                        className="drawer-toggle"
                    />
                    <div className="flex justify-end">
                        <label
                            htmlFor="sideMenu"
                            className="drawer-button"
                            aria-label="Open navigation menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label
                            htmlFor="sideMenu"
                            aria-label="close sidebar"
                            className="drawer-overlay"
                        >
                            <RiCloseLargeFill className="left-3 top-3 absolute" />
                        </label>
                        <nav
                            aria-label="Main navigation"
                            className="bg-black min-h-full w-80 p-4"
                        >
                            <ul className="menu ">
                                {navItems.map((item) => (
                                    <li key={item.href}>
                                        <NavLink
                                            className="uppercase text-xl"
                                            to={item.href}
                                        >
                                            {item.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
