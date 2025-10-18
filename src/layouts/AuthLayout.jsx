import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
    return (
        <div className="bg-base-200 min-h-screen">
            <header className="w-11/12 mx-auto p-5">
                <Navbar />
            </header>
            <main className="w-11/12 mx-auto">
                <Outlet/>
            </main>
        </div>
    );
};

export default AuthLayout;