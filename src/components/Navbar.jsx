import Logo from "./../assets/oldfashionedweek-logo.svg";
import { NavLink } from "react-router";
import { useCountry } from "../context/CountryContext";
import ThemeToggle from "./navigation/ThemeToggle";
import MainNav from "./navigation/MainNav";

const Navbar = () => {
    const { selectedCountry, countryChange } = useCountry();

    return (
        <header className="navbar bg-black text-white sticky top-0 z-50">
            <div className="navbar-start">
                <select
                    defaultValue={selectedCountry}
                    className="select select-ghost w-14 text-sm pl-1 pr-0 py-0 h-6 border-0 rounded-full"
                    aria-label="Select country"
                    onChange={(e) => countryChange(e.currentTarget.value)}
                >
                    <option value="USA">USA</option>
                    <option value="CA">CA</option>
                    <option value="UK">UK</option>
                </select>
                <ThemeToggle />
            </div>

            <div className="navbar-center ml-5">
                <NavLink to="/">
                    <img
                        className="w-45 md:w-75"
                        src={Logo}
                        alt="Old Fashioned Week"
                    />
                </NavLink>
            </div>

            <MainNav />
        </header>
    );
};

export default Navbar;
