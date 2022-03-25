import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart } from "./components/BarChart/BarChart";
import { HistogramChart } from "./components/HistogramChart/HistogramChart";
import { ScatterChart } from "./components/ScatterChart/ScatterChart";
import { SearchSong } from "./components/SearchSong/SearchSong";
import { SongTable } from "./components/SongTable/SongTable";
import "./HomePage.scss";

type HomePageProps = {};

export const HomePage = (props: HomePageProps) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchSongs() {
      let res: any = await axios.get("http://localhost:3001/songs/");
      let songs = res.data["songs"];
      setData(songs);
    }
    fetchSongs();
  }, []);

  return (
    <>
      <SearchSong />
      <SongTable songs={data} />
      <ScatterChart songs={data} />
      <HistogramChart songs={data} />
      <BarChart songs={data} />
    </>
  );
};
