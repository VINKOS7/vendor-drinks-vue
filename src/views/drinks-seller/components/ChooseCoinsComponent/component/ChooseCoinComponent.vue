<template>
    <div @click="() => AddCoinsChosen(coin)" :class="$style.chooseCoin">
        <div :class="$style.chooseCoinText">
            {{coin.value + ' ' + coin.currency}}
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { Coin } from '../../../models/coin';

    defineProps<{
        coin: Coin
        AddCoinsChosen(coin: Coin): void
    }>()
</script>

<style lang="scss" module>
    .chooseCoin {
        height: 5vh;
        width: 95vw;
        background-color: rgba(158, 205, 233, 0.349);
        border-radius: 1cm;
        margin-top: 10px;
        margin-left: 2.5vw;
    }

    .chooseCoin:hover {
        background-color: rgba(14, 81, 119, 0.74);
    }

    .chooseCoinText {
        padding-top: 13px;
    }
</style>