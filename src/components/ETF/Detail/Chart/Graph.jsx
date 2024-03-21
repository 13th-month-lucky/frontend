import React from "react";
import { ResponsiveLine } from "@nivo/line";

import moment from "moment";

export default function Graph(props) {
  const code = props.code;
  const currentPeriod = props.currentPeriod;
  const chartData = props.chartData;

  const periodSizes = [7, 30, 90, 180, 365];
  const size = periodSizes[currentPeriod];

  let data = [
    {
      id: "loading",
      data: [{ x: 1, y: 1 }],
    },
  ];
  let formattedData = [];

  for (
    let i = Math.max(chartData.length - size, 0);
    i < chartData.length;
    i++
  ) {
    const ele = chartData[i];

    formattedData.push({
      x: ele.stck_bsop_date,
      y: ele.stck_clpr,
    });
  }

  data = [
    {
      id: code,
      data: formattedData,
    },
  ];
  console.log("data: ", data);

  return (
    <div className="w-full h-96">
      <ResponsiveLine
        data={data}
        tooltip={({ point }) => {
          const formattedDate = moment(point.data.x, "YYYYMMDD").format(
            "YYYY.MM.DD"
          );
          const color = point.borderColor;

          return (
            <div
              className="bg-white border rounded-md p-1 text-center"
              style={{ borderColor: color }}
            >
              <p className="text-xs">{formattedDate}</p>
              <p className="text-sm">{point.data.y}원</p>
            </div>
          );
        }}
        margin={{ top: 40, right: 40, bottom: 20, left: 40 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="linear"
        axisTop={null}
        enableGridX={false}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendOffset: -40,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        colors={{ scheme: "accent" }}
        enablePoints={false}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[]}
      />
    </div>
  );
}
