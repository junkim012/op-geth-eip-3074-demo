/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IxHolas,
  IxHolasInterface,
} from "../../../contracts/interfaces/IxHolas";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tos",
        type: "address[]",
      },
      {
        internalType: "bytes32[]",
        name: "configs",
        type: "bytes32[]",
      },
      {
        internalType: "uint16[]",
        name: "chainIds",
        type: "uint16[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
    ],
    name: "executeTransactionsEntryPoint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encodedVm",
        type: "bytes",
      },
    ],
    name: "executeTransactionsRelayPoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "peerChainId",
        type: "uint16",
      },
      {
        internalType: "bytes32",
        name: "wormholeCompatAddress",
        type: "bytes32",
      },
    ],
    name: "updatePeerContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IxHolas__factory {
  static readonly abi = _abi;
  static createInterface(): IxHolasInterface {
    return new utils.Interface(_abi) as IxHolasInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IxHolas {
    return new Contract(address, _abi, signerOrProvider) as IxHolas;
  }
}
