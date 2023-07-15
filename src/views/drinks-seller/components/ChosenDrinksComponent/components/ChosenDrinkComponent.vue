<template>
        <div class="ChosenDrinkComponent" className="chosenDrink">
            <div>
                <div>{{props.drink.name}}</div>
                <img className="chosenDrinkIcon" src={{props.drink.image}}/>
                <div>{{props.drink.quantity}}</div>
            </div>
        </div>
</template>

<script setup lang="ts">
    import type { Drink } from '../../../../models/drink';

    const props = defineProps<{
        drink: Drink
    }>()
</script>

<style lang="scss" scoped>
    .chosenDrinkIcon {
        width: 64px;
        height: 64px;
        border-radius: 100%;
        display:inline-block;
    }

    .chosenDrink {
        display:inline-block;
        width: 90px;
        margin: 5px;
        background-color: rgba(240, 248, 255, 0.192);
        border-radius: 20px;
    }
</style>