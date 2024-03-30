import { BarChart } from "./Chart/BarChart";
import LineChart from "./Chart/LineChart";

function dateFormat(date) {
  let dateFormat1 =
    date.getFullYear() +
    "." +
    (date.getMonth() < 9 ? "0" : "") +
    +(date.getMonth() + 1) +
    "." +
    date.getDate();
  return dateFormat1;
}

export default function YeartaxResultChart({ data }) {
  const transformedData = {
    labels: data.map((item) => dateFormat(new Date(item.createdDate))),
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

  return (
    <>
      <BarChart data={transformedData} />
      <LineChart data={transformedData} />
    </>
  );
}
