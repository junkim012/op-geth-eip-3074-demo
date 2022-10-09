import { ethers, Signer } from 'ethers'
import { parseEther } from 'ethers/lib/utils';
import React, { useEffect, useState } from 'react'
import { useContract, useSigner, usePrepareSendTransaction, useSendTransaction, useWaitForTransaction } from 'wagmi';
import { useDebounce } from 'use-debounce';
import OwnMeABI from '../contracts/OwnMe.json';


export default function TxBlock() {

    const { data: signer } = useSigner();

    const [to, setTo] = React.useState('');
    const [amount, setAmount] = React.useState('');

    const [debouncedTo] = useDebounce(to, 500);
    const [debouncedValue] = useDebounce(amount, 500);

    console.log('debouncedTo: ', debouncedTo);
    console.log('debouncedValue: ', debouncedValue);

    // const contract = useContract({
    //     addressOrName: '0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    //     contractInterface: OwnMeABI,
    //     signerOrProvider: signer
    // })

    // const { config } = usePrepareSendTransaction({
    //     request: {
    //         to: debouncedTo,
    //         value: debouncedValue ? parseEther(debouncedValue) : undefined
    //     }
    // })

    // console.log('config: ', config); 

    // const { data, sendTransaction } = useSendTransaction(config);

    // const { isLoading, isSuccess } = useWaitForTransaction({
    //     hash: data?.hash,
    // })


    // const executeSend = async (e) => {
    //     e.preventDefault();

    //     console.log('data: ', data);
    //     console.log('sendTransaction: ', sendTransaction);
    //     console.log('executeSend:'); 

    //     const tx = sendTransaction?.();
    //     console.log('tx: ', tx);
    // }
    // const authorize = () => {
    //     if (!signer || !contract) return; 
    //     const tx = 
    // }
    const invokerAddress = "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"; 
    const ownAddress = ""
    const privateKey = "9ad24de184bb9bd3057c3a4625042b26f4ce90f1aef321252f0069c5887e2e54";
    
    async function query() {
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum); 
            const wallet = new ethers.Wallet(privateKey); 
            const walletSigner = wallet.connect(provider); 
        }
    }

    async function send(e) {
        e.preventDefault();
        console.log('window.ethereum: ', window.ethereum);
        if (typeof window.ethereum !== 'undefined') {
            console.log('inside window.ethereum');
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            console.log('provider: ', provider); 
            const signer = provider.getSigner();
            const wallet = new ethers.Wallet(privateKey);
            const walletSigner = wallet.connect(provider);
            console.log('wallet: ', wallet);

            let amount = '1';

            let tx = {
                from: wallet.address,
                to: invokerAddress,
                value: ethers.utils.parseEther(amount),
                // nonce: await provider.getTransactionCount(wallet.address, "latest"),
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

    return (
        <div>
            <form className="flex flex-col space-y-4"
                onSubmit={(e) => send(e)}>
                <input className="text-black"
                    onChange={(e) => setTo(e.target.value)}
                    placeholder="wallet address"
                    value={to}
                />
                <input className="text-black"
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="amount"
                    value={amount}
                />
                {/* <button disabled={isLoading || !sendTransaction || !to || !amount}>
                    {isLoading ? 'Sending...' : 'Send'}
                </button> */}
                <button
                // disabled={!sendTransaction || !to || !amount}
                >
                    {/* {isLoading ? 'Authorizing...' : 'Authorize'} */}
                    Authorize
                </button>
            </form>


        </div>
    )

}