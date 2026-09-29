import '../styles/Call.css';

export default function CallBox({ img, number, goal, txt }) {
  return (
    <div className="callBox-card">
      <div>
        <img src={img} alt="" className='cbc-img' />
      </div>
      <div className='cb-right'>
        <div className='cbc-title'>
          <p className='cb-number'>{number}</p>
          <p className='cb-goal'>{goal}</p>
        </div>
        <p className='cb-txt'>{txt}</p>
      </div>

    </div>
  );
}