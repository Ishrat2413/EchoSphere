import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import About from "../pages/About";
import Career from "../pages/Career";
import Loading from "../pages/Loading";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout />,
            children: [
                {
                    path: "/",
                    Component: Home,
                },
                {
                    path: "/about",
                    Component: About,
                },
                {
                    path: "/career",
                    Component: Career,
                },
                {
                    path: "/category/:id",
                    Component: CategoryNews,
                    loader: () => fetch("/news.json"),
                    hydrateFallbackElement: <Loading />
                },
            ]
        },
        {
            path: "/auth",
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    path: "/auth/login",
                    Component: Login
                },
                {
                    path: "/auth/register",
                    Component: Register
                },

            ]
        },
        {
            path: "/news-details/:id",
            element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
            loader: () => fetch("/news.json"),
            hydrateFallbackElement: <Loading />
        },
        {
            path: "/*",
            element: <h2>Error404</h2>
        },
    ]
)
export default router;