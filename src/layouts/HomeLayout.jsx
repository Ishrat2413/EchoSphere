// import { Outlet } from "react-router";
// import Header from "../components/Header";
// import LatestNews from "../components/LatestNews";
// import Navbar from "../components/Navbar";
// import LeftAside from "../components/homeLayout/LeftAside";
// import RightAside from "../components/homeLayout/RightAside";

// const HomeLayout = () => {
//     return (
//         <div>
//             <header>
//                 <Header />
//                 <section className="w-11/12 mx-auto">
//                     <LatestNews />
//                 </section>
//                 <nav className="w-11/12 mx-auto">
//                     <Navbar />
//                 </nav>
//             </header>
//             <main className="w-11/12 mx-auto grid grid-cols-12 gap-x-9 my-8">
//                 <aside className="col-span-3 sticky top-0 h-fit">
//                     <LeftAside />
//                 </aside>
//                 <section className="col-span-6">
//                     <Outlet></Outlet>
//                 </section>
//                 <aside className="col-span-3 sticky top-0 h-fit">
//                     <RightAside />
//                 </aside>
//             </main>
//         </div>
//     );
// };

// export default HomeLayout;

import { Link, Outlet, useNavigation } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homeLayout/LeftAside";
import RightAside from "../components/homeLayout/RightAside";
import { useState } from "react";
import Loading from "../pages/Loading";

const HomeLayout = () => {
    const { state } = useNavigation()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsSidebarOpen(false)}
                >
                    <div
                        className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Mobile Sidebar Header */}
                        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                            <h3 className="text-xl font-bold text-gray-800">Menu</h3>
                            <button
                                onClick={() => setIsSidebarOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-lg"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Mobile Navigation */}
                        <div className="p-4 border-b border-gray-200">
                            <div className="flex flex-col gap-2">
                                <Link to="/category/1">
                                    <button className="w-full btn justify-start text-left hover:bg-blue-50 hover:text-blue-600">
                                        Home
                                    </button>
                                </Link>
                                <Link to="/about">
                                    <button className="w-full btn justify-start text-left hover:bg-blue-50 hover:text-blue-600">
                                        About
                                    </button>
                                </Link>
                                <Link to="/career">
                                    <button className="w-full btn justify-start text-left hover:bg-blue-50 hover:text-blue-600">
                                        Career
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Left Aside Content */}
                        <div className="p-4 border-b border-gray-200">
                            <LeftAside />
                        </div>

                        {/* Right Aside Content */}
                        <div className="p-4">
                            <RightAside />
                        </div>
                    </div>
                </div>
            )}

            <header className="bg-white shadow-sm">
                <Header />
                <section className="w-11/12 mx-auto">
                    <LatestNews />
                </section>
                <nav className="w-11/12 mx-auto py-4">
                    <Navbar />
                </nav>
            </header>

            {/* Mobile Menu Button */}
            <div className="lg:hidden fixed bottom-6 right-6 z-30">
                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="bg-secondary text-white p-4 rounded-full shadow-lg hover:bg-primary transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <main className="w-11/12 mx-auto my-6 lg:my-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 flex flex-col gap-6">
                    {/* Left Aside  */}
                    <aside className="lg:col-span-3 hidden lg:block">
                        <LeftAside />
                    </aside>

                    {/* Main Content */}
                    <section className="lg:col-span-6 col-span-full">
                        {state == "loading"? < Loading /> : <Outlet></Outlet>}
                    </section>

                    {/* Right Aside */}
                    <aside className="lg:col-span-3 hidden lg:block">
                        <RightAside />
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default HomeLayout;