<template>
        <div :class="$style.chosenDrink">
            <div>
                <div>{{props.drink.name}}</div>
                <img :class="$style.chosenDrinkIcon" :src="props.drink.image"/>
                <div>{{props.drink.quantity}}</div>
            </div>
        </div>
</template>

<script setup lang="ts">
    import type { ChosenDrink } from '../models/ChosenDrink';

    const props = defineProps<{
        drink: ChosenDrink
    }>()
</script>

<style lang="scss" module>
    .chosenDrinkIcon {
        width: 64px;
        height: 64px;
        border-radius: 100%;
        display:inline-block;
    }

    div:has(> .chosenDrink) {
        display:inline-block;
        width: 90px;
        margin: 5px;
        background-color: rgba(240, 248, 255, 0.192);
        border-radius: 20px;
    }
</style>