<template>
    <div :class="$style.chooseCoins">
        <div v-for="coin, key in coins">
            <ChooseCoinComponent :key="key" :AddCoinsChosen="AddCoinsChosen" :coin="coin"/>
        </div>
    </div>
</template>


<script setup lang="ts"> 
    import { type Coin } from '../../models/coin'
    import ChooseCoinComponent from './component/ChooseCoinComponent.vue'
    
    defineProps<{
        AddCoinsChosen(coin: Coin): void
    }>()

    const coins = [
        {value: 1, currency: "Ruble"},
        {value: 2, currency: "Ruble"},
        {value: 5, currency: "Ruble"},
        {value: 10, currency: "Ruble"},
    ] as Coin[]
</script>

<style lang="scss" module>
    .chooseCoins {
        height: 25vh;
        margin-top: 40px;
    }
</style>../../../models/coin