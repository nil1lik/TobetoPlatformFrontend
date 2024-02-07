import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import {
  getRandomInt,
  getRange,
  shiftDate,
} from "../../../utilities/Helpers/heatMap";

type Props = {};

const ProfileHeatMap = (props: Props) => {
  const today = new Date();

  const randomValues = getRange(200).map((index) => {
    return {
      date: shiftDate(today, -index),
      count: getRandomInt(1, 3),
    };
  });

  return (
    <CalendarHeatmap
      showMonthLabels={false}
      startDate={shiftDate(today, -150)}
      endDate={today}
      values={randomValues}
      classForValue={value => {
        if (!value) {
          return 'color-empty';
        }
        return `color-github-${value.count}`;
      }}
      tooltipDataAttrs={(value: any) => {
        return {
          "data-tip": `${value.date.toISOString().slice(0, 10)} has count: ${
            value.count
          }`,
        };
      }}
    />
  );
};

export default ProfileHeatMap;