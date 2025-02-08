const Status = {
    Completed: "bg-green-500 text-white",
    Pending: "bg-yellow-500 text-white",
    Failed: "bg-red-500 text-white",
  };
  
const StatusBadge:React.FC<{status:keyof typeof Status}>=({status})=>{
    return(
<div className={`px-1 text-center max-w-[130px] w-full py-1 rounded ${Status[status] || "bg-gray-500"}`}>
{status}
</div>
    )

}
   
export default StatusBadge