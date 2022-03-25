import { DataGrid, GridColumns } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import "./SongTable.scss";

type SongTableProps = {};

export const SongTable = (props: SongTableProps) => {
  const [columns, setColumns] = useState<GridColumns>([]);
  const [rows, setRows] = useState([]);
  const [data, setData]: any = useState({});
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    fetchSongs();
  }, []);

  async function fetchSongs() {
    let res: any = await axios.get("http://localhost:3001/songs/");

    let songs = res.data["songs"];

    setData(songs);

    let temp: GridColumns = [];
    for (let key in songs) {
      for (let key2 in songs[key]) {
        temp.push({
          field: `${key2}`,
          headerName: `${key2.toUpperCase()}`,
          headerClassName: "table-header",
          align: "center",
          headerAlign: "center",
        });
      }
      break;
    }

    setColumns(temp);
    setRows(songs);

    getCSVData();
  }

  const getCSVData = () => {
    let csvData = [];
    let tableHeaders = [];
    for (let key in columns) {
      tableHeaders.push(columns[key].headerName);
    }
    let tableRows = [];
    for (let key in data) {
      let tableRow = [];
      for (let key2 in data[key]) {
        tableRow.push(data[key][key2]);
      }
      tableRows.push(tableRow);
      if (tableRows.length === rowsPerPage) break;
    }
    csvData.push(tableHeaders);
    csvData.push(...tableRows);
    return csvData;
  };

  return (
    <>
      {data ? (
        <div className="download-data-link-div">
          <CSVLink
            className="download-data-link"
            data={getCSVData()}
            filename={"song_list.csv"}
          >
            Download Table
          </CSVLink>
        </div>
      ) : null}
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={rowsPerPage}
        rowsPerPageOptions={[10, 20, 30, 40, 50, 60, 100]}
        onPageSizeChange={setRowsPerPage}
        autoHeight
      />
      {data ? (
        <div className="download-data-link-div">
          <CSVLink
            className="download-data-link"
            data={getCSVData()}
            filename={"song_list.csv"}
          >
            Download Table
          </CSVLink>
        </div>
      ) : null}
    </>
  );
};
