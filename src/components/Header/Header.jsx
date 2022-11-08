import Card from "../Card/Card";
import RateCardDetail from "../CardDetail/Rate/RateCardDetail";
import ogrine from '../../assets/ogrine.svg'

const Header = () => {
    return (
        <div className="flex items-center bg-white shadow-md rounded-lg">
            <div className="flex items-center">
                <div className="flex w-[62px] h-[62px] bg-shadow bg-center mx-3">
                    <img className="m-auto w-10" src={ogrine} alt="" />
                </div>
                <h1 className="text-3xl">Taux de l'Ogrine</h1>
            </div>
            <div className="flex ml-auto">
                <Card
                    title="Taux du jour"
                    content={
                        <RateCardDetail value={505.6} percent={25.2} />
                    } />
            </div>
        </div>
    );
}

export default Header;
