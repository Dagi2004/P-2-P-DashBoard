import React, { useEffect } from 'react'
import Button from '../components/BackButton';
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { TransactionDetail } from '../types/transaction';
import { fetchTransactionsDetail } from '../utils/api';

const TransactionDetails = () => {
    const[transactiondetail,setTransactionDetail]=useState<TransactionDetail | null>(null)
    const {id}=useParams<{id:string}>();
    useEffect(()=>{
        const getTransactionDetail=async()=>{
            if(id){
                try{
                    const transaction=await fetchTransactionsDetail(Number(id));
                    setTransactionDetail(transaction)
                } catch(error){
                    console.error("Failed to fetch Detail of Transactions",error)
                }
               
            }
            
        }
        getTransactionDetail()
    },[id])
  return (
    <section className='py-12'>
<div className='flex justify-between items-center gap-5'>
        <h1 className="text-[#171717] font-[800] md:text-5xl text-3xl mt-10 text-center mx-auto leading-9">Transaction Detail</h1>

        <Button buttonLabel='Back to DashBoard' backgroundColor='blue'/>
    </div>
    {/* Transaction Details*/}
    
    <div className="md:p-6 p-3 bg-white shadow rounded-lg md:max-w-5xl max-w-3xl mx-auto mt-6">
        {transactiondetail ? (
            <div className='text-black'> 
 
 <p className="mb-2"><strong className="text-xl">ID:</strong> {transactiondetail.id}</p>
  <p className="mb-2"><strong  className="md:text-xl  text-md">Sender:</strong> {transactiondetail.senderName}</p>
  <p className="mb-2"><strong  className="md:text-xl text-md">Receiver:</strong> {transactiondetail.receiverName}</p>
  <p className="mb-2"><strong  className="md:text-xl text-md">Amount:</strong> ${transactiondetail.amount}</p>
  <p className="mb-2"><strong  className="md:text-xl text-md">Status:</strong> <span className={`px-2 py-1 rounded ${transactiondetail.status === "Completed" ? "bg-green-500" : transactiondetail.status === "Pending" ? "bg-yellow-500" : "bg-red-500"}`}>{transactiondetail.status}</span></p>
  <p className="mb-2"><strong  className="md:text-xl text-md">TransactionType:</strong>{transactiondetail.transactionType}</p>
  <p className="mb-2"><strong  className="md:text-xl text-md">Payment-Method:</strong> {transactiondetail.paymentMethod}</p>
            </div>
        ) :(
        <p className='md:p-4 p-2 bg-red-500 text-white font-bold text-3xl md:max-w-3xl max-w-xl'>Beyond the Data Transaction Not found.......</p>
        )}
    
 
    </div>
    </section>
    
  )
}

export default TransactionDetails