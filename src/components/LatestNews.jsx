import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className="flex items-center gap-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg shadow-md my-6 overflow-hidden">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 font-bold text-lg flex items-center gap-2 shadow-lg">
                Latest
            </div>
            <Marquee className="py-3 font-semibold text-gray-800" pauseOnHover={true} speed={50}>
                <span className="mx-8 hover:text-red-500 transition-colors cursor-pointer">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo cupiditate impedit repellendus vel dolore dignissimos, veniam quidem quo unde dicta!
                </span>
                <span className="mx-8 hover:text-red-500 transition-colors cursor-pointer">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo cupiditate impedit repellendus vel dolore dignissimos, veniam quidem quo unde dicta!
                </span>
                <span className="mx-8 hover:text-red-500 transition-colors cursor-pointer">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo cupiditate impedit repellendus vel dolore dignissimos, veniam quidem quo unde dicta!
                </span>
            </Marquee>
        </div>
    );
};

export default LatestNews;