import {useSelector,useDispatch} from "react-redux"
import { selectAll,removeTrans } from "../features/Transactions/transanctionsSlice";

const Transaction = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectAll);
  const history = transactions.map((trans) =>
    trans.amount >= 0 ? (
      <li className="plus" key={trans.id}>
        {trans.text} <span>${trans.amount}</span>
        <button
          className="delete-btn"
          onClick={()=>dispatch(removeTrans({id:trans.id}))}
        >
          x
        </button>
      </li>
    ) : (
      <li className="minus" key={trans.id}>
        {trans.text} <span>-${trans.amount * -1}</span>
        <button
          className="delete-btn"
          onClick={()=>dispatch(removeTrans({id:trans.id}))}
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
