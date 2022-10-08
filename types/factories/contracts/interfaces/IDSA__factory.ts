/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { IDSA, IDSAInterface } from "../../../contracts/interfaces/IDSA";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "string[]",
        name: "_targetNames",
        type: "string[]",
      },
      {
        internalType: "bytes[]",
        name: "_datas",
        type: "bytes[]",
      },
      {
        internalType: "address",
        name: "_origin",
        type: "address",
      },
    ],
    name: "cast",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
];

export class IDSA__factory {
  static readonly abi = _abi;
  static createInterface(): IDSAInterface {
    return new utils.Interface(_abi) as IDSAInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IDSA {
    return new Contract(address, _abi, signerOrProvider) as IDSA;
  }
}