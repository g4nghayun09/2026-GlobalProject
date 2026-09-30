import "../styles/Home.css";
import Call from "../components/Call.jsx";
import Situation from "../components/Situation.jsx";
import logo from "../assets/logo.svg";
import call from "../assets/bxs_phone-call.svg";
import Police from "../assets/Police.svg";
import Emergency from "../assets/Emergency.svg";
import { useState } from "react";
import searchIcon from "../assets/Search.svg";
import Empty from "../components/Empty.jsx";

const res = await fetch("https://two026-globalproject.onrender.com/api/cards");
const situations = await res.json();
const tabs = ["전체", "범죄·사고", "분실", "자연재해"];

export default function Home() {
    const [activeTab, setActiveTab] = useState("전체");
    const [keyword, setKeyword] = useState("");

    const filtered = situations.filter(
        (item) => activeTab === "전체" || item.category === activeTab,
    );
    const tapSelectShow = () => {
        const filteredComponent = filtered.map((item) => (
            <Situation
                key={item.id}
                img={item.imageUrl}
                title={item.title}
                txt={item.content}
            />
        ));
        if (filteredComponent.length != 0) {
            return filteredComponent;
        } else {
            return <Empty />;
        }
    };
    return (
        <div className="home-card">
            <div className="header-container">
                <img src={logo} alt="" className="logo" />
            </div>

            <div className="callbox-container">
                <div className="cb-title">
                    <img src={call} alt="" className="cb-img" />
                    <p className="emergency-call">긴급 전화</p>
                </div>
                <Call
                    img={Police}
                    number="110"
                    goal="경찰"
                    txt="누르면 즉시 연결됩니다"
                ></Call>
                <Call
                    img={Emergency}
                    number="119"
                    goal="구급 · 소방"
                    txt="누르면 즉시 연결됩니다"
                ></Call>
            </div>

            <div className="search-container">
                <div className="home-search-bar">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="소매치기, 교통사고, 지진..."
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <img src={searchIcon} alt="" className="search-img" />
                </div>

                <div className="tab-container">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div
                    className={`situation-list ${filtered.length === 0 ? "empty" : ""}`}
                >
                    {tapSelectShow()}
                </div>
            </div>
        </div>
    );
}
