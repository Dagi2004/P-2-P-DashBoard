import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/DashBoard";
import transactionData from "./data/transactiondata.json";
import TransactionDetails from "./pages/TransactionDetails";
function App() {
  return (
    <>
      <div className="fixed inset-0 -z-10 w-full h-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px]"></div>
      
      
      <Routes>
      <Route path="/" element={<Dashboard transactions={transactionData.transactions} />} />
  <Route path="/dashboard" element={<Dashboard transactions={transactionData.transactions} />} />
  <Route path="/transaction/:id" element={<TransactionDetails />} />
</Routes>
  
    </>
  );
}

export default App;
