import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
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
const MainNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className="navbar-end">
            <button className="btn btn-circle" onClick={handleMenuOpen}>
                {isMenuOpen === false ? (
                    <BiMenu className="w-6 h-6" />
                ) : (
                    <IoClose className="w-6 h-6" />
                )}
            </button>
            <nav
                aria-label="Main navigation"
                className={`bg-black min-h-full w-80 p-4 fixed right-0 ${!isMenuOpen ? "translate-x-full" : "translate-x-0"} top-16 z-50 transition-transform duration-500`}
            >
                <ul className="menu ">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <NavLink
                                className={({ isActive }) =>
                                    `uppercase text-xl ${isActive && "text-orange"}`
                                }
                                to={item.href}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default MainNav;
