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
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    async function fetchSongs() {
      let res: any = await axios.get("http://localhost:3001/songs/");
      let songs = res.data["songs"];
      setData(songs);
    }
    fetchSongs();
  }, []);

  const rateSong = (id: string, rating: number) => {
    axios.put(`http://localhost:3001/songs/rate?rating=${rating}&id=${id}`);

    let tmp = [];

    for (let key in data) {
      if (data[key]["id"] === id) {
        if (rating) {
          tmp.push({ ...data[key], rating: rating });
        }
      } else {
        tmp.push(data[key]);
      }
    }
    setData(tmp);
  };

  return (
    <>
      <SearchSong />
      <SongTable songs={data} rateSong={rateSong} />
      <ScatterChart songs={data} />
      <HistogramChart songs={data} />
      <BarChart songs={data} />
    </>
  );
};
