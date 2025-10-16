import FindUs from "./FindUs";
import QZone from "./QZone";
import SocialLogin from "./SocialLogin";

const RightAside = () => {
    return (
        <div className="space-y-5">
            <SocialLogin />
            <FindUs />
            <QZone />
        </div>
    );
};

export default RightAside;