import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homeLayout/LeftAside";
import RightAside from "../components/homeLayout/RightAside";

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header />
                <section className="w-11/12 mx-auto">
                    <LatestNews />
                </section>
                <nav className="w-11/12 mx-auto">
                    <Navbar />
                </nav>
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-x-9 my-8">
                <aside className="col-span-3">
                    <LeftAside />
                </aside>
                <section className="col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className="col-span-3">
                    <RightAside />
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;