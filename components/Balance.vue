<template>
    <div>
      <h4>Your Balance</h4>
      <h1>{{ transactionStore.balance }}</h1>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useTransactionStore } from '../stores/transaction';
const transactionStore = useTransactionStore();
</script>

<style lang="scss">

</style>