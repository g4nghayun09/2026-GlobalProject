import { useState } from "react";

import "../styles/Details.css";

import logo from "../assets/logo.svg";
import back from "../assets/back-icon.svg";

import JpCard from "../components/JapanCard.jsx";

export default function Details() {
  const steps = [
    "안전한 장소로 이동하고 2차 사고를 피한다.",
    "부상자가 있으면 119에 신고한다.",
    "경찰 110에 사고를 신고한다.",
    "사고 장소와 상황, 상대방 정보를 확인한다.",
    "경찰의 안내에 따라 사고 처리를 진행한다.",
  ];

  const bold = [110, 119, '경찰'];

  const [showReport, setShowReport] = useState(false);

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

  return (
    <div className="details-card">
      <div className="dHeader-container">
        <img src={logo} alt="" className="logo" />
      </div>

      <div className="details-content">
        <img src={back} alt="" className="back" />

        <div className="div-main">
          <div className="div-title">
            <p className="details-title">교통사고</p>

            <p className="details-txt">
              자동차·오토바이·자전거·보행자와 관련된 교통사고가
              발생한 경우
            </p>
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
          </div>
        </div>

        {/* 일본어 카드 슬라이더 */}
        <div className="jp-slider">
          <JpCard
            japan="交通事故が起きました。"
            pronounce="코오츠우 지코가 오키마시타."
            korea="교통사고가 발생했어요."
          />

          <JpCard
            japan="交通事故が起きました。"
            pronounce="코오츠우 지코가 오키마시타."
            korea="교통사고가 발생했어요."
          />

          <JpCard
            japan="交通事故が起きました。"
            pronounce="코오츠우 지코가 오키마시타."
            korea="교통사고가 발생했어요."
          />

          <JpCard
            japan="交通事故が起きました。"
            pronounce="코오츠우 지코가 오키마시타."
            korea="교통사고가 발생했어요."
          />

          <JpCard
            japan="交通事故が起きました。"
            pronounce="코오츠우 지코가 오키마시타."
            korea="교통사고가 발생했어요."
          />
        </div>

        {/* 신고 내용 버튼 */}
        <button
          className="report-button"
          onClick={() => setShowReport(true)}
          // onClick={() => setShowReport(false)}
        >
          ⓘ 신고 내용
        </button>
        
      </div>

      {/* 신고 내용 바텀시트 */}
      {showReport && (
        <div
          className="report-overlay"
          onClick={() => setShowReport(false)}
        >
          <div
            className="report-sheet"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sheet-handle"></div>

            <p className="report-title">신고 내용</p>

            <ul>
              <li>사고가 발생한 장소</li>
              <li>사고가 발생한 시간</li>
              <li>사고 상황</li>
              <li>차량·자전거 등의 종류</li>
              <li>상대방의 특징 및 차량 정보</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}