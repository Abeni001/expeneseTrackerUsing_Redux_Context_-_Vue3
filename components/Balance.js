import {useSelector} from 'react-redux'
import { selectAll } from '../features/Transactions/transanctionsSlice';

const Balance = () => {
    const transactions = useSelector(selectAll);
    let balance = transactions.map(trans=>trans.amount).reduce((total,crv)=>total+crv,0);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${balance}</h1>
    </>
  );
};

export default Balance;
