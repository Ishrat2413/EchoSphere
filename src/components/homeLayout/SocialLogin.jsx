import { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router";

const SocialLogin = () => {
    const { googleSignIn } = use(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                alert("Sign in with Google", result.user)
                navigate(`${location.state? location.state : "/"}`)
            })
            .catch((error) => {
                const errorCode = error.code
                console.log(errorCode)
            })
    }
    return (
        <div className="w-full bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            {/* <p className="font-semibold text-center text-gray-600 mb-4">OR</p> */}
            <div className="divider">OR</div>
            <div className="flex flex-col gap-3">
                <button onClick={handleGoogleLogin} className="btn btn-outline w-full hover:bg-red-50 hover:border-red-400 group transition-all duration-300">
                    <FcGoogle size={24} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm lg:text-base">Continue with Google</span>
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;