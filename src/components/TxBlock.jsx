import { ethers, Signer, BigNumber } from 'ethers'
import { parseEther } from 'ethers/lib/utils';
import React, { useEffect, useState } from 'react'
import { useContract, useSigner, usePrepareSendTransaction, useSendTransaction, useWaitForTransaction } from 'wagmi';
import { useDebounce } from 'use-debounce';
import OwnMeABI from '../contracts/OwnMe.json';


export default function TxBlock() {

    const { data: signer } = useSigner();

    const [storageVal, setStorageVal] = useState("hi");

    const [to, setTo] = React.useState('');
    const [amount, setAmount] = React.useState('');

    const [debouncedTo] = useDebounce(to, 500);
    const [debouncedValue] = useDebounce(amount, 500);

    console.log('debouncedTo: ', debouncedTo);
    console.log('debouncedValue: ', debouncedValue);



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


    // sponsored transaction metamask wallet is the sponsor
    async function sponsorIndirect(e) {
        e.preventDefault();
        console.log('window.ethereum: ', window.ethereum);
        if (typeof window.ethereum !== 'undefined') {
            console.log('inside window.ethereum');
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            console.log('provider: ', provider);
            const wallet = new ethers.Wallet(privateKey);
            const walletSigner = wallet.connect(provider);
            console.log('wallet: ', wallet);

            let amount = '1';

            let tx = {
                from: wallet.address,
                to: invokerAddress,
                value: ethers.utils.parseEther(amount),
                // nonce: Math.round(Math.random(1, 1000)+1000),
                // nonce: 123
                nonce: await provider.getTransactionCount(wallet.address, "latest"),
                gasLimit: 10000000

            }
            console.log('tx: ', tx);

            const receipt = await walletSigner.sendTransaction(tx);
            console.log(receipt);

            // walletSigner.sendTransaction(tx).then((transaction) => {
            //     console.dir(transaction)
            //     alert("Send finished!")
            // })
        }
    }

    async function sponsorDirect(e) {
        e.preventDefault();
        if (typeof window.ethereum !== 'undefined') {
            console.log('inside window.ethereum');
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            console.log('provider: ', provider);
            const wallet = new ethers.Wallet(privateKey);
            const walletSigner = wallet.connect(provider);
            console.log('wallet: ', wallet);

            let amount = '1';

            let tx = {
                from: wallet.address,
                to: storageAddress,
                value: ethers.utils.parseEther(amount),
                nonce: await provider.getTransactionCount(wallet.address, "latest"),
            }
            console.log('tx: ', tx);

            const receipt = await walletSigner.sendTransaction(tx);
            console.log(receipt);
        }
    }


    return (
        <div>
            <div className="flex flex-col space-y-4 justify-center text-center">
              
                <button 
                onClick={(e) => sponsorDirect(e)}
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Modify Storage Directly
                </button>
                <button 
                onClick={(e) => sponsorIndirect(e)}
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Modify Storage through Invoker
                </button>

                <button 
                onClick={query}
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Check Storage Contract
                </button>
                <div className="flex flex-col">
                    <div>
                        Caller Address/msg.sender: 
                    </div>
                    {storageVal}
                </div>
        
           


        </div>
        </div >
    )

}