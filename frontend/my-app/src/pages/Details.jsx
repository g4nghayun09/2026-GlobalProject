import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "../styles/Details.css";
import logo from "../assets/logo.svg";
import back from "../assets/back-icon.svg";
import JpCard from "../components/JapanCard.jsx";
import Loading from "../components/Loading.jsx";

export default function Details() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [situation, setSituation] = useState(null);
    const [showReport, setShowReport] = useState(false);
    useEffect(() => {
        fetch(`https://two026-globalproject.onrender.com/api/cards/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setSituation(data);
            });
    }, [id]);

    if (!situation) {
        return <Loading />;
    }

    const steps = situation.howto;
    const bold = [110, 119, "경찰"];

    // 110, 119만 굵게 만드는 함수
    function boldWord(step) {
        const regex = /(110|119)/g;

        return step.split(regex).map((word, index) => {
            if (bold.includes(Number(word))) {
                return <strong key={index}>{word}</strong>;
            }

            return word;
        });
    }

    const getJapanCard = () => {
        const result = [];

        for (let i = 0; i < situation.expressions.length; i++) {
            result.push(
                <JpCard
                    key={situation.expressions[i].id}
                    japan={situation.expressions[i].japan}
                    pronounce={situation.expressions[i].japanPro}
                    korea={situation.expressions[i].korea}
                />,
            );
        }

        return result;
    };

    const getReport = () => {
        return situation.report.map((item, index) => {
            return <li key={index}>{item}</li>;
        });
    };

    return (
        <div className="details-card">
            <div className="dHeader-container">
                <img
                    src={logo}
                    alt=""
                    className="logo"
                    onClick={() => navigate("/")}
                />
            </div>

            <div className="details-content">
                <img
                    src={back}
                    alt=""
                    className="back"
                    onClick={() => navigate("/")}
                />

                <div className="div-main">
                    <div className="div-title">
                        <p className="details-title">{situation.title}</p>

                        <p className="details-txt">{situation.content}</p>
                    </div>

                    <div className="div-way">
                        <p className="details-way-title">대처방법</p>

                        <div className="steps">
                            {steps.map((step, index) => (
                                <div className="step" key={index}>
                                    <span className="step-number">
                                        {index + 1}
                                    </span>

                                    <span className="step-text">
                                        {boldWord(step)}
                                    </span>
                                </div>
                            ))}
                        </div>
                        {/* 신고 내용 버튼 */}
                        <button
                            className="report-button"
                            onClick={() => setShowReport(true)}
                        >
                            ⓘ 신고 내용
                        </button>
                    </div>
                </div>

                {/* 일본어 카드 슬라이더 */}
                <div className="jp-slider">{getJapanCard()}</div>
            </div>

            {/* 신고 내용 바텀시트 */}
            <div
                className={`report-overlay ${showReport ? "active" : ""}`}
                onClick={() => setShowReport(false)}
            >
                <div
                    className="report-sheet"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="sheet-handle"></div>

                    <p className="report-title">신고 내용</p>

                    <ul>{getReport()}</ul>
                </div>
            </div>
        </div>
    );
}
