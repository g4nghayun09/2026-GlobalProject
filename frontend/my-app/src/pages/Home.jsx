import "../styles/Home.css";
import Call from "../components/Call.jsx";
import Situation from "../components/Situation.jsx";
import logo from "../assets/logo.svg";
import call from "../assets/bxs_phone-call.svg";
import Police from "../assets/Police.svg";
import Emergency from "../assets/Emergency.svg";
import car from "../assets/Car.svg";
import fight from "../assets/Fight.svg";
import fire from "../assets/Fire.svg";
import eye from "../assets/Eye.svg";
import { useState } from "react";
import searchIcon from "../assets/Search.svg";

// import Empty from "../components/Empty.jsx";

const situations = [
    {
        id: 1,
        img: car,
        title: "교통사고",
        txt: "자동차·자전거·보행자 사고 등 교통사고가 발생한 경우",
        category: "범죄·사고",
    },
    {
        id: 2,
        img: fight,
        title: "폭행·위협",
        txt: "폭행을 당했거나 위협을 받고 있을 때",
        category: "범죄·사고",
    },
    {
        id: 3,
        img: fire,
        title: "화재",
        txt: "화재가 발생했을 때",
        category: "범죄·사고",
    },
    {
        id: 4,
        img: eye,
        title: "범죄목격",
        txt: "범죄가 발생하는 것을 목격했거나 범죄 상황을 발견한 경우",
        category: "범죄·사고",
    },
];
const tabs = ["전체", "범죄·사고", "분실·도난", "자연재해"];

export default function Home() {
    const [activeTab, setActiveTab] = useState("전체");
    const [keyword, setKeyword] = useState("");

    const filtered = situations.filter(
        (item) =>
            (activeTab === "전체" || item.category === activeTab) &&
            item.title.includes(keyword),
    );
    const tapSelectShow = () => {
        const filteredComponent = filtered.map((item) => (
            <Situation
                key={item.id}
                img={item.img}
                title={item.title}
                txt={item.txt}
            />
        ));
        if (filteredComponent.length != 0) {
            return filteredComponent;
        } else {
            return (
                <>
                    <p>없음</p>
                </>
            );
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
                <div className="search-bar">
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

                <div className="situation-list">{tapSelectShow()}</div>
            </div>
        </div>
    );
}
