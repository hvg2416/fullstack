import { DataGrid, GridColumns } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import "./SongTable.scss";

type SongTableProps = {
  songs: any;
};

export const SongTable = (props: SongTableProps) => {
  const [columns, setColumns] = useState<GridColumns>([]);
  const [rows, setRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    async function generateRowsColumnsData() {
      let songs = props.songs;
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
    }
    generateRowsColumnsData();
  }, [props.songs]);

  const getCSVData = () => {
    let csvData = [];
    let tableHeaders = [];
    for (let key in columns) {
      tableHeaders.push(columns[key].headerName);
    }
    let tableRows = [];
    for (let key in props.songs) {
      let tableRow = [];
      for (let key2 in props.songs[key]) {
        tableRow.push(props.songs[key][key2]);
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
      {props.songs ? (
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
        rowsPerPageOptions={[10, 20, 50, 100]}
        onPageSizeChange={setRowsPerPage}
        autoHeight
      />
      {props.songs ? (
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
