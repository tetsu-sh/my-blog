import { useEffect } from "react";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridToolbar,
} from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import { AccessAlarm } from "@mui/icons-material";

import * as fs from "fs";

import Link from "next/link";

const jsonData = require("../../oisource-source/source.json");

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 120, sortable: true },
  { field: "title", headerName: "Title", width: 800, sortable: true },
  { field: "auther", headerName: "Auther", width: 130, sortable: true },
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
      <a target="_blank" href={`${params.value}`}>
        <u>{params.value}</u>
      </a>
    ),
  },
  {
    field: "summary",
    headerName: "Summary",
    width: 500,
    sortable: true,
  },
  {
    field: "createdAt",
    headerName: "created_at",
    type: "datetime",
    width: 160,
    sortable: true,
  },
  {
    field: "crawledAt",
    headerName: "crawled_at",
    type: "datetime",
    width: 160,
    sortable: true,
  },
];

export default function DataTable() {
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
        pageSize={50}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}
