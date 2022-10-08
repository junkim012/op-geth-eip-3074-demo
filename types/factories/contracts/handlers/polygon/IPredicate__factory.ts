/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IPredicate,
  IPredicateInterface,
} from "../../../../contracts/handlers/polygon/IPredicate";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "depositReceiver",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "rootToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "LockedERC20",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "depositReceiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "LockedEther",
    type: "event",
  },
];

export class IPredicate__factory {
  static readonly abi = _abi;
  static createInterface(): IPredicateInterface {
    return new utils.Interface(_abi) as IPredicateInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPredicate {
    return new Contract(address, _abi, signerOrProvider) as IPredicate;
  }
}
