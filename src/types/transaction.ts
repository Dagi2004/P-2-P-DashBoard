export interface Transaction{
    id:number
    senderName:string
    receiverName:string
    amount:number
    status:"Pending" | "Completed" | "Failed"
}
export interface TransactionDetail extends Transaction{
    description:string
    transactionType:"Payment" | "Transfer" | "Deposit" | "Withdrawal"
    paymentMethod: "CreditCard" | "DebitCard" | "Check" | "Cash"
    timestamp: number
}