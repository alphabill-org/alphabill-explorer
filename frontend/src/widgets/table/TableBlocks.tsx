import { block as testBlock } from "./../../shared/api/test";
import { createColumnHelper } from "@tanstack/react-table";

import { Table } from "../../features";

type BlockTableElement = {
  id: number;
  blockNumber: number;
  txCount: number;
  shardId: string;
  earnedFees: number;
  summaryValue: string;
  timestamp: number;
};

const block: BlockTableElement = {
  id: testBlock.UnicityCertificate.InputRecord.RoundNumber,
  blockNumber: testBlock.UnicityCertificate.InputRecord.RoundNumber,
  txCount: testBlock.Transactions.length,
  shardId: testBlock.Header.ShardID,
  earnedFees: testBlock.UnicityCertificate.InputRecord.SumOfEarnedFees,
  summaryValue: testBlock.UnicityCertificate.InputRecord.SummaryValue,
  timestamp: testBlock.UnicityCertificate.UnicitySeal.Timestamp,
};
const block2: BlockTableElement = {
  id: testBlock.UnicityCertificate.InputRecord.RoundNumber,
  blockNumber: 22,
  txCount: testBlock.Transactions.length,
  shardId: testBlock.Header.ShardID,
  earnedFees: testBlock.UnicityCertificate.InputRecord.SumOfEarnedFees,
  summaryValue: testBlock.UnicityCertificate.InputRecord.SummaryValue,
  timestamp: testBlock.UnicityCertificate.UnicitySeal.Timestamp,
};

const blocks: BlockTableElement[] = [
  block,
  block,
  block,
  block,
  block,
  block,
  block,
  block,
  block,
  block2,
  block2,
  block2,
  block,
  block,
  block,
  block2,
  block2,
  block2,
  block,
  block,
  block,
  block2,
  block2,
  block2,
  block,
  block,
  block,
  block2,
  block2,
  block2,
  block,
  block,
  block,
  block2,
  block2,
  block2,
  block,
  block,
  block,
  block2,
  block2,
  block2,
  block,
  block,
  block,
  block2,
  block2,
  block2,
];

const columnHelper = createColumnHelper<BlockTableElement>();
const columns = [
  columnHelper.accessor("blockNumber", { header: "Block Number" }),
  columnHelper.accessor("timestamp", { header: "Time" }),
  columnHelper.accessor("txCount", { header: "txCount" }),
  columnHelper.accessor("shardId", { header: "Shard" }),
  columnHelper.accessor("earnedFees", { header: "Earned Fees" }),
  columnHelper.accessor("summaryValue", { header: "Summary Value" }),
];
async function fetchData(options?: { pageIndex: number; pageSize: number }) {
  // Simulate some network latency
  await new Promise((r) => setTimeout(r, 500));
  const data = blocks;
  if (options) {
    return {
      rows: data.slice(
        options.pageIndex * options.pageSize,
        (options.pageIndex + 1) * options.pageSize
      ),
    };
  }
  return {
    rows: data,
  };
}

const TableBlocks = () => {
  return (
    <div>
      <Table
        queryKey="blocksMini"
        data={blocks}
        columns={columns}
        isPaginate={true}
        className=" w-full m-auto text-center text-white"
        fetchDataFn={fetchData}
        dataCount={1000}
      />
    </div>
  );
};
export default TableBlocks;
