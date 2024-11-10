import { useEffect, useState } from "react";
import { fetchOgrineRates } from "./fetch/fetchOgrineRate";
import Header from "./components/Header/Header";
import Chart from "./components/Chart/Chart";
import Card from "./components/Card/Card";
import RateCardDetail from "./components/CardDetail/Rate/RateCardDetail";
import DiscordNotification from "./components/DiscordNotification/DiscordNotification";
import SocialNetworks from "./components/SocialNetworks/SocialNetworks";

const App = () => {
    const [rates, setRates] = useState(null);

    useEffect(() => {
        fetchOgrineRates().then((data) => {
            setRates(data.rates);
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
        <>
            <div className="bg-gray-100 min-h-screen p-4">
                <header>
                    <Header currentRate={currentRate} percentEvolution={Math.round(percentEvolution * 100) / 100} />
                </header>
                <main>
                    <Chart rates={rates} avgAllTime={avgAllTime} avgLastSevenDays={avgLastSevenDays} />

                    <div className="flex flex-col sm:flex-row gap-3 justify-center mx-auto mt-3">
                        <Card
                            title="Moyenne des 7 derniers jours"
                            content={<RateCardDetail value={Math.round(avgLastSevenDays * 10) / 10} />}
                        />
                        <Card
                            title="Moyenne totale"
                            content={<RateCardDetail value={Math.round(avgAllTime * 10) / 10} />}
                        />
                    </div>
                </main>
            </div>
            <DiscordNotification />
            <SocialNetworks />
        </>
    );
};

export default App;
