import { useNavigate } from "react-router-dom";
import { ButtonProps } from "../types/button";

const Button:React.FC<ButtonProps>=({buttonLabel,backgroundColor})=>{
    const navigate=useNavigate();
    const backgroundColorClass=backgroundColor && {
        "blue":"bg-[#5BCBFF]",
    }[backgroundColor];
    return(
<button onClick={()=>navigate("/dashboard")} className={`${backgroundColorClass}  px-6 cursor-pointer py-2 font-bold rounded-md text-white hover:${backgroundColor} transition delay-150 duration-300 ease-in-out text-white`}>{buttonLabel}</button>
    )
}
export default Button;