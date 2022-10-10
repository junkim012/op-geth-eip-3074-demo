import { ethers, Signer, BigNumber } from 'ethers'
import { parseEther } from 'ethers/lib/utils';
import React, { useEffect, useState } from 'react'
import { useContract, useSigner, usePrepareSendTransaction, useSendTransaction, useWaitForTransaction } from 'wagmi';
import { useDebounce } from 'use-debounce';
import OwnMeABI from '../contracts/OwnMe.json';
import callerEmoji from '../assets/caller.svg';
import disc from '../assets/disc.svg';
import confetti from '../assets/confetti.svg';

export default function TxBlock() {

    const { data: signer } = useSigner();

    const [storageVal, setStorageVal] = useState("?");

    const [to, setTo] = React.useState('');
    const [amount, setAmount] = React.useState('');

    const [debouncedTo] = useDebounce(to, 500);
    const [debouncedValue] = useDebounce(amount, 500);

    console.log('debouncedTo: ', debouncedTo);
    console.log('debouncedValue: ', debouncedValue);

    const [isTxSent, setIsTxSent] = useState(false);
    const [isTxMined, setIsTxMined] = useState(false);



    const invokerAddress = "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    const storageAddress = "0x000000000000000000000000000000000000bbbb";
    // const ownAddress = ""
    const privateKey = "9ad24de184bb9bd3057c3a4625042b26f4ce90f1aef321252f0069c5887e2e54";

    async function sponsorCall() {
        if (typeof window.ethereum !== 'undefined') {

        }
    }

    async function query() {
        if (typeof window.ethereum !== 'undefined') {
            const slot = 0;
            const storageContractAddress = "0x000000000000000000000000000000000000bbbb";

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const wallet = new ethers.Wallet(privateKey);
            const walletSigner = wallet.connect(provider);

            const paddedSlot = ethers.utils.hexZeroPad(0, 32);
            const storageLocation = await provider.getStorageAt(storageContractAddress, paddedSlot);
            console.log('storageLocation: ', storageLocation);
            const storageValue = BigNumber.from(storageLocation);
            console.log('storageValue: ', storageValue);
            setStorageVal(storageValue._hex);
        }
    }


    const isTransactionMined = async (hash, provider) => {
        console.log('hash: ', hash);
        console.log('provider: ', provider);
        const txReceipt = await provider.getTransactionReceipt(hash);
        console.log('txReceipt: ', txReceipt);
        if (txReceipt && txReceipt.blockNumber) {
            return txReceipt;
        }
    }

    // sponsored transaction metamask wallet is the sponsor
    async function sponsorIndirect(e) {
        e.preventDefault();
        setIsTxMined(false);
        setIsTxSent(true);
        console.log('window.ethereum: ', window.ethereum);
        if (typeof window.ethereum !== 'undefined') {
            console.log('inside window.ethereum');
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            console.log('provider: ', provider);
            const wallet = new ethers.Wallet(privateKey);
            const walletSigner = wallet.connect(provider);
            console.log('wallet: ', wallet);

            let amount = '1';

            const nonce = ethers.utils.hexlify(await provider.getTransactionCount(wallet.address, "latest"));
            console.log('sponsor indirect nonce: ', nonce);

            let tx = {
                from: wallet.address,
                to: invokerAddress,
                value: ethers.utils.parseEther(amount),
                // nonce: Math.round(Math.random(1, 1000)+1000),
                // nonce: 123
                nonce: nonce,
                gasLimit: 10000000

            }
            console.log('tx: ', tx);

            const txSent = await walletSigner.sendTransaction(tx);
            console.log(txSent);
            if (txSent) {
                setIsTxSent(true);
            }
            await txSent.wait();

            console.log(`Transaction successful with hash: ${txSent.hash}`);

            const transactionMined = await isTransactionMined(txSent.hash, provider);
            // const txReceipt = await provider.getTransactionReceipt(hash);
            // const txReceipt = await provider.perform("getTransactionReceipt", { hash })
            // console.log('txReceipt: ', txReceipt); 
            // console.log('isTransactionMined: ', transactionMined); 
            // if (transactionMined) {
            //     console.log('tx is mined'); 
            //     setIsTxMined(true);
            // } else {
            //     console.log('tx mine failed'); 
            //     setIsTxMined(false); 
            // }
            if (transactionMined) {
                console.log('tx is mined');
                setIsTxMined(true);
            } else {
                console.log('tx mine failed');
                setIsTxMined(false);
            }
            setIsTxSent(false);
        }
    }

    async function sponsorDirect(e) {
        e.preventDefault();
        setIsTxMined(false);
        setIsTxSent(true);

        if (typeof window.ethereum !== 'undefined') {
            console.log('inside window.ethereum');
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            console.log('provider: ', provider);
            const wallet = new ethers.Wallet(privateKey);
            const walletSigner = wallet.connect(provider);
            console.log('wallet: ', wallet);

            let amount = '1';

            const nonce = ethers.utils.hexlify(await provider.getTransactionCount(wallet.address, "latest"));
            console.log('sponsor direct nonce: ', nonce);
            let tx = {
                from: wallet.address,
                to: storageAddress,
                value: ethers.utils.parseEther(amount),
                nonce: nonce
            }
            // console.log('tx: ', tx);

            let confirmations = 0;
            const txSent = await walletSigner.sendTransaction(tx);
            console.log('txSent: ', txSent);
            if (txSent) {
                setIsTxSent(true);
            }

            await txSent.wait();
            console.log(`Transaction successful with hash: ${txSent.hash}`);

            const hash = txSent.hash;
            const transactionMined = await isTransactionMined(hash, provider);
            console.log('transactionMined: ', transactionMined);

            if (transactionMined) {
                console.log('tx is mined');
                setIsTxMined(true);
            } else {
                console.log('tx mine failed');
                setIsTxMined(false);
            }
            setIsTxSent(false);
        }
    }


    return (
        <div>
            <div className="flex flex-col space-y-4 justify-center text-center">

                <button
                    onClick={(e) => sponsorDirect(e)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Modify Storage Directly
                </button>
                <button
                    onClick={(e) => sponsorIndirect(e)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Modify Storage through Invoker
                </button>

                <button
                    onClick={query}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Check Storage Contract
                </button>
                <div className="flex flex-col justify-between font-bold my-2 border rounded p-4">
                    <div>
                        Stored Caller Address:
                    </div>
                    <div className="mt-2 flex flex-row justify-between">
                        <img className="h-10 w-auto" src={callerEmoji} alt="callerEmoji" />
                        {/* <div className="align-baseline text-center">
                            {storageVal}
                        </div> */}
                        <div className="flex items-center">

                            {storageVal}



                            {/* <span class="inline-block align-middle">{storageVal}</span> */}
                        </div>

                    </div>
                </div>
                <div className="flex flex-col py-8 ">
                    <div className="font-bold">
                        Glossary:
                    </div>
                    <div className="py-3">
                        <div>
                            EOA: 0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b
                        </div>
                        <div>
                            Sponsor: 0xF8916A443a6e9c036abB79398B6dc50e202e0321
                        </div>
                    </div>
                    <div className="flex flex-row justify-center mt-10">
                        {
                            isTxSent ? (
                                <div className="flex flex-row space-x-2">
                                    <img className="h-16 w-auto animate-spin" src={disc} alt="xHolas" />
                                    <span className="flex items-center font-bold font-italics">
                                        Processing Tx...
                                    </span>
                                </div>
                            ) : (
                                isTxMined ? (
                                    <div className="flex flex-row space-x-2">
                                        <img className="h-16 w-auto" src={confetti} alt="xHolas" />

                                        <span className="flex items-center font-bold font-italics">
                                            Tx Mined!
                                        </span>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="flex flex-row space-x-2">
                                            <img className="h-16 w-auto" src={disc} alt="xHolas" />
                                            <span className="flex items-center font-bold font-italics">
                                                Waiting for transaction!
                                            </span>
                                        </div>

                                    </div>
                                )
                            )
                        }
                    </div>
                </div>







            </div>
        </div >
    )

}