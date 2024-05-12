import axios from "axios";
import { Tx, TxsResponse } from "../types/txTypes";
import { isTest } from "../../../app/config";
import { getTxsTest } from "./txApiTest";
import { extractOffsetKey } from "../../../shared/utils/helpers";

const moneyURL = import.meta.env.VITE_MONEY_BACKEND_URL;

const getTx = async (txHash: string): Promise<Tx> => {
  const response = await axios.get(`${moneyURL}/txs/${txHash}`);
  return response.data;
};
const getTxsReal = async (
  startSeqNumber?: string,
  limit?: number
): Promise<TxsResponse> => {
  const response = await axios.get(`${moneyURL}/txs`, {
    params: { startSeqNumber, limit },
  });

  const linkHeader = response.headers["link"];
  const offsetKey = extractOffsetKey(linkHeader);

  return {
    transactions: response.data,
    offsetKey: offsetKey,
  };
};

const getTxs = isTest ? getTxsTest : getTxsReal;

const getBlockTxsByBlockNumber = async (blockNumber: string): Promise<Tx[]> => {
  const response = await axios.get(`${moneyURL}/blocks/${blockNumber}/txs`);
  return response.data;
};

const getTxsByUnitID = async (unitID: string): Promise<Tx[]> => {
  const response = await axios.get(`${moneyURL}/units/${unitID}/txs`);
  return response.data;
};

export { getTx, getTxs, getBlockTxsByBlockNumber, getTxsByUnitID };
