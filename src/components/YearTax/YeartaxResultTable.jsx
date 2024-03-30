import { useEffect, useState } from "react";
import { formatDateTime } from "~/lib/utils/dateFormat";

import { AgGridReact } from "ag-grid-react"; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { Link } from "react-router-dom";

const unit = 10000;

const CustomButtonComponent = ({ resultId }) => {
  return (
    <Link to={"/preview/result/detail/" + resultId}>
      <button className="text-blue-500 no-underline hover:underline decoration-blue-500 decoration-2">
        클릭
      </button>
    </Link>
  );
};

const columns = [
  {
    field: "날짜",
    valueGetter: (p) => formatDateTime(p.data.날짜),
  },
  {
    field: "돌려받은돈",
    valueGetter: (p) =>
      (p.data.돌려받은돈 * unit).toLocaleString("kr-Kr") + "원",
  },
  {
    field: "총급여",
    valueGetter: (p) => (p.data.총급여 * unit).toLocaleString("kr-Kr") + "원",
  },
  {
    field: "링크",
    cellRenderer: (p) => <CustomButtonComponent resultId={p.data.id} />,
  },
];

export default function YeartaxResultTable({ data }) {
  const formattedData = data.map((item) => ({
    ...item,
    날짜: item.createdDate,
  }));

  return (
    // wrapping container with theme & size
    <div
      className="ag-theme-quartz" // applying the grid theme
      style={{ width: "100%", height: "100%" }}
    >
      <AgGridReact rowData={formattedData} columnDefs={columns} />
    </div>
  );
}
