import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const transContext = createContext();

const GlobalContext = (props) => {
    const [transactions,setTransactions] = useState([
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]);

    const addTrans = (text,amount)=>{
        setTransactions([...transactions,{text,amount,id:uuidv4()}])
    }
    const removeTrans = (id)=>{
        setTransactions(transactions.filter(trans=>trans.id !== id))
    }
  return (
    <div>
      <transContext.Provider value={{transactions,removeTrans,addTrans}} >
        { props.children }
      </transContext.Provider>
    </div>
  )
}

export default GlobalContext
