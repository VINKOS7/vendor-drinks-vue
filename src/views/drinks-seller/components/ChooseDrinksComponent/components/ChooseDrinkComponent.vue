<template>
    <div class="ChooseDrinkComponent">          
        <div className="chooseDrink" @click={props.AddDrinksChosen}>
            <img className="chooseDrinkIcon" src={{drink.image}}/>
            <div className="chooseDrinkText">
                <div>name: {{props.drink.name}}</div>    
                <div>price: {{props.drink.price}}</div>    
                <div>quantity: {{props.drink.quantity}}</div>    
            </div>
        </div>          
    </div>
</template>  

<script setup lang="ts">
    import { type Drink } from "../../../../models/drink"
    
    const props = defineProps<{
        drink: Drink
        AddDrinksChosen(drink: Drink): void
    }>()
    
    let isBlock = false
</script>

<style lang="scss" scoped>
    .chooseDrink {
        width: 94vw;
        background-color: rgba(109, 119, 206, 0.253);
        border-radius: 10px;
        margin-top: 10px;
        color: white;
        float: left;
        margin-left: 3vw;
    }

    .chooseDrink:hover{
        background-color: rgba(109, 119, 206, 0.425);

        .chooseDrink-icon{
            outline: 4px solid;
            outline-color: rgb(223, 10, 10);
        }
    }

    .chooseDrinkIcon {
        float: left;
        height: 96px;
        width: 96px;
        margin: 5px;
        border-radius: 100%;
    }

    .chooseDrinkText {
        margin-top: 20px;
        margin-left: 15px;
        text-align: left;
    }
</style>