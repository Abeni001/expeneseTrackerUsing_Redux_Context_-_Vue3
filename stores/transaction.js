import { defineStore } from "pinia";

export const useTransactionStore = defineStore('transaction',{
    state:()=>({
        transactions:[
                { id: 1, text: 'Flower', amount: -20 },
                { id: 2, text: 'Salary', amount: 300 },
                { id: 3, text: 'Book', amount: -10 },
                { id: 4, text: 'Camera', amount: 150 }
            ]
    }),
    getters:{
        balance:state=>(state.transactions.map(trans=>trans.amount).reduce((total,crv)=>total+crv,0)),
        positive:state=>(state.transactions.map(trans=>trans.amount).filter(trans=>trans >0).reduce((total,crv)=>total+crv,0)),
        negative:state=>(state.transactions.map(trans=>trans.amount).filter(trans=>trans <0).reduce((total,crv)=>total+crv,0))
    },
    actions:{
        AddTransactions(data){
            this.transactions.push({id:5,text:data.text,amount:Number(data.amount)})
        },
        RemoveTransaction(id){
            const index = this.transactions.findIndex(trans=>trans.id===id)
            if(index !== -1){
            this.transactions.splice(index,1)
            }
        }
    }
})