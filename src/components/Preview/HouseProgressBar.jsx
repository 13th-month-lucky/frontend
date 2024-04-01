import { React, useEffect } from "react";
import ApexCharts from "apexcharts";

const HouseProgressBar = ({ housingDeposit, loanResult }) => {
  console.log(housingDeposit, loanResult);
  const totalValue = 4000000; // 전체 값
  const deposit = (housingDeposit / totalValue) * 100;
  const loan = (loanResult / totalValue) * 100;
  const remainingPercentage = 100 - deposit - loan; //남은 금액
  console.log(deposit, loan, remainingPercentage);

  const getChartOptions = (deposit, loan, remainingPercentage) => {
    return {
      series: [deposit, loan, remainingPercentage],
      colors: ["#9061F9", "#16BDCA", "#808080"],
      chart: {
        height: 420,
        width: "100%",
        type: "pie",
      },
      stroke: {
        colors: ["white"],
        lineCap: "",
      },
      plotOptions: {
        pie: {
          labels: {
            show: true,
          },
          size: "100%",
          dataLabels: {
            offset: -25,
          },
        },
      },

      labels: ["주택청약공제금", "전세원리금공제금", "남은 금액"],
      dataLabels: {
        enabled: true,
        style: {
          fontFamily: "Inter, sans-serif",
        },
        formatter: (val, opt) => {
          const realValue = ((val * 4000000 * 0.01) / 10000).toFixed(0);
          return `${realValue}만원`;
        },
      },
      legend: {
        position: "bottom",
        fontFamily: "Inter, sans-serif",
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            const realValue = ((value * 4000000 * 0.01) / 10000).toFixed(0);
            return `${realValue}만원`;
          },
        },
      },
      xaxis: {
        labels: {
          formatter: function (value) {
            // console.log(value);
            return value + "만원";
          },
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
    };
  };

  useEffect(() => {
    if (
      document.getElementById("pie-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("pie-chart"),
        getChartOptions(deposit, loan, remainingPercentage)
      );
      if (deposit !== 0 || loan !== 0) {
        chart.render();
      }
    }
  }, [deposit, loan, remainingPercentage]);

  // if (
  //   document.getElementById("pie-chart") &&
  //   typeof ApexCharts !== "undefined"
  // ) {
  //   const chart = new ApexCharts(
  //     document.getElementById("pie-chart"),
  //     getChartOptions()
  //   );
  //   chart.render();
  // }

  return (
    <>
      <div className="flex justify-between items-start w-full">
        <div className="flex-col items-center">
          <div className="flex items-center mb-1">
            <div
              data-popover
              id="chart-info"
              role="tooltip"
              className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
            >
              <div data-popper-arrow></div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6" id="pie-chart"></div>
    </>
  );
};

export default HouseProgressBar;
