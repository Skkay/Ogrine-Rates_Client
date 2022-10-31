import { PropTypes } from 'prop-types';
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';
import kama_per_ogrine from '../../../assets/kama_per_ogrine.png';

const RateCardDetail = ({ value, percent }) => {
  const positive = percent >= 0;

  return (
    <>
      <span className="text-3xl">{value} <img className="inline" src={kama_per_ogrine} alt="" /></span>
      {percent &&
        <div className={`inline-block ml-3 ${positive ? 'text-green-700' : 'text-red-700'}`}>
          {positive ? <BsFillCaretUpFill className="ri" /> : <BsFillCaretDownFill className="ri" />}
          <span className="text-lg ml-1">{Math.abs(percent)}%</span>
        </div>
      }
    </>
  )
}

RateCardDetail.propTypes = {
  value: PropTypes.number.isRequired,
  percent: PropTypes.number,
}

export default RateCardDetail;
