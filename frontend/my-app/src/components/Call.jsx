import "../styles/Call.css";

export default function CallBox({ img, number, goal, txt }) {
    const callNumber = () => {
        window.location.href = `tel:${number}`;
    };

    return (
        <div className="callBox-card" onClick={callNumber}>
            <div>
                <img src={img} alt="" className="cbc-img" />
            </div>
            <div className="cb-right">
                <div className="cbc-title">
                    <p className="cb-number">{number}</p>
                    <p className="cb-goal">{goal}</p>
                </div>
                <p className="cb-txt">{txt}</p>
            </div>
        </div>
    );
}
