import { NavLink } from "react-router";
import Navbar from "../../components/Navbar";

const Errorpage = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="text-center space-y-6 py-20 px-5">
                <h1 className="text-7xl font-extrabold text-dark-green">404</h1>

                <h2 className="text-2xl md:text-3xl font-semibold text-dark-black">
                    Oops! Page not found
                </h2>
                <p className="text-light-gray max-w-md mx-auto">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <NavLink to="/" className="btn btn-primary text-white">
                        Go Back to Home
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default Errorpage;
