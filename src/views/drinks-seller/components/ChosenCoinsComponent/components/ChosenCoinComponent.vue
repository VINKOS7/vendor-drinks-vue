<template>
    <div :class="$style.chosenCoin">
        {{coin.coin.value + ' ' 
        + coin.coin.currency +  ' ' 
        + coin.quantity}}
    </div>
</template>

<script setup lang="ts">
    import type { ChosenCoin } from './Models/ChosenCoin';

    defineProps<{coin: ChosenCoin}>()
</script>

<style lang="scss" module>

    div:has(> .chosenCoin) {
        display:inline-block;
        background-color: aliceblue;
        color: black;
        margin: 5px;
        padding: 5px;
        border-radius: 10px;
    }
</style>