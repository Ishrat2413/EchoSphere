import { useLoaderData, useParams } from "react-router";
import Header from "../components/Header";
import RightAside from "../components/homeLayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useEffect, useState } from "react";

const NewsDetails = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const [news, setNews] = useState({})
    useEffect(() => {
        const newsDetails = data.find((singleNews) => singleNews.id == id)
        setNews(newsDetails)
    }, [data, id])
    return (
        <div className="mt-5">
            <header>
                <Header />
            </header>
            <main className="w-10/12 mx-auto grid grid-cols-12 gap-x-10 mb-4">
                <section className="col-span-9">
                    <h2 className="font-bold text-secondary text-xl my-5">EchoSphere News</h2>
                    <NewsDetailsCard news={news} />
                </section>
                <aside className="col-span-3">
                    <RightAside />
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;