import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        title: songs[key]["title"],
        danceability: songs[key]["danceability"],
      });
    }

    setScatterPlotData(temp);
  }, [props.songs]);

  return (
    <div className="scatter-plot-div">
      <div className="scatter-plot-header">
        <div className="scatter-plot-title-div">
          <h2>Song Danceability Scatter Plot</h2>
        </div>
        <FontAwesomeIcon
          icon={faExpand}
          cursor={"pointer"}
          onClick={() => {
            document.querySelector(".scatter-plot-div")?.requestFullscreen();
          }}
        />
      </div>
      <Chart
        height={document.documentElement.clientHeight / 2}
        width={document.documentElement.clientWidth * 0.9}
      >
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="title" name="Song title" />
        <YAxis dataKey="danceability" name="Danceability" />
        <Tooltip />
        <Legend verticalAlign="top" />
        <Scatter name="Danceability" data={scatterPlotData} fill="#8884d8" />
      </Chart>
    </div>
  );
};
