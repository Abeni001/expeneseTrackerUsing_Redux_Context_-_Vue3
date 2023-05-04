import { useContext } from "react";
import { transContext } from "../context/GlobalContext";

const Balance = () => {
    const { transactions } =useContext(transContext);
    let balance = transactions.map(trans=>trans.amount).reduce((total,crv)=>total+crv,0);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${balance}</h1>
    </>
  );
};

export default Balance;
