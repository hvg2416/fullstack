import { SongTable } from "./components/SongTable/SongTable";
import "./HomePage.scss";

type HomePageProps = {};

export const HomePage = (props: HomePageProps) => {
  return (
    <>
      <SongTable />
    </>
  );
};
