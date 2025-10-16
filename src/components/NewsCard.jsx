import { Star, Eye, Bookmark, Share2 } from 'lucide-react';

const NewsCard = ({ news }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <Star
                key={index}
                className={`w-4 h-4 ${index < rating ? 'fill-orange-400 text-orange-400' : 'fill-gray-300 text-gray-300'
                    }`}
            />
        ));
    };

    return (
        <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            {/* Author Header */}
            <div className="flex items-center justify-between p-4 pb-2">
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={news.author.img} alt={news.author.name} />
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm">{news.author.name}</h3>
                        <p className="text-xs text-gray-500">{formatDate(news.author.published_date)}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="btn btn-ghost btn-sm btn-square">
                        <Bookmark className="w-4 h-4" />
                    </button>
                    <button className="btn btn-ghost btn-sm btn-square">
                        <Share2 className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Title */}
            <div className="px-4 py-2">
                <h2 className="text-xl font-bold text-gray-800 line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                    {news.title}
                </h2>
            </div>

            {/* Image */}
            <figure className="px-4">
                <img
                    src={news.image_url}
                    alt={news.title}
                    className="rounded-lg w-full h-52 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
            </figure>

            {/* Content */}
            <div className="card-body p-4">
                <p className="text-sm text-gray-600 line-clamp-3">
                    {news.details}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                    {news.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="badge badge-outline badge-sm">{tag}</span>
                    ))}
                </div>

                <button className="text-orange-500 font-semibold text-sm mt-3 text-left hover:underline">
                    Read More
                </button>

                {/* Rating and Views */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                            {renderStars(news.rating.number)}
                        </div>
                        <span className="text-sm font-semibold">{news.rating.number}.0</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <Eye className="w-5 h-5" />
                        <span className="text-sm font-semibold">{news.total_view.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;