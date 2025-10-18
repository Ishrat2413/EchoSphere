import { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json())

const Categories = () => {
    const category = use(categoryPromise)
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
                <p className="font-bold text-xl text-gray-800">All Category</p>
                <span className="badge badge-primary">{category.length}</span>
            </div>
            <div className="flex flex-col gap-3">
                {
                    category.map((category) =>
                        <NavLink
                            key={category.id}
                            className={({isActive}) => 
                                `btn justify-start text-left border border-gray-200 hover:border-primary hover:bg-accent hover:text-white transition-all duration-300 ${
                                    isActive ? 'bg-primary text-white border-primary' : 'bg-white text-gray-700'
                                }`
                            }
                            to={`/category/${category.id}`}>
                            <span className="font-semibold text-sm lg:text-base">{category.name}</span>
                        </NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;