import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart as BarGraph,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./BarChart.scss";

type BarChartProps = {
  songs: any[];
};

export const BarChart = (props: BarChartProps) => {
  const [barChartData, setBarChartData] = useState<any[]>([]);

  useEffect(() => {
    let songs: any = props.songs;
    let temp = [];
    for (let key in songs) {
      temp.push({
        title: songs[key]["title"],
        acousticness: songs[key]["acousticness"] * 100,
        tempo: songs[key]["tempo"],
      });
    }

    setBarChartData(temp);
  }, [props.songs]);

  return (
    <div className="bar-chart-div">
      <div className="bar-chart-header">
        <div className="bar-chart-title-div">
          <h2>Bar Chart for Acoustics & Tempo of songs</h2>
        </div>
        <FontAwesomeIcon
          icon={faExpand}
          cursor={"pointer"}
          onClick={() => {
            document.querySelector(".bar-chart-div")?.requestFullscreen();
          }}
        />
      </div>
      <BarGraph
        width={document.documentElement.clientWidth * 0.9}
        height={document.documentElement.clientHeight / 2}
        data={barChartData}
        barCategoryGap={1}
        barGap={0}
      >
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="title" />
        <YAxis />
        <Tooltip />
        <Legend iconType={"circle"} />
        <Bar name="Tempo" dataKey="tempo" fill="chocolate" />
        <Bar name="Acousticness" dataKey="acousticness" fill="yellowgreen" />
      </BarGraph>
    </div>
  );
};
