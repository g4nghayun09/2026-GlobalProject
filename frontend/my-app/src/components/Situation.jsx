import "../styles/Situation.css";

export default function CallBox({ img, title, txt, onClick }) {
    return (
        <div className="situation-card" onClick={onClick}>
            <div>
                <img src={img} alt="" className="s-img" />
            </div>
            <div className="s-right">
                <p className="s-title">{title}</p>
                <p className="s-txt">{txt}</p>
            </div>
        </div>
    );
}
