import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <div className="divider"></div>
            <p className="font-semibold text-center text-gray-600 mb-2">Find Usss On</p>
            <div>
                <div className="join join-vertical w-full">
                    <button className="btn bg-base-100 justify-start"><FaFacebook size={22}/> Facebook</button>
                    <button className="btn bg-base-100 justify-start"><FaTwitter size={22}/> Twitter</button>
                    <button className="btn bg-base-100 justify-start"><FaInstagram size={22}/> Instagram</button>
                </div>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default FindUs;