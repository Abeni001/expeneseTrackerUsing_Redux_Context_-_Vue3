import { useContext } from "react";
import { transContext } from "../context/GlobalContext";


const IncomeExpenses = () => {

const{transactions} = useContext(transContext)

const pstv = transactions.filter(trans=> trans.amount > 0)
.map(trans=>trans.amount).reduce((total,crv)=>total+crv,0)
const ngtv = transactions.filter(trans=> trans.amount < 0)
.map(trans=>trans.amount).reduce((total,crv)=>total+crv,0)
 

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
