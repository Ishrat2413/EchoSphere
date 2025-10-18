import { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import SocialLogin from "../components/homeLayout/SocialLogin";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../firebase/firebase.config";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const auth = getAuth(app)
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("")
    const { signIn, setUser } = use(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const emailRef = useRef()
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        // console.log({ email, password })
        signIn(email, password)
            .then((result) => {
                const user = result.user
                alert("You have Logged in Successfully!")
                setUser(user)
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch(error => {
                // const errorMessage = error.message
                const errorCode = error.code
                setError(errorCode)
            })
    }

    const handleForgotPassword = () => {
        const email = emailRef.current.value
        // send password reset email
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("A password reset email is sent. Please check your email.")
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    return (
        <div className="min-h-screen flex mt-4 justify-center bg-gray-50 p-4">
            <div className="card bg-white w-full max-w-sm shadow-lg rounded-lg border border-gray-200">
                {/* Simple Header */}
                <div className="p-6 text-center border-b border-gray-100">
                    <h1 className="text-2xl font-semibold text-gray-800">Welcome Back</h1>
                    <p className="text-gray-500 text-sm mt-1">Sign in to continue</p>
                </div>

                <div className="card-body p-6">
                    <form onSubmit={handleLogin} className="space-y-4">
                        {/* Email Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700 font-medium">Email</span>
                            </label>
                            <input
                                type="email"
                                ref={emailRef}
                                className="input input-bordered w-full"
                                placeholder="Enter your Email"
                                name="email"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        {/* Password Field */}
                        <div className="form-control">
                            <div className="flex justify-between items-center">
                                <label className="label">
                                    <span className="label-text text-gray-700 font-medium">Password</span>
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="input input-bordered w-full pr-10"
                                    placeholder="Enter your Password"
                                    name="password"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash size={24} /> : <FaEye size={24} />}
                                </button>
                            </div>
                        </div>
                        <div onClick={handleForgotPassword}>
                            <button className="btn label-text-alt text-secondary text-sm hover:text-secondary">
                                Forgot password?
                            </button>
                        </div>
                        {error && <p className="text-red-400">{error}</p>}


                        {/* Login Button */}
                        <button type="submit" className="btn btn-neutral w-full bg-gray-800 text-white border-none hover:bg-gray-700 transition-colors">
                            Sign In
                        </button>
                        <SocialLogin />


                        {/* Sign Up Link */}
                        <div className="text-center pt-4">
                            <p className="text-gray-600 text-sm">
                                Don't have an account?{' '}
                                <Link to="/auth/register" className="link text-secondary font-medium hover:text-blue-600">Register</Link>
                            </p>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;