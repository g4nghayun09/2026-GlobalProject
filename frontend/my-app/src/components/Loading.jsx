import "../styles/Loading.css";
import logo from "../assets/logo.svg";

export default function Loading() {
    return (
        <div className="loading">
            <img src={logo} alt="" className="load-img" />
            <p className="load-text">잠시만 기다려주세요...</p>
        </div>
    );
}
