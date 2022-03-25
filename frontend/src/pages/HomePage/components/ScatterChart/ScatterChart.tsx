import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Scatter,
  ScatterChart as Chart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./ScatterChart.scss";

type ScatterChartProps = {
  songs: any[];
};

export const ScatterChart = (props: ScatterChartProps) => {
  const [scatterPlotData, setScatterPlotData] = useState<any[]>([]);

  useEffect(() => {
    let songs: any = props.songs;
    let temp = [];
    for (let key in songs) {
      temp.push({
        x: songs[key]["title"],
        y: songs[key]["danceability"],
      });
    }

    setScatterPlotData(temp);
  }, [props.songs]);

  return (
    <div className="scatter-plot-div">
      <h2>Danceability</h2>
      <Chart height={340} width={document.documentElement.clientWidth * 0.9}>
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="x" name="Song title"></XAxis>
        <YAxis dataKey="y" name="Danceability" />
        <Tooltip />
        <Legend />
        <Scatter name="Danceability" data={scatterPlotData} fill="#8884d8" />
      </Chart>
    </div>
  );
};
