import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import { activityList } from "../../../utilities/Constants/activityList";
import {
  activityCount,
  noData,
  youDontHaveAnyActivity,
} from "../../../utilities/Constants/constantValues";

const ProfileHeatMap: React.FC = () => {
  const today = new Date();
  const startDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 371
  );

  const values = Array.from({ length: 371 }, (_, index) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + index);
    const dateString = date.toISOString().slice(0, 10);
    const activity = activityList.find(
      (activity) => activity.date === dateString
    );
    const count = activity ? activity.count : 0; // Aktivite varsa count değerini al, yoksa 0
    return { date: dateString, count };
  });

  // Stil sınıfı belirleme işlevi
  const classForValue = (value: any): string => {
    if (!value || value.count === 0) {
      return "color-empty rect-radius";
    }
    const colorClass = `color-scale-${Math.ceil(value.count / 5)} rect-radius`;
    return colorClass;
  };
  const titleForValue = (value: any) => {
    if (!value || value.count === undefined) {
      return noData;
    }
    return value.count
      ? `${value.date} : ${value.count} ${activityCount}`
      : `${youDontHaveAnyActivity} : ${value.count}`;
  };

  return (
    <CalendarHeatmap
      startDate={startDate}
      endDate={today}
      showMonthLabels={false}
      showWeekdayLabels={false}
      values={values}
      classForValue={classForValue}
      titleForValue={titleForValue}
    />
  );
};

export default ProfileHeatMap;
