<template>
        <div className="drinksSeller">
            <ChooseDrinksComponent :drinksChoose="drinksChoose" :AddDrinksChosen="AddDrinksChosen"/>         
            <ChosenCoinsComponent :coins="coinsChosen"/>
            <ChooseCoinsComponent :AddCoinsChosen="AddCoinsChosen"/>
            {price + money > 0 && 

                <div className="infoCheckPanel">                
                    <div className="infoCheck">
                        price: {price}
                        money: {money}
                    </div>
                </div>
            }
            <div className="endPanel">
                <div className="endPanelItem">
                    <ButtonDropComponent :Drop="Drop" :price="price" :money="money"/>
                </div>
                <div className="endPanelItem">
                    <ChosenDrinksComponent :drinks="drinksChosen"/>
                </div>
                <div className="endPanelItem">
                    <ButtonBuyComponent :Buy="Buy" :price="price" :money="money"/>
                </div>       
            </div>       
        </div>
    <div class="drinksSeller">
        <div>DrinksSeller</div>
    </div>
</template>

<script setup lang="ts">
    import ChooseDrinksComponent from "./components/ChooseDrinksComponent/ChooseDrinksComponent.vue"  
    import ChosenCoinsComponent from "./components/ChosenCoinsComponent/ChosenCoinsComponent.vue"
    import ChooseCoinsComponent from "./components/ChooseCoinsComponent/ChooseCoinsComponent.vue"
    import ChosenDrinksComponent from "./components/ChosenDrinksComponent/ChosenDrinksComponent.vue"
    import ButtonDropComponent from "./components/ButtonComponents/ButtonDropComponent.vue"
    import ButtonBuyComponent from "./components/ButtonComponents/ButtonBuyComponent.vue" 
    import { GetDrinks } from '@/services/GetDrinks';
    import { ref } from 'vue';
    import type { Drink } from '../models/drink';
    import type { Coin } from './models/coin';

    const drinksChosen = ref([] as Drink[])
    const coinsChosen = ref([] as Coin[])
    const drinksChoose = ref(GetDrinks())

    const price = drinksChosen.value.map(d => d.price*d.quantity).reduce((partialSum, a) => partialSum + a, 0)
    const money = coinsChosen.value.map(c => c.value).reduce((partialSum, a) => partialSum + a, 0)

    const AddCoinsChosen = (coin: Coin) => coinsChosen.value = coinsChosen.value.concat(coin)

    const AddDrinksChosen = (drink: Drink) => {
        const idx = drinksChoose.value.findIndex(d => d.id === drink.id)

        if(idx !== -1) {
            if(drink.quantity > 0){
                drink.quantity--

                drinksChosen.value = drinksChosen.value.concat({
                    id: drink.id,
                    name: drink.name,
                    image: drink.image,
                    price: drink.price,
                    quantity: 1,
                    cup: drink.cup
                } as Drink)
            }
            else console.error('store quntity and chosen drink, not equals to DrinksSeller')          
        }
        else console.error('not found drink id to DrinksSeller')    
    }

    const Drop = () => {
        drinksChosen.value = []
        drinksChoose.value = GetDrinks()
        coinsChosen.value = []
    }

    const Buy = () => {
        Drop()
    }
</script>

<style lang="scss" scoped>
    .drinksSeller{
        color: white; 
    }

    body {
        overflow-y: hidden;
        background-color: rgb(32, 29, 37);
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
</style>