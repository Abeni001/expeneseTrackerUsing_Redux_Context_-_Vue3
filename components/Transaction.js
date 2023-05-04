import { useContext } from "react";
import { transContext } from "../context/GlobalContext";

const Transaction = () => {
  const { transactions, dispatch } = useContext(transContext);
  const history = transactions.map((trans) =>
    trans.amount >= 0 ? (
      <li className="plus" key={trans.id}>
        {trans.text} <span>${trans.amount}</span>
        <button
          className="delete-btn"
          onClick={()=>dispatch({ type: "REMOVE_TRANS", id: trans.id })}
        >
          x
        </button>
      </li>
    ) : (
      <li className="minus" key={trans.id}>
        {trans.text} <span>-${trans.amount * -1}</span>
        <button
          className="delete-btn"
          onClick={()=>dispatch({ type: "REMOVE_TRANS", id: trans.id })}
        >
          x
        </button>
      </li>
    )
  );

  console.log(history);
  return (
    <>
      <h3>History</h3>
      <ul className="list">{history}</ul>
    </>
  );
};

export default Transaction;
