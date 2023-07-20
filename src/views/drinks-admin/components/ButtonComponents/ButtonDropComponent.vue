<template>
    <div @click="Drop" :class="$style.dropBtn">
        <div :class="$style.dropBtnText">drop</div>
    </div>        
</template>

<script setup lang="ts">
    defineProps<{Drop(): void}>()
</script>

<style lang="scss" module>
    .dropBtn {
        background-color: rgb(7, 177, 148);
        height: 70px;
        width: 35vw;
        margin: 10px;
        margin-right: -3.5vw;
        border-bottom-right-radius: 40px;
    }

    .dropBtn:hover {
        background-color: rgb(8, 155, 130);
    }

    .dropBtnText {
        line-height: 70px;
    }
</style>