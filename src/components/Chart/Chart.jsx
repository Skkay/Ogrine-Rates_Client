import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const Chart = ({ rates, avgAllTime, avgLastSevenDays }) => {
    const data = rates.map((item) => [Date.parse(item.datetime), item.rate]);

    const plotLineAverageAllTime = {
        id: 'pl_averageAllTime',
        color: '#000000',
        width: 1,
        zIndex: 1,
        value: avgAllTime,
    };

    const plotLineAverageLastSevenDays = {
        id: 'pl_averageLastSevenDays',
        color: '#C3303E',
        width: 1,
        zIndex: 1,
        value: avgLastSevenDays,
    };

    const options = {
        series: [{
            name: 'Cours',
            data: data,
        }, {
            name: 'Moyenne (totale)',
            color: plotLineAverageAllTime.color,
            events: {
                legendItemClick: function () {
                    if (this.visible) {
                        this.yAxis.removePlotLine(plotLineAverageAllTime.id);
                    } else {
                        this.yAxis.addPlotLine(plotLineAverageAllTime);
                    }
                },
            },
        }, {
            name: 'Moyenne (7 derniers jours)',
            color: plotLineAverageLastSevenDays.color,
            events: {
                legendItemClick: function () {
                    if (this.visible) {
                        this.yAxis.removePlotLine(plotLineAverageLastSevenDays.id);
                    } else {
                        this.yAxis.addPlotLine(plotLineAverageLastSevenDays);
                    }
                },
            },
        }],
        legend: {
            enabled: true,
        },
        tooltip: {
            formatter: function () {
                const date = new Date(this.x);
                return `${date.toLocaleDateString()}: ${this.y} ${this.y < 2 ? 'Kama' : 'Kamas'}`;
            },
        },
        xAxis: {
            title: {
                text: '<b>Date</b>',
            },
            type: 'datetime',
        },
        yAxis: {
            title: {
                text: '<b>Kamas</b>',
            },
            opposite: false,
            plotLines: [plotLineAverageAllTime, plotLineAverageLastSevenDays],
        },
        rangeSelector: {
            floating: true,
            verticalAlign: 'top',
            selected: 0,
        },
    };

    return (
        <div className="bg-white shadow-md rounded-lg mt-3 p-3">
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'stockChart'}
                options={options}
            />
        </div>
    );
};

export default Chart;
