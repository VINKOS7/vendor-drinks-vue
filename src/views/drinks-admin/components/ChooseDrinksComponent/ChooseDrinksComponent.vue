<template>
    <div :class="$style.chooseDrinks">
        <div v-for="drink in drinksChoose">
            <ChooseDrinkComponent 
                :UnBlock="UnBlock"
                :AddDrinksChosen="AddDrinksChosen"
                :drink="drink"/>
            />
        </div>
    </div>
</template>

<script setup lang="ts">
    import ChooseDrinkComponent  from './components/ChooseDrinkComponent.vue'
    import type { Drink } from '../../../models/drink'  

    defineProps<{
        drinksChoose: Drink[]
        AddDrinksChosen(drink: Drink): void
        UnBlock(ids: string[]): void
    }>()
</script>

<style lang="scss" module>
    .chooseDrinks{
        height: 70vh;
        border-bottom: 2px solid;
        border-color: white;
        overflow-y: scroll;

        &::-webkit-scrollbar {
            background-color: rgba(255, 255, 255, 0);
        }
        
        &::-webkit-scrollbar-thumb {
            background-color: rgba(100, 123, 201, 0.404);
            border-radius: 1px;
        }
    }
</style>