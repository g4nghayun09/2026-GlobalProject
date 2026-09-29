import "../styles/JapanCard.css";

export default function JapanCard({japan, pronounce, korea}) {
  return (
    <div className="japan-card">
      <p className="jc-japan">{japan}</p>
      <p className="jc-pronounce">{pronounce}</p>
      <p className="jc-korea">{korea}</p>
    </div>
  );
}