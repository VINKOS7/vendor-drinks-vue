<template>
    <div v-if="!isBlock" :class="$style.chooseDrink" @click="() => AddDrinksChosen(drink)">
        <img :class="$style.chooseDrinkIcon" :src="drink.image"/>
        <div :class="$style.chooseDrinkText">
            <div>name: {{drink.name}}</div>    
            <div>price: {{drink.price}}</div>    
            <div>quantity: {{drink.quantity}}</div>    
        </div>
    </div> 
</template>  

<script setup lang="ts">
    import type { Drink } from "../../../../models/drink"
    
    const props = defineProps<{
        drink: Drink
        AddDrinksChosen(drink: Drink): void
    }>()

    const blockedIdsDrinkData = localStorage.getItem('drink-ids-blocked')

    let isBlock = false

    if(blockedIdsDrinkData) 
        if((JSON.parse(blockedIdsDrinkData) as string[]).findIndex(id => id === props.drink.id) !== -1)
            isBlock = true;     
</script>

<style lang="scss" module>
    .chooseDrink {
        width: 91vw;
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