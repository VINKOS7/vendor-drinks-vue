<template>
    <div  class="ChosenDrinksComponent" className="chosenDrinks">
        <div v-if="props.drinks.length === 0">choose drink</div>
        <div v-for="drink in drinks">
            <ChosenDrinkComponent :drink="drink"/>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { Drink } from '../../../models/drink';
    import ChosenDrinkComponent from './components/ChosenDrinkComponent.vue'
    import type { ChosenDrink } from './models/ChosenDrink';
    
    const props = defineProps<{
        drinks: Drink[]
    }>()
    
    const drinks = [] as ChosenDrink[]

    if(props.drinks.length !== 0){  
        props.drinks.map(d => {
            const quantity = props.drinks.filter(drink => drink.id === d.id).length
            const idx = drinks.findIndex(dr => dr.id == d.id)

            if(idx === -1) drinks.push({id: d.id, name: d.name, image: d.image, quantity: quantity})
            else drinks[idx].quantity = quantity     
        })
    }
</script>

<style lang="scss" scoped>
    .chosenDrinks {
        width: 60vw;
        height: 145px;
        //margin-inline: 20vw;
        margin-top: 50px;
        background-color: rgba(240, 248, 255, 0.103);
        overflow: auto;
        white-space: nowrap;
        scroll-snap-align: center;
        border-top-right-radius: 70px;
        border-top-left-radius: 70px;
        border-top: 1px solid;
        
        &::-webkit-scrollbar {
            background-color: rgba(255, 255, 255, 0);
        }
        
        &::-webkit-scrollbar-thumb {
            background-color: rgba(100, 123, 201, 0.404);
            border-radius: 10px;
            
        }
    }
</style>