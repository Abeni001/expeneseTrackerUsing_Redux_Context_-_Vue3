<template>
    <div>
        <h3>History</h3>
        <ul class="list" v-for="trans in transactions">
            <li v-if="trans.amount >= 0" class="plus" :key="trans.id">
                {{trans.text}} <span>${{trans.amount}}</span>
                 <button class="delete-btn" @click="removeTrans(trans.id)">
                    x
                </button>
            </li>
            <li v-else class="minus" :key="trans.name">
                {{trans.text}} <span>-${{trans.amount * -1}}</span>
                <button class="delete-btn" @click="removeTrans(trans.id)">
                    x
                </button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref,onMounted } from 'vue'
import { useTransactionStore } from '../stores/transaction';

const transactionStore = useTransactionStore()

const transactions = ref([]);

onMounted(()=>{
    transactions.value = transactionStore.transactions
})
const removeTrans=(id)=>{
transactionStore.RemoveTransaction(id)
transactions.value = transactionStore.transactions

}
</script>

<style lang="scss">

</style>