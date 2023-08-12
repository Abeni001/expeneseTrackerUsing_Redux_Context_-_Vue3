<script setup>
import AddTransaction from './components/AddTransaction.vue';
import IncomeExpenses from './components/IncomeExpenses.vue';
import Balance from './components/Balance.vue';
import Transactions from './components/Transactions.vue';
import Header from './components/Header.vue';

</script>

<template>
  <div>
    <Header />
    <div class="container">
      <Balance />
      <IncomeExpenses />
      <Transactions />
      <AddTransaction />
    </div>
  </div>
</template>

<style>
@import url('./assets/index.css')
</style>

