<template>
    <div>
        <div v-if="drink.quantity !== -1 && !IsBlock()">
            <div :class="$style.chooseDrink" @click="() => AddDrinksChosen(drink)">
            <img :class="$style.chooseDrinkIcon" :src="drink.image"/>
                <div :class="$style.chooseDrinkText">
                    <div>name: {{drink.name}}</div>    
                    <div>price: {{drink.price}}</div>    
                </div>
            </div>
        </div>
        <div v-if="drink.quantity === -1">
            <div :class="$style.chooseDrinkClicked">
            <img :class="$style.chooseDrinkIcon" :src="drink.image"/>
                <div :class="$style.chooseDrinkText">
                    <div>name: {{props.drink.name}}</div>    
                    <div>price: {{props.drink.price}}</div>    
                </div>
            </div>   
        </div>
        <div v-if="drink.quantity === -1">
            <div :class="$style.chooseDrinkClicked">
            <img :class="$style.chooseDrinkIcon" :src="drink.image"/>
                <div :class="$style.chooseDrinkText">
                    <div>name: {{props.drink.name}}</div>    
                    <div>price: {{props.drink.price}}</div>    
                </div>
            </div>  
        </div>
        <div v-if="IsBlock()">
            <div :class="$style.chooseDrinkBlocked">
            <img :class="$style.chooseDrinkIcon" :src="drink.image"/>
                <div :class="$style.chooseDrinkText">
                    <div>name: {{props.drink.name}}</div>    
                    <div>price: {{props.drink.price}}</div>    
                </div>
                <div @click="() => UnBlock([props.drink.id])" :class="$style.unBlockButton">UNBLOCK</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { Drink } from '../../../../models/drink';

    const props = defineProps<{
        drink: Drink
        AddDrinksChosen(drink: Drink): void
        UnBlock(ids: string[]): void
    }>()

    const IsBlock = () => {
        const blockedIdsDrinkData = localStorage.getItem('drink-ids-blocked')
    
        if(blockedIdsDrinkData) 
            if(blockedIdsDrinkData?.toString())
                if((JSON.parse(blockedIdsDrinkData) as string[]).findIndex(id => id === props.drink.id) !== -1)
                    return true;

        return false
    }
</script>

<style lang="scss" module>
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

    .chooseDrinkClicked {
        width: 94vw;
        background-color: rgba(230, 232, 247, 0.253);
        border-radius: 10px;
        margin-top: 10px;
        color: white;
        float: left;
        margin-left: 3vw;
    }

    .unBlockButton {
        background-color: red;
        width: 10vw;
        height: 10vh;
        margin-left: 80vw;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-color: white;
        border-top: 2px solid;
        border-left: 1px  solid;
        border-right: 1px  solid;

        &:hover {
            height: 20vh;
            transition: max-height 0.25s ease-in;
        }
    }




    .chooseDrinkBlocked {
        width: 94vw;
        background-color: rgba(0, 217, 255, 0.356);
        border-radius: 10px;
        margin-top: 10px;
        color: white;
        float: left;
        margin-left: 3vw;
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