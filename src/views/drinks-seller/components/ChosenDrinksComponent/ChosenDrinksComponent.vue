<template>
    <div :class="$style.chosenDrinks">
        <div v-if="drinks.length === 0">choose drink</div>
        <div v-else v-for="drink, key in FilterDrinks()">
            <ChosenDrinkComponent :key="key" :drink="drink"/>
        </div>
    </div>
</template>

<script setup lang="ts">
    import ChosenDrinkComponent from './components/ChosenDrinkComponent.vue'
    import type { Drink } from '../../../models/drink';
    import type { ChosenDrink } from './models/ChosenDrink';
    
    const props = defineProps<{
        drinks: Drink[]
    }>() 

    const FilterDrinks = () => {
        const drinksChosen = [] as ChosenDrink[]

        if(props.drinks.length !== 0){  
            props.drinks.map(d => {
                const quantity = props.drinks.filter(drink => drink.id === d.id).length
                const idx = drinksChosen.findIndex(dr => dr.id == d.id)

                if(idx === -1) drinksChosen.push({id: d.id, name: d.name, image: d.image, quantity: quantity})
                else drinksChosen[idx].quantity = quantity     
            })
        }

        return drinksChosen
    }
</script>

<style lang="scss" module>
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