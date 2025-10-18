import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import SocialLogin from "../components/homeLayout/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value
        // console.log(name, photoURL, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user
                // console.log("data",user)
                alert("You have Registered Successfully!")
                updateUser({ displayName: name, photoURL: photoURL })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photoURL })
                        navigate("/")
                    })
                    .catch((error) => {
                        console.log(error)
                        setUser(user)
                    })

            })
            .catch((error) => {
                const errorMessage = error.message
                console.log(errorMessage)
            })
    }
    return (
        <div className="min-h-screen flex mt-4 justify-center bg-gray-50 p-4">
            <div className="card bg-white w-full max-w-sm shadow-lg rounded-lg border border-gray-200">
                {/* Simple Header */}
                <div className="p-6 text-center border-b border-gray-100">
                    <h1 className="text-2xl font-semibold text-gray-800">Welcome</h1>
                    <p className="text-gray-500 text-sm mt-1">Register your Account</p>
                </div>

                <div className="card-body p-6">
                    <form onSubmit={handleRegister} className="space-y-4">
                        {/* Name Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700 font-medium">Your Name</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                placeholder="Enter your Name"
                                name="name"
                                required
                            />
                        </div>
                        {/* Photo URL Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700 font-medium">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                placeholder="Give your photo URL"
                                name="photoURL"
                                required
                            />
                        </div>
                        {/* Email Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700 font-medium">Email</span>
                            </label>
                            <input
                                type="email"
                                className="input input-bordered w-full"
                                placeholder="Enter your Email"
                                name="email"
                                required
                            />
                        </div>

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
                                    {showPassword ? <FaEyeSlash size={24}/> : <FaEye size={24}/>}
                                </button>
                            </div>
                        </div>

                        {/* Login Button */}
                        <button type="submit" className="btn btn-neutral w-full bg-gray-800 text-white border-none hover:bg-gray-700 transition-colors">
                            Register
                        </button>
                        <SocialLogin />
                        {/* Sign Up Link */}
                        <div className="text-center pt-4">
                            <p className="text-gray-600 text-sm">
                                Already have an Account?{' '}
                                <Link to="/auth/login" className="link text-secondary font-medium hover:text-blue-600">Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;