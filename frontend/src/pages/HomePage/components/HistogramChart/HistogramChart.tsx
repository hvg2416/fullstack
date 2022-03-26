import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./HistogramChart.scss";

type HistogramChartProps = {
  songs: any[];
};

export const HistogramChart = (props: HistogramChartProps) => {
  const [histogramChartData, setHistogramChartData] = useState<any[]>([]);

  useEffect(() => {
    // MIN_DURATION_VALUE_MS = 86400 or 86.4 ~= 86 seconds
    // MAX_DURATION_VALUE_MS = 364091 or 364.091 ~= 364 seconds
    // DIFF = 277691 or 277.691 ~= 278 seconds

    var startValue = 80;
    var bin = 20;
    var endValue = 400;
    var ans: any = {};

    const generateHistogramData = (song: any): any => {
      let duration_s = Number.parseInt(`${song["duration_ms"] / 1000}`);
      if (duration_s >= startValue && duration_s < startValue + bin) {
        ans[`${startValue} - ${startValue + bin}`]
          ? (ans[`${startValue} - ${startValue + bin}`] =
              ans[`${startValue} - ${startValue + bin}`] + 1)
          : (ans[`${startValue} - ${startValue + bin}`] = 1);
      }
    };

    let songs = props.songs;

    while (startValue <= endValue) {
      songs.forEach(generateHistogramData);
      startValue += bin;
    }

    let temp = [];
    for (let key in ans) {
      temp.push({
        title: key,
        duration: ans[key],
      });
    }

    setHistogramChartData(temp);
  }, [props.songs]);

  return (
    <div className="histogram-chart-div">
      <h2>Histogram of Song Duration (seconds)</h2>
      <BarChart
        width={document.documentElement.clientWidth * 0.9}
        height={250}
        data={histogramChartData}
        barCategoryGap={1}
      >
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="title" />
        <YAxis />
        <Tooltip />
        <Legend iconType={"circle"} />
        <Bar name="Duration" dataKey="duration" fill="green" />
      </BarChart>
    </div>
  );
};
