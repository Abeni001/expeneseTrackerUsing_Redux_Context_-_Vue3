<template>
    <div>
       <h3>Add new transaction</h3>
      <form ref="ruleFormRef" :model="ruleForm">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter text..." v-model="ruleForm.text" />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" placeholder="Enter amount..." v-model="ruleForm.amount" />
        </div>
        <button className="btn" @click.prevent="handleSubmit">Add transaction</button>
      </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTransactionStore } from '../stores/transaction';
const transactionStore = useTransactionStore()
const ruleForm = ref({
    text:'',
    amount:''
})
const handleSubmit = ()=>{
   transactionStore.AddTransactions(ruleForm.value)
   ruleForm.value.text=""
   ruleForm.value.amount="" 


}
</script>

<style lang="scss">

</style>