/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../common";
import type { XEngine, XEngineInterface } from "../../contracts/XEngine";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "handler",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
    ],
    name: "LogBegin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "handler",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "result",
        type: "bytes",
      },
    ],
    name: "LogEnd",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "MSG_SENDER_KEY",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERCENTAGE_BASE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "POSTPROCESS_SIG",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
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
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
    ],
    name: "batchExec",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "cache",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
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
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
    ],
    name: "execs",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "stack",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611e30806100206000396000f3fe6080604052600436106100745760003560e01c806387c139431161004e57806387c139431461023957806399eb59b914610255578063dc9031c414610282578063fa2901a5146102a2576100ce565b80630f532d18146101cc57806338c5c08e146102135780637193850914610226576100ce565b366100ce57333b6100cc5760405162461bcd60e51b815260206004820152601460248201527f4e6f7420616c6c6f7765642066726f6d20454f4100000000000000000000000060448201526064015b60405180910390fd5b005b60006101217fb2f2618cecbbb6e7468cc0f2aa43858ad8d153e0280b22285e28e853bb9d453a60005260016020527fe066822ceb6294079ebca45035319f95ccb12306128dbdf5a257f0d1235733c95490565b6001600160a01b031614156101785760405162461bcd60e51b815260206004820152601960248201527f53656e646572206973206e6f7420696e697469616c697a65640000000000000060448201526064016100c3565b60408051602036601f810182900482028301820190935282825233926000926101bf92859285918190840183828082843760009201919091525060001992506102ee915050565b8051909150602082018181f35b3480156101d857600080fd5b506102007fb2f2618cecbbb6e7468cc0f2aa43858ad8d153e0280b22285e28e853bb9d453a81565b6040519081526020015b60405180910390f35b6100cc6102213660046119f4565b610416565b6100cc6102343660046119f4565b6104a0565b34801561024557600080fd5b50610200670de0b6b3a764000081565b34801561026157600080fd5b50610200610270366004611b55565b60016020526000908152604090205481565b34801561028e57600080fd5b5061020061029d366004611b55565b610610565b3480156102ae57600080fd5b506102bd636139148b60e11b81565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200161020a565b60606000806000855160208701886113885a03f490503d6040519250601f19601f6020830101168301604052808352806000602085013e508061040e5760448251101561037d5760405162461bcd60e51b815260206004820152600560248201527f5f6578656300000000000000000000000000000000000000000000000000000060448201526064016100c3565b6004820191506000198314156103ba57818060200190518101906103a19190611b9e565b60405162461bcd60e51b81526004016100c39190611c41565b6103c383610631565b828060200190518101906103d79190611b9e565b6040516020016103e8929190611c54565b60408051601f198184030181529082905262461bcd60e51b82526100c391600401611c41565b509392505050565b61041e61074f565b61048e85858080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020808902828101820190935288825290935088925087918291850190849080828437600092018290525087935091508990506107a9565b6104986000610a8e565b505050505050565b60006104f37fb2f2618cecbbb6e7468cc0f2aa43858ad8d153e0280b22285e28e853bb9d453a60005260016020527fe066822ceb6294079ebca45035319f95ccb12306128dbdf5a257f0d1235733c95490565b6001600160a01b0316141561054a5760405162461bcd60e51b815260206004820152601960248201527f53656e646572206973206e6f7420696e697469616c697a65640000000000000060448201526064016100c3565b3330146105995760405162461bcd60e51b815260206004820152601d60248201527f446f6573206e6f7420616c6c6f772065787465726e616c2063616c6c7300000060448201526064016100c3565b61060985858080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020808902828101820190935288825290935088925087918291850190849080828437600092018290525087935091508990506107a9565b5050505050565b6000818154811061062057600080fd5b600091825260209091200154905081565b6060816106555750506040805180820190915260018152600360fc1b602082015290565b8160005b811561067f578061066981611ca6565b91506106789050600a83611cd7565b9150610659565b60008167ffffffffffffffff81111561069a5761069a611985565b6040519080825280601f01601f1916602001820160405280156106c4576020820181803683370190505b5090505b8415610747576106d9600183611ceb565b91506106e6600a86611d02565b6106f1906030611d16565b60f81b81838151811061070657610706611d2e565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350610740600a86611cd7565b94506106c8565b949350505050565b6000541561079f5760405162461bcd60e51b815260206004820152600f60248201527f537461636b206e6f7420656d707479000000000000000000000000000000000060448201526064016100c3565b6107a7610cb8565b565b6107b1611919565b600080855188511461080f5760405162461bcd60e51b815260206004820152602160248201527f546f7320616e64206461746173206c656e67746820696e636f6e73697374656e6044820152601d60fa1b60648201526084016100c3565b865188511461086c5760405162461bcd60e51b815260206004820152602360248201527f546f7320616e6420636f6e66696773206c656e67746820696e636f6e73697374604482015262195b9d60ea1b60648201526084016100c3565b61ffff85165b61087c8587611d44565b61ffff16811015610a8357600089828151811061089b5761089b611d2e565b6020026020010151905060008983815181106108b9576108b9611d2e565b6020026020010151905060008984815181106108d7576108d7611d2e565b602002602001015190506108ea82610daf565b6108fa576108fa81838989610dcc565b600061090582610ef8565b9050806001600160e01b031916846001600160a01b03167f1e4e60ae3aeb9909ff5e6502e86867f181eadfa0c215186eaf47665909d71eb18460405161094b9190611c41565b60405180910390a360006109608584896102ee565b90508661096c81611ca6565b975050816001600160e01b031916856001600160a01b03167fc4c643b243548ed55ba2a304003e28a0a82c202984eb15e1d80d811e02dec47f836040516109b39190611c41565b60405180910390a36109c484610fa9565b15610a625760ff60f085901c1660006109de8b848c610fc7565b90506109ea828b611d16565b8114610a5e5760405162461bcd60e51b815260206004820152602c60248201527f52657475726e206e756d20616e64207061727365642072657475726e206e756d60448201527f206e6f74206d617463686564000000000000000000000000000000000000000060648201526084016100c3565b9850505b610a6b856110ba565b50505050508080610a7b90611ca6565b915050610872565b505050505050505050565b6000805b60005415610c29576000610aa6600061116c565b9050600060a082901c6003811115610ac057610ac0611d6a565b90506000816003811115610ad657610ad6611d6a565b1415610b7a57818515610aeb57809350610b74565b6040516370a0823160e01b81523060048201526000906001600160a01b038316906370a0823190602401602060405180830381865afa158015610b32573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b569190611d80565b90508015610b7257610b726001600160a01b03831633836111a4565b505b50610c22565b6002816003811115610b8e57610b8e611d6a565b1415610bda576000610ba060006111fb565b6040805160048152602481019091526020810180516001600160e01b0316636139148b60e11b179052909150610b729082906000196102ee565b60405162461bcd60e51b815260206004820152601460248201527f496e76616c69642068616e646c6572207479706500000000000000000000000060448201526064016100c3565b5050610a92565b478015610c5f57604051339082156108fc029083906000818181858888f19350505050158015610c5d573d6000803e3d6000fd5b505b610cb17fb2f2618cecbbb6e7468cc0f2aa43858ad8d153e0280b22285e28e853bb9d453a600090815260016020527fe066822ceb6294079ebca45035319f95ccb12306128dbdf5a257f0d1235733c955565b5092915050565b6000610d0b7fb2f2618cecbbb6e7468cc0f2aa43858ad8d153e0280b22285e28e853bb9d453a60005260016020527fe066822ceb6294079ebca45035319f95ccb12306128dbdf5a257f0d1235733c95490565b6001600160a01b031614610d615760405162461bcd60e51b815260206004820152601560248201527f53656e64657220697320696e697469616c697a6564000000000000000000000060448201526064016100c3565b7fb2f2618cecbbb6e7468cc0f2aa43858ad8d153e0280b22285e28e853bb9d453a6000526001602052337fe066822ceb6294079ebca45035319f95ccb12306128dbdf5a257f0d1235733c955565b6000600160f81b8216610dc457506001919050565b506000919050565b600080610dd88561121b565b9150915060005b8251811015610eef5783838281518110610dfb57610dfb611d2e565b602002602001015110610e505760405162461bcd60e51b815260206004820152601e60248201527f5265666572656e636520746f206f7574206f66206c6f63616c537461636b000060448201526064016100c3565b600085848381518110610e6557610e65611d2e565b60200260200101516101008110610e7e57610e7e611d2e565b602002015190506000838381518110610e9957610e99611d2e565b602002602001015190506000670de0b6b3a764000090508160208b010180518015610ed5578481028582820414610ecf57600080fd5b83900494505b509290925250819050610ee781611ca6565b915050610ddf565b50505050505050565b6000601882600381518110610f0f57610f0f611d2e565b016020015183516001600160f81b031990911690911c9060109084906002908110610f3c57610f3c611d2e565b016020015184516001600160f81b031990911690911c9060089085906001908110610f6957610f69611d2e565b016020015185516001600160f81b031990911690911c908590600090610f9157610f91611d2e565b01602001516001600160f81b03191617171792915050565b600060f082901c60ff16610fbf57506000919050565b506001919050565b8151600090610fd7602082611d02565b156110245760405162461bcd60e51b815260206004820152601960248201527f696c6c6567616c206c656e67746820666f72205f70617273650000000000000060448201526064016100c3565b61102f602082611cd7565b6110399084611d16565b915061010082111561108d5760405162461bcd60e51b815260206004820152600e60248201527f737461636b206f766572666c6f7700000000000000000000000000000000000060448201526064016100c3565b8260051b60005b828110156110b057602081870181015183830189015201611094565b5050509392505050565b6000546110c45750565b740200000000000000000000000000000000000000006110e460006114eb565b14801561111d57506110f86000600161155a565b7fffffffff000000000000000000000000000000000000000000000000000000001615155b1561116957600080548061113357611133611d99565b6001900381819060005260206000200160009055905561115d81600061162490919063ffffffff16565b61116960006002611646565b50565b6000611177826114eb565b90508180548061118957611189611d99565b60019003818190600052602060002001600090559055919050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526111f690849061169a565b505050565b6000611206826114eb565b60001c90508180548061118957611189611d99565b60608061122783610daf565b156112745760405162461bcd60e51b815260206004820152600d60248201527f53746174696320706172616d730000000000000000000000000000000000000060448201526064016100c3565b60165b60ff8481161480156112895750600081115b156112a7578061129881611daf565b915050600884901c9350611277565b600081116112f75760405162461bcd60e51b815260206004820152601060248201527f4e6f2064796e616d696320706172616d0000000000000000000000000000000060448201526064016100c3565b8067ffffffffffffffff81111561131057611310611985565b604051908082528060200260200182016040528015611339578160200160208202803683370190505b5092508067ffffffffffffffff81111561135557611355611985565b60405190808252806020026020018201604052801561137e578160200160208202803683370190505b50915060005b818110156113c957835160ff8616908590839081106113a5576113a5611d2e565b602090810291909101015260089490941c93806113c181611ca6565b915050611384565b506000805b60408110156114895760018616156114705782821061142f5760405162461bcd60e51b815260206004820181905260248201527f4c6f636174696f6e20636f756e7420657863656564732072656620636f756e7460448201526064016100c3565b61143a816020611dc6565b611445906004611d16565b84838151811061145757611457611d2e565b60209081029190910101528161146c81611ca6565b9250505b60019590951c948061148181611ca6565b9150506113ce565b508181146114e45760405162461bcd60e51b815260206004820152602260248201527f4c6f636174696f6e20636f756e74206c657373207468616e2072656620636f756044820152611b9d60f21b60648201526084016100c3565b5050915091565b80546000908061152b5760405162461bcd60e51b815260206004820152600b60248201526a737461636b20656d70747960a81b60448201526064016100c3565b82611537600183611ceb565b8154811061154757611547611d2e565b9060005260206000200154915050919050565b81546000908061159a5760405162461bcd60e51b815260206004820152600b60248201526a737461636b20656d70747960a81b60448201526064016100c3565b8281116115e95760405162461bcd60e51b815260206004820152601c60248201527f6e6f7420656e6f75676820656c656d656e747320696e20737461636b0000000060448201526064016100c3565b8360016115f68584611ceb565b6116009190611ceb565b8154811061161057611610611d2e565b906000526020600020015491505092915050565b8154600181018355600092835260209092206001600160a01b03909116910155565b8181600381111561165957611659611d6a565b81546001810183556000928352602090922060a09190911b7fffffffffffffffffffffffff0000000000000000000000000000000000000000169101555050565b60006116ef826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661177f9092919063ffffffff16565b8051909150156111f6578080602001905181019061170d9190611de5565b6111f65760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016100c3565b606061178e8484600085611798565b90505b9392505050565b6060824710156118105760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016100c3565b6001600160a01b0385163b6118675760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016100c3565b600080866001600160a01b031685876040516118839190611e07565b60006040518083038185875af1925050503d80600081146118c0576040519150601f19603f3d011682016040523d82523d6000602084013e6118c5565b606091505b50915091506118d58282866118e0565b979650505050505050565b606083156118ef575081611791565b8251156118ff5782518084602001fd5b8160405162461bcd60e51b81526004016100c39190611c41565b604051806120000160405280610100906020820280368337509192915050565b60008083601f84011261194b57600080fd5b50813567ffffffffffffffff81111561196357600080fd5b6020830191508360208260051b850101111561197e57600080fd5b9250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156119c4576119c4611985565b604052919050565b600067ffffffffffffffff8211156119e6576119e6611985565b50601f01601f191660200190565b600080600080600060608688031215611a0c57600080fd5b67ffffffffffffffff8087351115611a2357600080fd5b611a308888358901611939565b9096509450602087013581811115611a4757600080fd5b611a5389828a01611939565b909550935050604087013581811115611a6b57600080fd5b8701601f81018913611a7c57600080fd5b803582811115611a8e57611a8e611985565b611a9d60208260051b0161199b565b8082825260208201915060208360051b85010192508b831115611abf57600080fd5b602084015b83811015611b42578581351115611ada57600080fd5b803585018d603f820112611aed57600080fd5b6020810135611b03611afe826119cc565b61199b565b8181528f6040838501011115611b1857600080fd5b81604084016020830137600060208383010152808652505050602083019250602081019050611ac4565b5080955050505050509295509295909350565b600060208284031215611b6757600080fd5b5035919050565b60005b83811015611b89578181015183820152602001611b71565b83811115611b98576000848401525b50505050565b600060208284031215611bb057600080fd5b815167ffffffffffffffff811115611bc757600080fd5b8201601f81018413611bd857600080fd5b8051611be6611afe826119cc565b818152856020838501011115611bfb57600080fd5b611c0c826020830160208601611b6e565b95945050505050565b60008151808452611c2d816020860160208601611b6e565b601f01601f19169290920160200192915050565b6020815260006117916020830184611c15565b60008351611c66818460208801611b6e565b605f60f81b9083019081528351611c84816001840160208801611b6e565b01600101949350505050565b634e487b7160e01b600052601160045260246000fd5b6000600019821415611cba57611cba611c90565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082611ce657611ce6611cc1565b500490565b600082821015611cfd57611cfd611c90565b500390565b600082611d1157611d11611cc1565b500690565b60008219821115611d2957611d29611c90565b500190565b634e487b7160e01b600052603260045260246000fd5b600061ffff808316818516808303821115611d6157611d61611c90565b01949350505050565b634e487b7160e01b600052602160045260246000fd5b600060208284031215611d9257600080fd5b5051919050565b634e487b7160e01b600052603160045260246000fd5b600081611dbe57611dbe611c90565b506000190190565b6000816000190483118215151615611de057611de0611c90565b500290565b600060208284031215611df757600080fd5b8151801515811461179157600080fd5b60008251611e19818460208701611b6e565b919091019291505056fea164736f6c634300080a000a";

type XEngineConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: XEngineConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class XEngine__factory extends ContractFactory {
  constructor(...args: XEngineConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<XEngine> {
    return super.deploy(overrides || {}) as Promise<XEngine>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): XEngine {
    return super.attach(address) as XEngine;
  }
  override connect(signer: Signer): XEngine__factory {
    return super.connect(signer) as XEngine__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): XEngineInterface {
    return new utils.Interface(_abi) as XEngineInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): XEngine {
    return new Contract(address, _abi, signerOrProvider) as XEngine;
  }
}
