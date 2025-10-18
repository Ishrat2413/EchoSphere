import { FaStar, FaEye, FaCalendarAlt, FaArrowLeft } from "react-icons/fa";

const NewsDetailsCard = ({ news }) => {
    const {
        title,
        rating,
        total_view,
        author,
        image_url,
        details,
        tags
    } = news || {};

    // Format date
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const handleGoHome = () => {
        window.location.href = '/';
    };

    return (
        <div className=" bg-white rounded-lg border-2 border-gray-200 shadow-xl">

            {/* News Image - Smaller Size */}
            <div className="relative h-64 w-full border-b-2 border-gray-200">
                <img
                    src={image_url}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                {/* Badge */}
                {rating?.badge && (
                    <div className="absolute top-4 right-4">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md capitalize border border-red-700">
                            {rating.badge}
                        </span>
                    </div>
                )}
            </div>

            {/* Content Container */}
            <div className="p-6">
                {/* Title */}
                <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-4 border-b border-gray-200 pb-4">
                    {title}
                </h1>

                {/* Author and Meta Info */}
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-200">
                    <img
                        src={author?.img}
                        alt={author?.name}
                        className="w-10 h-10 rounded-full border-2 border-gray-300 shadow-sm"
                    />
                    <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{author?.name}</h3>
                        <div className="flex flex-wrap items-center gap-3 mt-1 text-gray-600 text-sm">
                            <div className="flex items-center gap-1">
                                <FaCalendarAlt className="text-gray-500" />
                                <span>{formatDate(author?.published_date)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <FaStar className="text-yellow-500" />
                                <span>{rating?.number}/5 Rating</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <FaEye className="text-gray-500" />
                                <span>{total_view?.toLocaleString()} Views</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* News Content */}
                <div className="mb-6">
                    <p className="text-gray-700 leading-7 text-base">
                        {details}
                    </p>
                </div>

                {/* Tags */}
                <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                        {tags?.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium border border-gray-300 hover:bg-gray-200 transition-colors cursor-pointer"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
                {/* Go Home Button */}
                <div className="py-4 border-b border-gray-200">
                    <button
                        onClick={handleGoHome}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-200 shadow-sm"
                    >
                        <FaArrowLeft className="text-sm" />
                        Back to Category
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsCard;