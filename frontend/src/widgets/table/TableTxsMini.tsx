import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

import { Table } from "../../features";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { TableElementTx } from "./types";

const tx1: TableElementTx = {
  id: "0xksdfwerwerwerwerwersdfsfdsdf",
  time: "1321354",
  from: "John",
  to: "0xsdfdsfsfsd",
  amount: 230,
};
const tx2: TableElementTx = {
  id: "0xksdzxczczxcz",
  time: "2134",
  from: "0xsdfdsfsfsd",
  to: "0xsdsadasdasda",
  amount: 56000,
};
const tx3: TableElementTx = {
  id: "0xksdzxasdad",
  time: "221334",
  from: "0xsdxcvxcv",
  to: "0xsdsdvsdv",
  amount: 52,
};

const txs: TableElementTx[] = [tx1, tx2, tx2, tx1, tx3, tx3, tx1];

const columnHelper = createColumnHelper<TableElementTx>();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const columns : ColumnDef<TableElementTx, any>[] = [
  columnHelper.accessor("id", { header: "Txn Hash" }),
  columnHelper.accessor("time", { header: "Time" }),
  columnHelper.accessor("from", { header: "From" }),
  columnHelper.accessor("to", { header: "To" }),
  columnHelper.accessor("amount", { header: "Amount" }),
];
async function fetchData() {
  // Simulate some network latency
  await new Promise((r) => setTimeout(r, 500));
  const data = txs;
  return {
    rows: data,
  };
}

const TableTxsMini = () => {
  useEffect(() => {
    fetchData();
  });

  return (
    <div className="w-1/2 text-center text-white">
      <Table
        queryKey="txMini"
        data={txs}
        columns={columns}
        className=" w-full"
        fetchDataFn={fetchData}
      />
      <Link className="block w-3/4 mx-auto bg-green-400" to={"/bills"}>
        View all
      </Link>
    </div>
  );
};
export default TableTxsMini;
