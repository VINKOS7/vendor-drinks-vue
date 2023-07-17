<template>
    <div :class="$style.buyBtn">
        <div v-if="difference < 0 && props.price > 0" >
            <div @click={Buy} :class="$style.buyBtnActive">
                    <div :class="$style.buyBtnText">buy</div>
            </div>
        </div>
        <div v-if="difference < 0">
            <div :class="$style.buyBtnNotEnoughMoney">
                    <div :class="$style.buyBtnText">lacks money</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        price: number
        money: number
        Buy(): void
    }>()

    const difference = props.price - props.money
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