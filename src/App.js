import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Index from "./Pages/Index";
import TransactionView from "./Pages/TransactionView";
import TransactionNew from "./Pages/TransactionNew";
import { useState, useEffect } from "react";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL)
      .then((response) => response.json())
      .then((data) => setTransactions([...data]))
      .catch((error) => {
        console.log("An error occurred when fetching the data.");
      });
  });

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Index transactions={transactions} />} />
        <Route path="/transactions/:id" element={<TransactionView />} />
        <Route path="/transactions/new" element={<TransactionNew />} />
      </Routes>
    </div>
  );
}

export default App;
