import { formatDateTime } from "~/lib/utils/dateFormat";
import { BarChart } from "./Chart/BarChart";
import LineChart from "./Chart/LineChart";

export default function YeartaxResultChart({ data }) {
  return (
    <div className="my-10 flex flex-col gap-10">
      <BarChart data={data} />
      <LineChart data={data} />
    </div>
  );
}
