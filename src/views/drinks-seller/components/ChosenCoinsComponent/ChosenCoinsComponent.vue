<template>
    <div :class="$style.chosenCoins">
        <div v-for="coin, key in UpdateCoins()">
            <ChosenCoinComponent :key="key" :coin="coin"/>
        </div>
    </div>
</template>

<script setup lang="ts">
    import ChosenCoinComponent from "./components/ChosenCoinComponent.vue"
    import type { Coin } from '../../models/coin';
    import type { ChosenCoin } from './components/Models/ChosenCoin';
 
    const props = defineProps<{
        coins: Coin[]
    }>() 

    const UpdateCoins = () => {
        const chosenCoins = [] as ChosenCoin[]

        if(props.coins.length !== 0) {     
            props.coins.forEach(c => {
                const idx = chosenCoins.findIndex(coin => c.value === coin.coin.value)
               
                if(idx === -1) chosenCoins.push({
                        coin: c, 
                        quantity:  props.coins.filter(coin => coin.value === c.value).length
                })           
                else chosenCoins[idx].quantity = props.coins.filter(coin => coin.value === c.value).length   
            })
        }

        return chosenCoins
    }
</script>

<style lang="scss" module>
    .chosenCoins {
        margin-left: 1vw;
        height: 3px;
    }
</style>
