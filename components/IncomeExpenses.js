import { useSelector } from "react-redux"
import { selectAll } from "../features/Transactions/transanctionsSlice";

const IncomeExpenses = () => {

const transactions = useSelector(selectAll)

const amount = transactions.map(trans=>trans.amount)

const pstv = amount.filter(trans=> trans > 0)
.reduce((total,crv)=>total+crv,0)
const ngtv = amount.filter(trans=> trans < 0)
.reduce((total,crv)=>total+crv,0)
 

return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">
          +${pstv}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">
          -${ngtv*-1}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
