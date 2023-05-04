import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const transanctionsSlice = createSlice({
    name:'Transactions',
    initialState:[
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ],
    reducers:{
        addTrans:{
            reducer(state,action)
            {
             state.push(action.payload)
            },
            prepare(text,amount){
                return{
                    payload:{
                        id:uuidv4(),
                        text,
                        amount:Number(amount)
                    }
                }
            }
        },
        removeTrans(state,action){
            const {id} = action.payload
          return state.filter(trans=>trans.id !== id)
        }
    }
}) 

export const selectAll=state=>state.Transactions
export const {addTrans,removeTrans} = transanctionsSlice.actions

export default transanctionsSlice.reducer
