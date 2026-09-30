import logo from "../assets/logo.svg";
import searchIcon from "../assets/Search.svg";
import "../styles/Search.css";

import { useState, useEffect } from "react";
import Situation from "../components/Situation.jsx";
import Empty from "../components/Empty.jsx";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Search() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    // 실제 검색에 사용되는 검색어
    const keyword = searchParams.get("keyword") || "";

    // 검색창에 현재 입력되어 있는 값
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    const [situations, setSituations] = useState([]);

    useEffect(() => {
        fetch(
            `https://two026-globalproject.onrender.com/api/cards/search?keyword=${encodeURIComponent(keyword.split())}`,
        )
            .then((res) => res.json())
            .then((data) => {
                setSituations(data);
            });
    }, [keyword]);

    const searchShow = () => {
        if (situations.length === 0) {
            return <Empty />;
        }

        return situations.map((item) => (
            <Situation
                key={item.id}
                img={item.imageUrl}
                title={item.title}
                txt={item.content}
            />
        ));
    };

    const handleSearch = () => {
        navigate(`/search?keyword=${encodeURIComponent(searchKeyword)}`);
    };

    return (
        <div className="search-card">
            <div className="header-container">
                <img
                    src={logo}
                    alt=""
                    className="logo"
                    onClick={() => navigate("/")}
                />
            </div>

            <div className="search-bar">
                <input
                    type="text"
                    className="search-input"
                    placeholder="소매치기, 교통사고, 지진..."
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                />

                <img
                    src={searchIcon}
                    alt=""
                    className="search-img"
                    onClick={handleSearch}
                />
            </div>

            <div
                className={`situation-search-list ${
                    situations.length === 0 ? "empty" : ""
                }`}
            >
                {searchShow()}
            </div>
        </div>
    );
}
