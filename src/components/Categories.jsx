import { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json())

const Categories = () => {
    const category = use(categoryPromise)
    return (
        <div className="bg-base-100 p-5 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-5">
                <p className="font-bold text-xl">All Category</p>
                <span className="badge badge-primary">{category.length}</span>
            </div>
            <div className="flex flex-col gap-2">
                {
                    category.map((category) =>
                        <NavLink
                            key={category.id}
                            className={({isActive}) => 
                                `btn justify-start text-left border border-gray-200 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 ${
                                    isActive ? 'bg-primary text-white border-primary' : 'bg-base-100 text-gray-700'
                                }`
                            }
                            to={`/category/${category.id}`}>
                            <span className="font-semibold">{category.name}</span>
                        </NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;