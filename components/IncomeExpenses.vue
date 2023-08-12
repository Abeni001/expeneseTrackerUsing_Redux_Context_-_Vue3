<template>
     <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">
          +${{transactionStore.positive}}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">
          -${{ transactionStore.negative * -1}}
        </p>
      </div>
    </div>
</template>

<script setup>
import { ref,onMounted, watch } from 'vue'
import { useTransactionStore } from '../stores/transaction';

const transactionStore = useTransactionStore()
</script>

<style lang="scss">

</style>