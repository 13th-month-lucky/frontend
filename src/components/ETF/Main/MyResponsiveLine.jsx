// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from "@nivo/line";
import React from "react";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const MyResponsiveLine = (props) => {
  return (
    <ResponsiveLine
      // eslint-disable-next-line react/prop-types
      data={props.data}
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      xScale={{ type: "point" }}
      xFormat=" >-"
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="cardinal"
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={null}
      enableGridX={false}
      enableGridY={false}
      colors={{ scheme: "set1" }}
      lineWidth={4}
      enablePoints={false}
      pointSize={10}
      pointColor={{ from: "color", modifiers: [] }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor", modifiers: [] }}
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      legends={[]}
    />
  );
};

export default MyResponsiveLine;
