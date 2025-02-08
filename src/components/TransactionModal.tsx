import type { TransactionModall,TransactionModalProps } from '../types/transactionmodal';
import React from 'react'
import { useState } from "react";
const TransactionModal:React.FC<TransactionModalProps> = ({onClose,onSubmit}) => {
    const[transaction,setTransaction]=useState<TransactionModall>({
       id:4,
        senderName:"",
        receiverName:"",
        amount:20,
        status:"Completed",

    })
    const handleSubmit=(e:React.FormEvent)=>{
e.preventDefault();
onSubmit(transaction)
onClose();
    };
    const handleInputChange=(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        const{name,value}=e.target;
        setTransaction((prevTransaction)=>({...prevTransaction,[name]:value}))
    }
  return (
    <div>
       
         <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
         <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
 <h3 className="md:text-2xl text-xl">Create Your Transaction</h3>
 <form onSubmit={handleSubmit}>
 

 <div className="mb-4">
            <label htmlFor="senderName" className="block text-gray-700 font-medium mb-2">Sender Name</label>
            <input
              type="text"
              id="senderName"
              name="senderName"
              value={transaction.senderName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Sender Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="receiverName" className="block text-gray-700 font-medium mb-2">Receiver Name</label>
            <input
              type="text"
              id="receiverName"
              name="receiverName"
              value={transaction.receiverName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Receiver Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="receiverName" className="block text-gray-700 font-medium mb-2">Amount </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={transaction.amount}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Amount"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="status" className="block text-gray-700 font-medium mb-2">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={transaction.status}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Failed">Failed</option>
            </select>
          </div>

          <div className="flex justify-between items-center">
          <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add Transaction
            </button>
            </div>
 </form>
         </div>
        
    

        </div>
    </div>
  )
}

export default TransactionModal