import clsx from 'clsx'
import { ethers, Signer } from 'ethers'
import React, { ReactNode, useEffect, useState } from 'react'
import { BsTrash } from 'react-icons/bs'
import { GiTwinShell } from 'react-icons/gi'
import LmaoABI from '../contracts/Lmao.sol/Lmao.json';
import { useContract, useSigner } from 'wagmi';
import { config, networkConfig } from '../config';
import { FormControl, InputLabel, MenuItem, TextField } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Blocks } from '../pages/Home/Main'

interface BlockParams {
    blocks: Blocks
    setBlocks: React.Dispatch<React.SetStateAction<Blocks>>
    index: number
    id: string
    removeBlock: (id: string) => void
}

export default function Block({ blocks, setBlocks, id, index, removeBlock }: BlockParams) {

    // drop down options 
    const [chain, setChain] = useState<string>("");
    const [targetChain, setTargetChain] = useState<string>(""); 
    const [strategy, setStrategy] = useState<string>("");

    // for swaps 
    const [inputToken, setInputToken] = useState<string>("");
    const [inputAmount, setInputAmount] = useState<number>(0);
    const [outputToken, setOutputToken] = useState<string>("");
    const [outputAmount, setOutputAmount] = useState<number>(0);

    const [contractAddress, setContractAddress] = useState<string>(ethers.constants.AddressZero);

    const { data: signer, isError, isLoading } = useSigner();

    const goerliLmaoContract = useContract({
        addressOrName: contractAddress,
        contractInterface: LmaoABI.abi,
        signerOrProvider: signer
    })


    // configure contract addresses 
    // useEffect(() => {
    //     if (!chain || !strategy) return;
    //     const { contractAddress } = config[chain][strategy];
    //     setContractAddress(contractAddress);
    // }, [chain, strategy])

    // execute single b lock tx 
    const execute = () => {
        console.log('in execute');
        // const targetChainId = networkConfig['mumbai'].wormholeChainId;  
        // const targetContractAddress = networkConfig['mumbai'].lmaoContractAddress; 

        const goerliLmaoAddress = '0x561F1Ac3685Be6F77B6c6270F20d1cc703F083De'

        // const tx = goerliLmaoContract.executeBridgeOrigin(
        //     targetChainId, 
        //     targetContractAddress, 
        // )   
        // console.log('tx: ', tx); 

    }

    // update the blocks array using id 
    const handleStrategyChange = (event: SelectChangeEvent) => {
        setBlocks([...blocks].map((block) => {
            if (block.id == id) {
                return {
                    ...block,
                    strategy: event.target.value 
                }
            } else return block; 
        }))   
        setStrategy(event.target.value); 
    }

    const handleChainChange = (event: SelectChangeEvent) => {
        setBlocks(blocks.map((block) => {
            if (block.id == id) {
                return {
                    ...block,
                    chain: event.target.value
                }
            } else return block; 
        }))
        setChain(event.target.value); 
    }

    const handleTargetChainChange = (event: SelectChangeEvent) => {
        setBlocks(blocks.map((block) => {
            if (block.id == id) {
                return {
                    ...block,
                    targetChain: event.target.value
                }
            } else return block; 
        }))
        setTargetChain(event.target.value); 
    }

    const handleInputTokenChange = (event: SelectChangeEvent) => {
        setBlocks(blocks.map((block) => {
            if (block.id == id) {
                return {
                    ...block,
                    inputToken: event.target.value
                }
            } else return block; 
        }))
        setInputToken(event.target.value); 
    }

    const handleInputAmountChange = (value: string) => {
        console.log('in handle input amount: ', value); 
        setBlocks(blocks.map((block) => {
            if (block.id == id) {
                return {
                    ...block,
                    inputAmount: parseInt(value)
                }
            } else return block; 
        }))
        console.log(parseInt(value)); 
        setInputAmount(parseInt(value)); 
    }

    const handleOutputTokenChange = (event: SelectChangeEvent) => {
        setBlocks(blocks.map((block) => {
            if (block.id == id) {
                return {
                    ...block,
                    outputAmount: parseInt(event.target.value)
                }
            } else return block; 
        }))
        setOutputToken(event.target.value);
    }

    const handleOutputAmountChange = (event: SelectChangeEvent) => {
        setOutputAmount(parseInt(event.target.value));
    }


    return (
        <div className="bg-[#1a1b1f] shadow-xl rounded-xl py-4 px-10 flex flex-row justify-between">
            <div className="flex flex-row space-x-4 justify-center">
                <div>
                    {/* <span>Strategy</span>
                    <span>{name}</span> */}
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="input-label-strategy">Strategy</InputLabel>
                        <Select
                            labelId="select-strategy-label"
                            id="select-id"
                            value={strategy}
                            label="Strategy"
                            onChange={handleStrategyChange}
                        >
                            <MenuItem value={"Swap"}>Swap</MenuItem>
                            <MenuItem value={"Borrow"}>Borrow</MenuItem>
                            <MenuItem value={"Lend"}>Lend</MenuItem>
                            <MenuItem value={"Bridge"}>Bridge</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="input-label-chain">Chain</InputLabel>
                        <Select
                            labelId="select-chain-label"
                            id="select-id"
                            value={chain}
                            label="Chain"
                            onChange={handleChainChange}
                        >
                            <MenuItem value={"Fuji"}>Fuji</MenuItem>
                            <MenuItem value={"Goerli"}>Goerli</MenuItem>
                            {/* <MenuItem value={"Ethereum"}>Ethereum</MenuItem> */}
                        </Select>
                    </FormControl>
                </div>
                {
                    (strategy == "Bridge") && (
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="input-label-chain">Target Chain</InputLabel>
                                <Select
                                    labelId="select-chain-label"
                                    id="select-id"
                                    value={targetChain}
                                    label="TargetChain"
                                    onChange={handleTargetChainChange}
                                >
                                    <MenuItem value={"Fuji"}>Fuji</MenuItem>
                                    <MenuItem value={"Goerli"}>Goerli</MenuItem>
                                    {/* <MenuItem value={"Ethereum"}>Ethereum</MenuItem> */}
                                </Select>
                            </FormControl>
                    ) 
                }
                    {
                    (strategy == "Swap" || strategy == "Bridge" || strategy == "Lend" || strategy == "Borrow") && (
                        <div className="flex flex-row justify-center">

                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="input-label-input-token">Input</InputLabel>
                                <Select
                                    labelId="select-input-token-label"
                                    id="input-token-id"
                                    value={inputToken}
                                    label="Input"
                                    onChange={handleInputTokenChange}
                                >
                                    <MenuItem value={"HTK"}>HTK</MenuItem>
                                    <MenuItem value={"CET"}>CET</MenuItem>
                                    <MenuItem value={"wormHTK"}>wormHTK</MenuItem>
                                    <MenuItem value={"wormCET"}>wormCET</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="input-label-output-token">Output</InputLabel>
                                <Select
                                    labelId="select-output-token-label"
                                    id="output-token-id"
                                    value={outputToken}
                                    label="Output"
                                    onChange={handleOutputTokenChange}
                                >
                                    <MenuItem value={"HTK"}>HTK</MenuItem>
                                    <MenuItem value={"CET"}>CET</MenuItem>
                                    <MenuItem value={"wormHTK"}>wormHTK</MenuItem>
                                    <MenuItem value={"wormCET"}>wormCET</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <TextField
                                    id="outlined-number"
                                    type="number"
                                    label="Amount"
                                    variant="outlined"
                                    value={inputAmount}
                                    onChange={event => {
                                        const value: string = event.target.value!; 
                                        if (value != "NaN") {
                                            handleInputAmountChange(value);
                                        }
                                        
                                    }}
                                    inputProps={{ type: 'number' }}
                                >
                                </TextField>
                            </FormControl>

                        </div>
                    )
                }
            </div>
            <div className="flex flex-row">
                <div className="flex items-right px-10">
                    <button className="hover:scale-110 duration-200">
                        <GiTwinShell className="scale-150"></GiTwinShell>
                    </button>
                </div>

                <div className="flex items-center z-10">
                    <button onClick={() => removeBlock(id)} >
                        <BsTrash className="hover:scale-110 duration-200"/>
                    </button>
                </div>

            </div>

        </div>
    )
}
