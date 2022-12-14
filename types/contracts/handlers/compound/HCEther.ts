/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface HCEtherInterface extends utils.Interface {
  functions: {
    "CETHER()": FunctionFragment;
    "MSG_SENDER_KEY()": FunctionFragment;
    "NATIVE_TOKEN_ADDRESS()": FunctionFragment;
    "PERCENTAGE_BASE()": FunctionFragment;
    "POSTPROCESS_SIG()": FunctionFragment;
    "cache(bytes32)": FunctionFragment;
    "getContractName()": FunctionFragment;
    "mint(uint256)": FunctionFragment;
    "postProcess()": FunctionFragment;
    "redeem(uint256)": FunctionFragment;
    "redeemUnderlying(uint256)": FunctionFragment;
    "repayBorrowBehalf(uint256,address)": FunctionFragment;
    "stack(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "CETHER"
      | "MSG_SENDER_KEY"
      | "NATIVE_TOKEN_ADDRESS"
      | "PERCENTAGE_BASE"
      | "POSTPROCESS_SIG"
      | "cache"
      | "getContractName"
      | "mint"
      | "postProcess"
      | "redeem"
      | "redeemUnderlying"
      | "repayBorrowBehalf"
      | "stack"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "CETHER", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MSG_SENDER_KEY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "NATIVE_TOKEN_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PERCENTAGE_BASE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "POSTPROCESS_SIG",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cache",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getContractName",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "postProcess",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemUnderlying",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "repayBorrowBehalf",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "stack",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "CETHER", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MSG_SENDER_KEY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "NATIVE_TOKEN_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PERCENTAGE_BASE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "POSTPROCESS_SIG",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cache", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getContractName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "postProcess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "redeemUnderlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "repayBorrowBehalf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stack", data: BytesLike): Result;

  events: {};
}

export interface HCEther extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HCEtherInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    CETHER(overrides?: CallOverrides): Promise<[string]>;

    MSG_SENDER_KEY(overrides?: CallOverrides): Promise<[string]>;

    NATIVE_TOKEN_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    PERCENTAGE_BASE(overrides?: CallOverrides): Promise<[BigNumber]>;

    POSTPROCESS_SIG(overrides?: CallOverrides): Promise<[string]>;

    cache(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getContractName(overrides?: CallOverrides): Promise<[string]>;

    mint(
      value: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    postProcess(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    redeem(
      redeemTokens: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    redeemUnderlying(
      redeemAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    repayBorrowBehalf(
      amount: PromiseOrValue<BigNumberish>,
      borrower: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stack(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  CETHER(overrides?: CallOverrides): Promise<string>;

  MSG_SENDER_KEY(overrides?: CallOverrides): Promise<string>;

  NATIVE_TOKEN_ADDRESS(overrides?: CallOverrides): Promise<string>;

  PERCENTAGE_BASE(overrides?: CallOverrides): Promise<BigNumber>;

  POSTPROCESS_SIG(overrides?: CallOverrides): Promise<string>;

  cache(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  getContractName(overrides?: CallOverrides): Promise<string>;

  mint(
    value: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  postProcess(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  redeem(
    redeemTokens: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  redeemUnderlying(
    redeemAmount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  repayBorrowBehalf(
    amount: PromiseOrValue<BigNumberish>,
    borrower: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stack(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    CETHER(overrides?: CallOverrides): Promise<string>;

    MSG_SENDER_KEY(overrides?: CallOverrides): Promise<string>;

    NATIVE_TOKEN_ADDRESS(overrides?: CallOverrides): Promise<string>;

    PERCENTAGE_BASE(overrides?: CallOverrides): Promise<BigNumber>;

    POSTPROCESS_SIG(overrides?: CallOverrides): Promise<string>;

    cache(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    getContractName(overrides?: CallOverrides): Promise<string>;

    mint(
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    postProcess(overrides?: CallOverrides): Promise<void>;

    redeem(
      redeemTokens: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    redeemUnderlying(
      redeemAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    repayBorrowBehalf(
      amount: PromiseOrValue<BigNumberish>,
      borrower: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stack(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    CETHER(overrides?: CallOverrides): Promise<BigNumber>;

    MSG_SENDER_KEY(overrides?: CallOverrides): Promise<BigNumber>;

    NATIVE_TOKEN_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    PERCENTAGE_BASE(overrides?: CallOverrides): Promise<BigNumber>;

    POSTPROCESS_SIG(overrides?: CallOverrides): Promise<BigNumber>;

    cache(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getContractName(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      value: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    postProcess(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    redeem(
      redeemTokens: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    redeemUnderlying(
      redeemAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    repayBorrowBehalf(
      amount: PromiseOrValue<BigNumberish>,
      borrower: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stack(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CETHER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MSG_SENDER_KEY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    NATIVE_TOKEN_ADDRESS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    PERCENTAGE_BASE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    POSTPROCESS_SIG(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cache(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getContractName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      value: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    postProcess(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    redeem(
      redeemTokens: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    redeemUnderlying(
      redeemAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    repayBorrowBehalf(
      amount: PromiseOrValue<BigNumberish>,
      borrower: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stack(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
