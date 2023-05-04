import { v4 as uuidv4 } from 'uuid';

export const TransReducer = (state,action)=>{

    switch(action.type){
        case 'ADD_TRANS':

            return [...state,{text:action.payload.text,amount:Number(action.payload.amount),id:uuidv4()}];

        case 'REMOVE_TRANS':

            return state.filter(state=>state.id !== action.id);

        default:
        return state;
    }

}