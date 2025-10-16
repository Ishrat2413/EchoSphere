import { format } from "date-fns";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col items-center text-center justify-center gap-3 mt-9">
            <img src={logo} alt="" />
            <p className="text-accent">Journalism without Fear Or Favor</p>
            <p className="text-accent font-semibold">{format (new Date(), "EEEE, MMMM MM, yyyy")}</p>
        </div>
    );
};

export default Header;