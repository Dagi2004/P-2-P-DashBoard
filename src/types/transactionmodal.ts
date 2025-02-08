export interface TransactionModall{
  id:number
    senderName:string
    receiverName:string
    amount:number
  status:"Pending" | "Completed" | "Failed"
}
export interface TransactionModalProps {
    onClose: () => void;
    onSubmit: (transaction: TransactionModall) => void;
  }