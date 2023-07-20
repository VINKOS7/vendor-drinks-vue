<template>
    <div :class="$style.buyBtn">
        <div @click="Buy" v-if="price - money <= 0 && price > 0" >
            <div :class="$style.buyBtnActive">
                    <div :class="$style.buyBtnText">buy</div>
            </div>
        </div>
        <div v-if="price - money > 0">
            <div :class="$style.buyBtnNotEnoughMoney">
                    <div :class="$style.buyBtnText">lacks money</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        price: number
        money: number
        Buy(): void
    }>()
</script>

<style lang="scss" module>
    .buyBtnActive {
        background-color: rgba(0, 255, 191, 0.842);
        margin-left: 2vw;
        margin-right: -20vw;
        margin-bottom: 10px;
        float: left;
        width: 15vw;
        height: 15vh;
        border-radius: 20%;
        text-align: center;
        color: black;
    }

    .buyBtnActive:hover {
        background-color: rgb(0, 255, 191);
    }

    .buyBtnNotEnoughMoney {
        background-color: rgba(109, 28, 141, 0.747);
        margin-left: 2vw;
        margin-right: -20vw;
        margin-bottom: 10px;
        float: left;
        width: 15vw;
        height: 15vh;
        border-radius: 20%;
        text-align: center;
    }

    .buyBtnText {
        line-height: 140px;
    }
</style>