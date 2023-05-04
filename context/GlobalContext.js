import { createContext, useReducer} from 'react'
import { TransReducer } from '../Reducers/TransReducer';


export const transContext = createContext();

const GlobalContext = (props) => {
    const [transactions,dispatch] = useReducer(TransReducer,[
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]);

    
  return (
    <div>
      <transContext.Provider value={{transactions,dispatch}} >
        { props.children }
      </transContext.Provider>
    </div>
  )
}

export default GlobalContext
