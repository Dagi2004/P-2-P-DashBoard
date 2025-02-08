import TransactionModal from "../components/TransactionModal";
import TransactionTable from "../components/TransactionTable";
import { useEffect, useState } from "react";
import transactionsData from "../data/transactiondata.json";
import { Transaction } from "../types/transaction";


const Dashboard: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [transactions, setTransactions] = useState<Transaction[]>(transactionsData.transactions);
    const [status, setSelectedStatus] = useState<string>("All");
    const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>(transactions);

    const handleFilterTransaction = () => {
        const filterTransaction = status === "All" 
            ? transactions 
            : transactions.filter(trans => trans.status === status);
        setFilteredTransactions(filterTransaction);
    };

    useEffect(() => {
        handleFilterTransaction();
    }, [status, transactions]); // Add transactions to dependency array

    const handleAddTransaction = (newTransaction: Transaction) => {
        setTransactions(prev => [
            ...prev,
            {
                ...newTransaction,
                id: prev.length > 0 ? prev[prev.length - 1].id + 1 : 1
            }
        ]);
    };

    return (
        <section className="container mx-auto px-4">
            <h1 className="text-[#171717] font-[800] md:text-5xl text-3xl md:mt-10 mt-4 mb-6 md:mb-0 text-center leading-9">
                P2P Transaction Dashboard
            </h1>

            <div className="flex justify-end md:mr-5 mr-0">
                <button 
                    onClick={() => setIsModalOpen(true)} 
                    className="bg-[#5BCBFF] px-6 cursor-pointer py-2 font-bold rounded-md text-white"
                >
                    Create Transaction
                </button>
            </div>

            <p className="font-light md:text-xl text-md md:w-full mx-auto max-w-lg mt-6 text-[#434343] text-center">
                Track and manage all your <span className="text-black font-bold">P2P transactions in one place</span>.
                Filter by status, view detailed information, and stay organized with this intuitive dashboard.
            </p>

            <div className="flex justify-end items-center mt-6">
                <div className="w-full md:w-64">
                    <label className="block text-sm font-medium text-gray-700">Filter Transactions by Status</label>
                    <select 
                        value={status} 
                        onChange={(e) => setSelectedStatus(e.target.value)}
                        className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="All">All</option>
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                        <option value="Failed">Failed</option>
                    </select>
                </div>
            </div>

            <TransactionTable transactions={filteredTransactions} />

            {isModalOpen && (
                <TransactionModal 
                    onClose={() => setIsModalOpen(false)} 
                    onSubmit={handleAddTransaction} 
                />
            )}
        </section>
    );
};

export default Dashboard;