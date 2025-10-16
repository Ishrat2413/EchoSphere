import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {

    const { id } = useParams()
    const data = useLoaderData()
    const [categoryNews, setCategoryNews] = useState([])

    useEffect(() => {
        if (id == "0") {
            setCategoryNews(data)
            return;
        }
        else if (id == "1") {
            const filteredNews = data.filter((news) => news.others.is_today_pick == true)
            setCategoryNews(filteredNews)
        }
        else {
            const filteredNews = data.filter((news) => news.category_id == id)
            setCategoryNews(filteredNews)
        }
    }, [data, id])


    return (

        <div>
            <p className="mb-5 font-bold">Total <span className="text-secondary">{categoryNews.length}</span> news found</p>
            <div className="grid grid-cols-1 space-y-3">
                {
                    categoryNews.map((news) => <NewsCard news={news} key={news.id}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;