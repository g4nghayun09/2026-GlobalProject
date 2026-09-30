import "../styles/Loading.css";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Loading() {
    const navigate = useNavigate();
    return (
        <div className="loading">
            <img src={logo} alt="" className="load-img" onClick={() => navigate("/")}/>
            <p className="load-text">잠시만 기다려주세요...</p>
        </div>
    );
}
