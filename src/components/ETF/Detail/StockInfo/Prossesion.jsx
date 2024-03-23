import React from "react";

import { ResponsivePie } from "@nivo/pie";

export default function Prossesion(props) {
  const ratio = props.ratio;

  const data = [];

  for (let i = 0; i < Math.min(10, ratio.length); i++) {
    const ele = ratio[i];
    const formattedEle = {
      id: ele.companyName,
      value: parseFloat(ele.percentage.replace("%", "")),
    };

    data.push(formattedEle);
  }

  return (
    <div className="mb-16">
      <p className="font-bold text-2xl">보유비중 TOP 10</p>

      <div className="w-full" style={{ height: "440px" }}>
        <ResponsivePie
          data={data}
          tooltip={(point) => {
            const id = point.datum.data.id;
            const value = point.datum.data.value;
            const color = point.datum.color;
            return (
              <div
                className="bg-white border rounded-md text-xs p-1 text-center"
                style={{ borderColor: color }}
              >
                <p className="text-xs font-semibold">{id}</p>
                <div className="flex justify-center">
                  <div
                    className="w-3 h-3 mt-1 rounded-full bg-black mr-1"
                    style={{ backgroundColor: color }}
                  ></div>

                  <p className="text-sm font-bold">{value}%</p>
                </div>
              </div>
            );
          }}
          arcLabel={(item) => `${item.value}%`}
          margin={{ top: 20, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.4}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          colors={{ scheme: "accent" }}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          arcLinkLabelsStraightLength={10}
          arcLinkLabelsSkipAngle={14}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={16}
          arcLinkLabelsDiagonalLength={12}
          arcLinkLabelsTextOffset={2}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          legends={[]}
        />
      </div>
    </div>
  );
}
