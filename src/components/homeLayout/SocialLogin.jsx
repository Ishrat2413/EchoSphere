import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    return (
        <div className="w-full">
            <div className="divider">OR</div>
            <p className="font-semibold text-center text-gray-600 mb-4">Continue With</p>
            <div className="flex flex-col gap-3">
                <button className="btn btn-outline w-full hover:bg-red-50 hover:border-red-400 group transition-all duration-300">
                    <FcGoogle size={24} className="group-hover:scale-110 transition-transform"/> 
                    Continue with Google
                </button>
                <button className="btn btn-outline w-full hover:bg-gray-900 hover:text-white hover:border-gray-900 group transition-all duration-300">
                    <FaGithub size={24} className="group-hover:scale-110 transition-transform" /> 
                    Continue with Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;