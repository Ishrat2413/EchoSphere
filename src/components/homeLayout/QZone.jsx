import swimmingImage from "../../assets/swimming.png"
import classImage from "../../assets/class.png"
import playImage from "../../assets/playground.png"

const QZone = () => {
    return (
        <div className="">
            <div className="divider"></div>
            <p className="font-semibold text-center text-gray-600 mb-2 text-xl">Find Usss On</p>
            <div className="flex flex-col items-center bg-base-200">
                <img src={swimmingImage} alt="" />
                <img src={classImage} alt="" />
                <img src={playImage} alt="" />
            </div>
        </div>
    );
};

export default QZone;