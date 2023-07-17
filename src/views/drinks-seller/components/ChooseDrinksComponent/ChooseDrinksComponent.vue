<template>
    <div :class="$style.chooseDrinks">
        <div v-for="drink in drinksChoose">
            <ChooseDrinkComponent 
                v-if="drink.quantity > 0" 
                :drink="drink" 
                :AddDrinksChosen="AddDrinksChosen" 
            />
        </div>
    </div>
</template>  

<script setup lang="ts">
    import { type Drink } from '../../../models/drink'
    import ChooseDrinkComponent from './components/ChooseDrinkComponent.vue'

    defineProps<{
        drinksChoose: Drink[]
        AddDrinksChosen(drink: Drink): void
    }>()
</script>

<style lang="scss" module>
    .chooseDrinks{
        height: 51vh;
        width: 98vw;
        border-bottom: 2px solid;
        border-color: white;
        overflow-y: scroll;

        &::-webkit-scrollbar {
            background-color: rgba(255, 255, 255, 0);
        }
        
        &::-webkit-scrollbar-thumb {
            background-color: rgba(100, 123, 201, 0.404);
            border-radius: 10px;
        }
    }
</style>