import React from "react";
import { ResponsiveTimeRange } from "@nivo/calendar";

import data, { to } from "../constants/dataYears";

const BORDER_COLOUR = "#ffffff";
const EMPTY_COLOUR = "#eeeeee";
const GRADIENT = ["#006600", "#00bb00", "#00ff00"];

/// Return date 4 weeks ago from input
const fourWeeksAgo = (date) =>
  new Date(new Date(to) - 2.419 * 10 ** 9).toISOString();

/// 4 week GitHub contrib-like week view
const SquaresWeek = () => {
  return (
    <ResponsiveTimeRange
      direction="vertical"
      data={data}
      from={fourWeeksAgo(to)}
      to={to}
      // null is reserved colour (light grey)
      emptyColor={EMPTY_COLOUR}
      // 0 is first element
      // max is last element
      // colours are picked based on place in range
      colors={GRADIENT}
      margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
      yearSpacing={32}
      monthBorderColor={BORDER_COLOUR}
      dayBorderWidth={4}
      dayBorderColor={BORDER_COLOUR}
      legends={[
        {
          anchor: "bottom-right",
          direction: "row",
          translateY: 36,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: "right-to-left"
        }
      ]}
    />
  );
};

export default SquaresWeek;
