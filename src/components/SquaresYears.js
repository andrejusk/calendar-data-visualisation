import React from "react";
import { ResponsiveCalendar } from "@nivo/calendar";

import data, { from, to } from "../constants/dataYears";

const BORDER_COLOUR = "#ffffff";
const EMPTY_COLOUR = "#eeeeee";
const GRADIENT = ["#006600", "#00bb00", "#00ff00"];

/// 2 year GitHub contrib-like calendar view
const SquaresYears = () => {
  return (
    <ResponsiveCalendar
      data={data}
      from={from}
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

export default SquaresYears;
