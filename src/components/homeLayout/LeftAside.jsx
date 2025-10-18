import { Suspense } from "react";
import Categories from "../Categories";

const LeftAside = () => {
    return (
        <div className="sticky top-2">
            <Suspense fallback={<span className="loading loading-dots loading-xl mx-auto"></span>}>
                <Categories />
            </Suspense>
        </div>
    );
};

export default LeftAside;