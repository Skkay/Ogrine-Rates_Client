import { PropTypes } from 'prop-types';
import HeaderCard from "../Card/HeaderCard";
import RateCardDetail from "../CardDetail/Rate/RateCardDetail";
import ogrine from '../../assets/ogrine.svg'

const Header = ({ currentRate, percentEvolution }) => {
    return (
        <div className="flex items-center bg-white shadow-md rounded-lg">
            <div className="flex items-center">
                <div className="flex w-[62px] h-[62px] bg-shadow bg-center mx-3">
                    <img className="m-auto w-10" src={ogrine} alt="" />
                </div>
                <h1 className="text-3xl hidden sm:block">Taux de l'Ogrine</h1>
            </div>
            <div className="ml-auto flex-1 sm:flex-none p-3">
                <HeaderCard
                    title="Taux du jour"
                    content={
                        <RateCardDetail value={currentRate} percent={percentEvolution} />
                    } />
            </div>
        </div>
    );
}

Header.propTypes = {
    currentRate: PropTypes.number.isRequired,
    percentEvolution: PropTypes.number.isRequired,
};

export default Header;
