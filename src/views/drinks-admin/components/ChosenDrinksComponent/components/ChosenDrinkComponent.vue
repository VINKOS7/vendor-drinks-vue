<template>
    <div :class="$style.chosenDrink">
        <div>
            <div>{{drink.name}}</div>
            <img :class="$style.chosenDrinkIcon" :src="drink.image"/>
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { ChosenDrink } from '../models/ChosenDrink';

    defineProps<{drink: ChosenDrink}>()
</script>

<style lang="scss" module>
    .chosenDrinkIcon {
        width: 64px;
        height: 64px;
        border-radius: 100%;
        display: inline-block;
    }

    .chosenDrink {
        display: inline-block;
        width: 90px;
        margin: 5px;
        background-color: rgba(240, 248, 255, 0.192);
        border-radius: 20px;
    }
</style>