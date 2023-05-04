import Header from "./components/Header";
import Balance from "./components/Balance";
import AddTransaction from "./components/AddTransaction";
import IncomeExpenses from "./components/IncomeExpenses";
import Transaction from "./components/Transaction";


function App() {
  return (
    <div>
      <Header />
      <div className="container">     
          <Balance />
          <IncomeExpenses />
          <Transaction />
          <AddTransaction />
      </div>
    </div>
  );
}

export default App;
