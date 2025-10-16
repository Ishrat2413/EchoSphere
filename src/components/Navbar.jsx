import { NavLink } from "react-router";
import userLogo from "../assets/user.png"

const Navbar = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="">

            </div>
            <div className="main flex gap-x-5 text-accent text-lg">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="login-btn flex items-center gap-x-3">
                <img src={userLogo} alt="" />
                <button className="btn btn-primary">Login</button>
            </div>
        </div>
    );
};

export default Navbar;