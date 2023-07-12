<template>
    <div 
        v-for="drink in props.drinksChoose" 
        class="ChooseDrinksComponent" 
        className="chooseDrinks"
    >
        <ChooseDrinkComponent 
            v-if="drink.quantity > 0" 
            :drink="drink" 
            :AddDrinksChosen="AddDrinksChosen" 
        />
    </div>
</template>  

<script setup lang="ts">
    import { type Drink } from '../../../models/drink'
    import ChooseDrinkComponent from './components/ChooseDrinkComponent.vue'

    const props = defineProps<{
        drinksChoose: Drink[]
        AddDrinksChosen(drink: Drink): void
    }>()
</script>

<style lang="scss" scoped>
    .chooseDrinks{
        height: 51vh;
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