import { Link, NavLink } from "react-router";
import userLogo from "../assets/user.png"
import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = use(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert("You have logged out Successfully!")
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-0">
            <div className="text-center lg:text-left">
                {
                    user ? <span className="font-bold text-secondary">Is that you?</span> : " "
                }
                <br />
                <span className="text-gray-700 text-sm lg:text-base">{user && user.email}</span>
            </div>
            <div className="main flex justify-center gap-4 lg:gap-5 text-gray-600 text-base lg:text-lg">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "text-secondary font-semibold" : "hover:text-primary"}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? "text-secondary font-semibold" : "hover:text-primary"}
                >
                    About
                </NavLink>
                <NavLink
                    to="/career"
                    className={({ isActive }) => isActive ? "text-secondary font-semibold" : "hover:text-primary"}
                >
                    Career
                </NavLink>
            </div>
            <div className="login-btn flex items-center justify-center gap-3">
                <img className="w-10 lg:w-12 rounded-full border-2 border-gray-200" src={`${user ? user.photoURL : userLogo}`} alt="" />
                {
                    user ? (
                        <button onClick={handleLogOut} className="btn btn-primary text-sm lg:text-base">
                            Log Out
                        </button>
                    ) : (
                        <button className="btn btn-primary text-sm lg:text-base">
                            <Link to="/auth/login">Login</Link>
                        </button>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;