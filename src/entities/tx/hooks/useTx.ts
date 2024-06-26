import { QueryObserverResult, useQuery } from "@tanstack/react-query";
import {
  getTx,
  getTxs,
  getBlockTxsByBlockNumber,
  getTxsByUnitID,
} from "../api/txApi";
import { Tx, TxsResponse } from "../types/txTypes";
import { AxiosError } from "axios";

const useTxQuery = (txHash: string): QueryObserverResult<Tx, AxiosError> => {
  return useQuery({
    queryKey: ["tx", txHash],
    queryFn: () => getTx(txHash),
  });
};

const useTxsQuery = (
  startTxHash: string,
  limit?: number
): QueryObserverResult<TxsResponse, AxiosError> => {
  return useQuery({
    queryKey: ["Txs", startTxHash, limit],
    queryFn: () => getTxs(startTxHash, limit),
  });
};

const useTxsByBlockNumberQuery = (
  blockNumber: string
): QueryObserverResult<Tx[], AxiosError> => {
  return useQuery({
    queryKey: ["BlockTxsByBlockNumber", blockNumber],
    queryFn: () => getBlockTxsByBlockNumber(blockNumber),
  });
};

const useTxsByUnitIDQuery = (
  unitID: string
): QueryObserverResult<Tx[], AxiosError> => {
  return useQuery({
    queryKey: ["TxsByUnitID", unitID],
    queryFn: () => getTxsByUnitID(unitID),
  });
};

export {
  useTxQuery,
  useTxsQuery,
  useTxsByBlockNumberQuery,
  useTxsByUnitIDQuery,
};
