import { Transaction, TransactionDetail } from "../types/transaction";

import transactionData from "../data/transactiondata.json"


const mapTransactionType=(type:string): "Payment" | "Transfer" | "Deposit" | "Withdrawal" =>{
  switch(type){
    case "Payment":
    case "Transfer" : 
    case "Deposit" :
    case  "Withdrawal" :
return type;
default :
throw new Error("Invalid Transaction Type")
  }
}
export const fetchTransactions = (): Transaction[] => {
  return transactionData.transactions as Transaction[];
};
export const fetchTransactionsDetail=(id:number): TransactionDetail =>{
const specificTransaction = transactionData.transactionDetails.find((trans) => trans.id === id);

if(!specificTransaction){
  throw new Error ("Failed to Get Transaction Detail")
} 
return {
  ...specificTransaction,
  transactionType: mapTransactionType(specificTransaction.transactionType),
} as TransactionDetail;
};