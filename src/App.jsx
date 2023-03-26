import { useEffect, useState } from "react";
import { fetchOgrineRates, fetchSevenDaysForecast } from "./fetch/fetchOgrineRate";
import Header from "./components/Header/Header";
import Chart from "./components/Chart/Chart";
import Card from "./components/Card/Card";
import RateCardDetail from "./components/CardDetail/Rate/RateCardDetail";

const App = () => {
    const [rates, setRates] = useState(null);
    const [sevenDaysForecastRates, setSevenDaysForecastRates] = useState(null);

    useEffect(() => {
        fetchOgrineRates().then((data) => {
            setRates(data.rates);
        });

        fetchSevenDaysForecast().then((data) => {
            setSevenDaysForecastRates(data);
        });
    }, []);

    if (rates === null) {
        return <div>Loading...</div>;
    }

    const currentRate = rates.at(-1).rate;
    const previousRate = rates.at(-2).rate;

    const percentEvolution = ((currentRate - previousRate) / previousRate) * 100;

    const avgAllTime = rates.reduce((acc, rate) => acc + rate.rate, 0) / rates.length;
    const avgLastSevenDays = rates.slice(-7).reduce((acc, rate) => acc + rate.rate, 0) / 7;

    return (
        <div className="bg-gray-100 min-h-screen p-4">
            <header>
                <Header currentRate={currentRate} percentEvolution={Math.round(percentEvolution * 100) / 100} />
            </header>
            <main>
                <Chart rates={rates} avgAllTime={avgAllTime} avgLastSevenDays={avgLastSevenDays} sevenDaysForecastRates={sevenDaysForecastRates} />

                <div className="flex items-center mt-3">
                    <div className="flex mx-auto">
                        <Card
                            title="Moyenne des 7 derniers jours"
                            content={<RateCardDetail value={Math.round(avgLastSevenDays * 10) / 10} />}
                        />
                        <Card
                            title="Moyenne totale"
                            content={<RateCardDetail value={Math.round(avgAllTime * 10) / 10} />}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;
