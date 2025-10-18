import { format } from "date-fns";

const Header = () => {
    return (
        <div className="flex flex-col items-center text-center justify-center gap-2 py-4 lg:pt-5 px-4">
            <h2 className="echoSphere-logo text-4xl lg:text-7xl font-bold bg-gradient-to-r from-secondary to-primary p-1 bg-clip-text text-transparent">
                The EchoSphere
            </h2>
            <p className="text-gray-600 font-semibold text-sm lg:text-base">
                {format(new Date(), "EEEE, MMMM dd, yyyy")}
            </p>
        </div>
    );
};

export default Header;