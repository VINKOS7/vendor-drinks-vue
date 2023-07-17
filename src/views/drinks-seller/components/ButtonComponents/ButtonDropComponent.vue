<template>
    <div>
        <div v-if="price + money > 0" :class="$style.dropBtn">
            <div :class="$style.dropBtnText">drop</div>
        </div>       
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        price: number
        money: number
        Drop(): void
    }>()
</script>

<style lang="scss" module>
    .dropBtn {
        background-color: rgb(255, 0, 0);
        margin-left: -17vw;
        margin-right: 2vw;
        margin-bottom: 10px;
        float: left;
        width: 15vw;
        height: 15vh;
        border-radius: 20%;
        text-align: center;
    }

    .dropBtn:hover {
        background-color: rgb(255, 81, 0);
    }

    .dropBtnText {
        line-height: 140px;
    }
</style>