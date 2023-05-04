import React, { useState,useContext } from 'react';
import { transContext } from '../context/GlobalContext';


const AddTransaction = () => {
    const {dispatch} = useContext(transContext)
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);

    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch({type:'ADD_TRANS',payload:{text,amount}})
        setText('');
        setAmount(0);
    }

  return (
    <div>
       <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter text..." value={text} onChange={(e)=>setText(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" placeholder="Enter amount..." value={amount} onChange={(e)=>setAmount(e.target.value)} />
        </div>
        <button className="btn" onClick={handleSubmit}>Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
