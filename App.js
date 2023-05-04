import Header from "./components/Header";
import Balance from "./components/Balance";
import AddTransaction from "./components/AddTransaction";
import IncomeExpenses from "./components/IncomeExpenses";
import Transaction from "./components/Transaction";
import GlobalContext from "./context/GlobalContext";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <GlobalContext>
          <Balance />
          <IncomeExpenses />
          <Transaction />
          <AddTransaction />
        </GlobalContext>
      </div>
    </div>
  );
}

export default App;
