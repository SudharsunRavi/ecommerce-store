import { ERROR_IMG } from "../utils/constants";

const Error = () => {
    return (
        <div className="w-4/12 mx-auto">
            <img src={ERROR_IMG} alt="error" ></img>
            <h1 className="text-4xl text-center font-poppins">Page not found! Please try again later.</h1>
        </div>
    );
}

export default Error