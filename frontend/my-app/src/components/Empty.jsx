import "../styles/Empty.css";
import empty_img from "../assets/empty-icon.svg";

export default function Empty() {
  return (
    <div className="empty">
      <img src={empty_img} alt="" className="no-img"/>
      <p className='no-result'>검색 결과가 없습니다</p>
    </div>
  );
}