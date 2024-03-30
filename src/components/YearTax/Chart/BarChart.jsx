import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { formatDateTime } from "~/lib/utils/dateFormat";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y",
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "막대 차트",
    },
  },
};

export function BarChart({ data }) {
  const transformedData = {
    labels: data.map((item) => formatDateTime(item.createdDate)),
    datasets: [
      {
        label: "돌려받은 돈",
        data: data.map((item) => item.돌려받은돈),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
      {
        label: "총급여",
        data: data.map((item) => item.총급여),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y",
      },
    ],
  };

  return <Bar options={options} data={transformedData} />;
}
