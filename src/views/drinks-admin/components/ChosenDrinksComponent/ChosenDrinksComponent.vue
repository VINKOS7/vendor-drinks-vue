<template>
    <div  :class="$style.chosenDrinks">
        <div v-if="drinks.length">choose drink</div>
        <div v-for="drinkChosen in GetChosenDrinks(drinks)">
            <ChosenDrinkComponent :drink="drinkChosen"/>
        </div>
    </div>
</template>

<script setup lang="ts" module>
    import type { ChosenDrink } from '@/views/drinks-seller/components/ChosenDrinksComponent/models/ChosenDrink';
    import type { Drink } from '../../../models/drink';

    defineProps<{drinks: Drink[]}>()

    const GetChosenDrinks = (drinks: Drink[]) => {
        const drinksChosen = [] as ChosenDrink[]

        if(drinks.length !== 0){  
            drinks.map(d => {
                const quantity = drinks.filter(drink => drink.id === d.id).length
                const idx = drinks.findIndex(dr => dr.id == d.id)

                if(idx === -1) drinksChosen.push({id: d.id, name: d.name, image: d.image, quantity: quantity})
                else drinksChosen[idx].quantity = quantity     
            })
        }
    }
</script>

<style lang="scss" module>
    .chosenDrinks {
        width: 90vw;
        height: 145px;
        margin-inline: 5vw;
        margin-top: 10px;
        background-color: rgba(240, 248, 255, 0.103);
        overflow: auto;
        white-space: nowrap;
        border-bottom-right-radius: 70px;
        border-top-left-radius: 70px;
        border-bottom: 1px solid;

        &::-webkit-scrollbar {
            background-color: rgba(255, 255, 255, 0);
            width: 100px;
        }
        
        &::-webkit-scrollbar-thumb {
            background-color: rgba(100, 123, 201, 0.404);
            border-radius: 100px;

        }

        &::-webkit-scrollbar-track {
            width: 200px;
            margin-right: 9vw;
        }
    }
</style>