<template>
    <div :class="$style.drinksSeller">
        <ChooseDrinksComponent :drinksChoose="drinksChoose" :AddDrinksChosen="AddDrinksChosen"/>         
        <ChosenCoinsComponent :coins="coinsChosen"/>
        <ChooseCoinsComponent :AddCoinsChosen="AddCoinsChosen"/>
        <div v-if="price + money > 0" :class="$style.infoCheckPanel">                
            <div :class="$style.infoCheck">
                price: {{price}}
                money: {{money}}
            </div>
        </div>
        <div :class="$style.endPanel">
            <div :class="$style.endPanelItem">
                <ButtonDropComponent :Drop="Drop" :price="price" :money="money"/>
            </div>
            <div :class="$style.endPanelItem">
                <ChosenDrinksComponent :drinks="drinksChosen"/>
            </div>
            <div :class="$style.endPanelItem">
                <ButtonBuyComponent :Buy="Buy" :price="price" :money="money"/>
            </div>       
        </div>       
    </div>
</template>

<script setup lang="ts">
    import ChooseDrinksComponent from "./components/ChooseDrinksComponent/ChooseDrinksComponent.vue"  
    import ChosenCoinsComponent from "./components/ChosenCoinsComponent/ChosenCoinsComponent.vue"
    import ChooseCoinsComponent from "./components/ChooseCoinsComponent/ChooseCoinsComponent.vue"
    import ChosenDrinksComponent from "./components/ChosenDrinksComponent/ChosenDrinksComponent.vue"
    import ButtonDropComponent from "./components/ButtonComponents/ButtonDropComponent.vue"
    import ButtonBuyComponent from "./components/ButtonComponents/ButtonBuyComponent.vue" 
    import { GetAndUpdateDrinks } from '@/services/GetAndUpdateDrinks';
    import { ref } from 'vue';
    import type { Drink } from '../models/drink';
    import type { Coin } from './models/coin';

    const drinksChoose = ref(await GetAndUpdateDrinks())
    const drinksChosen = ref([] as Drink[])
    const coinsChosen = ref([] as Coin[])

    const price = ref(0)
    const money = ref(0)

    const AddCoinsChosen = (coin: Coin) =>
    { 
        coinsChosen.value = coinsChosen.value.concat(coin) 
        money.value = coinsChosen.value.map(c => c.value).reduce((partialSum, a) => partialSum + a, 0)    
    }

    const AddDrinksChosen = (drink: Drink) => {
        const idx = drinksChoose.value.findIndex(d => d.id === drink.id)

        if(idx !== -1) {
            if(drink.quantity > 0){
                
                drinksChosen.value = drinksChosen.value.concat({
                    id: drink.id,
                    name: drink.name,
                    image: drink.image,
                    price: drink.price,
                    quantity: 1,
                    cup: drink.cup
                } as Drink)

                drink.quantity--

                price.value = drinksChosen.value.map(d => d.price*d.quantity).reduce((partialSum, a) => partialSum + a, 0)
            }
            else console.error('store quntity and chosen drink, not equals to DrinksSeller')          
        }
        else console.error('not found drink id to DrinksSeller')    
    }

    const Drop = async () => {
        drinksChosen.value = []     
        coinsChosen.value = []
        price.value = 0
        money.value = 0

        drinksChoose.value = await GetAndUpdateDrinks()
    }

    const Buy = () => {
        Drop()
    }
</script>

<style lang="scss" module>
    body {
        overflow-y: hidden;
        background-color: rgb(32, 29, 37);
    }

    .drinksSeller{
        color: white; 
    }

    .endPanel {
        white-space: nowrap;
        margin-top: -20px;
    }

    .endPanelItem {
        display:inline-block;
    }

    .infoCheck {
        display:inline-block;
        background-color: aliceblue;
        color: black;
        padding: 5px;
        border-radius: 10px;
        
    }

    .infoCheckPanel {
        margin-left: 1vw;
        height: 3px;
        margin-top: -10px;
        margin-bottom: 7px;
    }
</style>../models/coin