import { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {

    // if user logged in, return to children
    const { user, loading } = use(AuthContext)
    const location = useLocation()
    if (loading) {
        return <Loading />
    }
    if (user && user?.email) {
        return children;
    }
    // else navigate to login
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoute;