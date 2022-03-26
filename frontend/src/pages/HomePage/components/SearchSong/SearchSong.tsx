import { Button, Input } from "@mui/material";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
import axios from "axios";
import { useState } from "react";
import "./SearchSong.scss";

type SearchSongProps = {};

export const SearchSong = (props: SearchSongProps) => {
  const [searchResult, setSearchResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [columns, setColumns] = useState<GridColumns>([]);
  const [rows, setRows] = useState<any[]>([]);

  const getSong = async () => {
    setSearchResult(null);
    let res = await axios.get(
      `http://localhost:3001/songs/search/?title=${searchQuery}`
    );
    let data = res.data;

    if (res.status === 200) {
      setErrorMessage("");
      setSearchResult(data);
      let tmp: GridColumns = [];
      for (let key in data) {
        tmp.push({
          field: `${key}`,
          headerName: `${key.toUpperCase()}`,
          headerClassName: "song-search-result-table-header",
          align: "center",
          headerAlign: "center",
        });
      }
      setColumns(tmp);
      setRows([data]);
    } else {
      setErrorMessage("No Search Results Found.");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <div className="search-song-div">
      <div>
        <Input
          placeholder="Search song"
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          data-testid="input-search-query"
        />
        <Button
          variant="contained"
          style={{ marginLeft: "24px" }}
          onClick={getSong}
        >
          Get Song
        </Button>
      </div>
      {searchResult ? (
        <DataGrid
          rows={rows}
          columns={columns}
          autoHeight
          className="song-search-result-table"
          hideFooter
          disableColumnMenu
        />
      ) : null}
      {errorMessage ? <p>{errorMessage}</p> : null}
    </div>
  );
};
