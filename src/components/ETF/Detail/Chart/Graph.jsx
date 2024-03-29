import React from "react";
import { ResponsiveLine } from "@nivo/line";

import moment from "moment";

export default function Graph(props) {
  const code = props.code;
  const currentPeriod = props.currentPeriod;
  const chartData = props.chartData;
  const isFund = props.isFund;

  const periodSizes = [7, 30, 90, 180, 365];
  const size = periodSizes[currentPeriod];

  let formattedData = [];

  if (chartData.length > 0) {
    for (let i = Math.min(chartData.length - 1, size - 1); i >= 0; i--) {
      const ele = chartData[i];

      if (isFund) {
        const parsedY = parseFloat(ele.기준가.replace(",", ""));

        formattedData.push({
          x: ele.기준일,
          y: parsedY,
        });

        continue;
      }

      formattedData.push({
        x: ele.stck_bsop_date,
        y: ele.stck_clpr,
      });
    }
  }

  const data = [
    {
      id: code,
      data: formattedData,
    },
  ];

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
              <p className="text-sm">{point.data.y.toLocaleString()}원</p>
            </div>
          );
        }}
        margin={{ top: 10, right: 40, bottom: 20, left: 48 }}
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
          format: (value) => value.toLocaleString(),
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
