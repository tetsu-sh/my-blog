import {
  DataGrid,
  GridColDef, GridToolbar
} from "@mui/x-data-grid";



import jsonData from "../../source/source.json";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 120, sortable: true },
  { field: "title", headerName: "Title", width: 800, sortable: true },
  { field: "author", headerName: "Author", width: 130, sortable: true },
  {
    field: "media",
    headerName: "Media",
    width: 90,
    sortable: true,
  },
  {
    field: "url",
    headerName: "URL",
    width: 300,
    renderCell: (params) => (
      <a target="_blank" href={`${params.value}`} rel="noopener noreferrer">
        <u>{params.value}</u>
      </a>
    ),
  },
  {
    field: "summary",
    headerName: "Description",
    width: 500,
    sortable: true,
  },
  {
    field: "created_at",
    headerName: "created_at",
    type: "datetime",
    width: 160,
    sortable: true,
  },
  {
    field: "crawled_at",
    headerName: "crawled_at",
    type: "datetime",
    width: 160,
    sortable: true,
  },
];

export default function DataTable() {
  console.log(jsonData)
  return (
    <div style={{ height: 1000, width: "100%" }}>
      <DataGrid
        components={{ Toolbar: GridToolbar }}
        initialState={{
          filter: {
            filterModel: {
              items: [
                {
                  columnField: "",
                  operatorValue: "",
                  value: "",
                },
              ],
            },
          },
        }}
        rows={jsonData}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}
