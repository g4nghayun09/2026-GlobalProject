import '../styles/Situation.css';
import { useNavigate } from 'react-router-dom';

export default function Situation({ data, img, title, txt }) {
  let navigate = useNavigate();

  return (
    <div
      className="situation-card"
      onClick={() => {
        navigate('/Details', {
          state: {
            present: data
          },
        });
      }}
    >

      <div>
        <img src={img} alt="" className='s-img' />
      </div>
      <div className='s-right'>
        <p className='s-title'>{title}</p>
        <p className='s-txt'>{txt}</p>
      </div>

    </div>
  );
}