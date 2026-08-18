import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <p>Footer</p>
            </footer>
        </>
    );
};

export default MainLayout;
