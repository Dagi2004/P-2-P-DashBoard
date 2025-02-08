import StatusBadge from "./StatusBadge"
import { Transaction } from "../types/transaction"
import { useNavigate } from "react-router-dom"


 export interface TableData{
    transactions:Transaction[]
}
const TransactionTable:React.FC<TableData>=({transactions})=>{
    const navigate=useNavigate();
return(
    <div className="mx-auto relative overflow-x-auto shadow-md sm:rounded-lg mt-20">
<table className="w-full text-md text-left rtl:text-right text-black">
    <thead className="text-md text-black uppercase bg-gray-100">
        <tr>
            <th scope="col" className="px-6 py-3">id</th>
            <th scope="col" className="px-6 py-3">sendername</th>
            <th scope="col" className="px-6 py-3">receivername</th>
            <th scope="col" className="px-6 py-3">amount</th>
            <th scope="col" className="px-6 py-3">status</th>
        </tr>
    </thead>
<tbody>
    {transactions && transactions.map((transaction: Transaction,index) => (
        <tr key={transaction.id}
        onClick={()=>navigate(`/transaction/${transaction.id}`)}
        className={`${index%2!==0 ?  "  "  : " " } bg-white border-b border-gray-200 py-7 cursor-pointer text-sm" }`} >
            
            <td scope="row" >
                <p>{transaction.id}</p>
            </td>
            <td className="px-6 py-4">
                <p>{transaction.senderName}</p>
            </td>
            <td className="px-6 py-4">
                <p>{transaction.receiverName}</p>
            </td>
            <td className="px-6 py-4">
                <p>{transaction.amount}</p>
            </td>
            <td className="px-6 py-4">
<StatusBadge status={transaction.status}/>
                
            </td>
        </tr>
    ))}
    
   
</tbody>
</table>
    </div>
)
}
export default TransactionTable