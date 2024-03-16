import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { DefaultizedPieValueType } from "@mui/x-charts";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { BarChart } from '@mui/x-charts/BarChart';

// LINE CHART
const LData1 = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const LData2 = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const LLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

// PIE CHART
const data = [
  { label: "Group A", value: 400, color: "#0088FE" },
  { label: "Group B", value: 300, color: "#00C49F" },
  { label: "Group C", value: 300, color: "#FFBB28" },
  { label: "Group D", value: 200, color: "#FF8042" },
];

const sizing = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  legend: { hidden: true },
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params: DefaultizedPieValueType) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

//BAR CHART
const BData1 = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const BLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];


type Props = {};

const AdminDashboard = (props: Props) => {
  return (
    <>
      <div>
        <LineChart
          width={500}
          height={300}
          series={[
            { data: LData1, label: "pv" },
            { data: LData2, label: "uv" },
          ]}
          xAxis={[{ scaleType: "point", data: LLabels }]}
        />
      </div>
      <div>
        <PieChart
          series={[
            {
              outerRadius: 80,
              data,
              arcLabel: getArcLabel,
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: "white",
              fontSize: 14,
            },
          }}
          {...sizing}
        />
      </div>
      <div>
        <BarChart
          width={500}
          height={300}
          series={[
            { data: BData1, label: "pv", id: "pvId" },
          ]}
          xAxis={[{ data: BLabels, scaleType: "band" }]}
        />
      </div>
      <div></div>
    </>
  );
};

export default AdminDashboard;
