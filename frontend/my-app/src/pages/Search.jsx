import logo from "../assets/logo.svg";
import searchIcon from "../assets/Search.svg";
import "../styles/Search.css";
import { useState } from "react";
import Situation from "../components/Situation.jsx";
import Empty from "../components/Empty.jsx";

const res = await fetch("https://two026-globalproject.onrender.com/api/cards");
const situations = await res.json();

export default function Search() {
    const [keyword, setKeyword] = useState("");
    const [searchKeyword, setSearchKeyword] = useState("");

    const filtered = situations.filter(
        (item) => item.title.includes(searchKeyword) && searchKeyword,
    );

    const searchShow = () => {
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
        <div className="search-card">
            <div className="header-container">
                <img src={logo} alt="" className="logo" />
            </div>

            <div className="search-bar">
                <input
                    type="text"
                    className="search-input"
                    placeholder="소매치기, 교통사고, 지진..."
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />

                <img
                    src={searchIcon}
                    alt=""
                    className="search-img"
                    onClick={() => setSearchKeyword(keyword)}
                />
            </div>

            <div
                className={`situation-search-list ${filtered.length === 0 ? "empty" : ""}`}
            >
                {searchShow()}
            </div>
        </div>
    );
}
