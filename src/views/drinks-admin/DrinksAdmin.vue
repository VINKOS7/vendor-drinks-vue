<template>
    <div className={styles.drinksSeller}>     
        <div v-if="IsLogin()">
            <div>
                <ChooseDrinksComponent 
                    :UnBlock="UnBlock" 
                    :AddDrinksChosen="AddDrinksChosen" 
                    :drinksChoose="drinksChoose"
                />  
                <ChosenDrinksComponent :drinks="drinksChosen"/>   
                <div :class="$style.endPanel">
                    <div :class="$style.endPanelItem">
                        <div v-if="drinksChosen.length > 0">
                            <ButtonBlockComponent :Drop="Block"/>
                        </div>
                    </div>
                    <div :class="$style.endPanelItem">
                        <div v-if="drinksChosen.length > 0">
                            <ButtonDropComponent :Drop="Drop"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>  

<script setup lang="ts">
    import { ref } from 'vue';
    
    import { useBlockDrinksMutation, useUnBlockDrinksMutation } from '@/connection/drinks-admin/DrinksAdmin';

    import ChooseDrinksComponent from './components/ChooseDrinksComponent/ChooseDrinksComponent.vue'
    import ChosenDrinksComponent from './components/ChosenDrinksComponent/ChosenDrinksComponent.vue'
    import ButtonBlockComponent from './components/ButtonComponents/ButtonBlockComponent.vue'
    import ButtonDropComponent from './components/ButtonComponents/ButtonBlockComponent.vue'

    import type { Drink } from '../models/drink';
    import type { BlockIdsDrinkRequest } from '@/connection/drinks-admin/requests';

    import { GetAndUpdateDrinks } from '@/services/GetAndUpdateDrinks';
    import { GetDrinks } from '@/services/GetDrinks';

    const drinks = await GetAndUpdateDrinks()
    const drinksChosen = ref([] as Drink[])
    const drinksChoose = ref(drinks)

    const [blockDrinks] = useBlockDrinksMutation()
    const [unblockDrinks] = useUnBlockDrinksMutation()

    const IsLogin = () => {     

        // if(!getAccessToken()) {
        //     userManager.signinRedirect()
        // }

        return true
    }
    
    const AddDrinksChosen = (drink: Drink) => {
        const idx = drinksChoose.value.findIndex(d => d.id === drink.id)

        if(idx !== -1) {
            if(drink.quantity > 0){
                drink.quantity = -1

                drinksChosen.value = drinksChosen.value.concat(drink)
            }
            else console.error('store quntity and chosen drink, not equals to DrinksSeller')          
        }
        else console.error('not found drink id to DrinksSeller')    
    }

    const Drop = () => {
        drinksChosen.value = []
        drinksChoose.value = []
    }

    const Block = () => {
        const ids = drinksChosen.value.map(d => d.id)
        
        blockDrinks({ids: ids} as BlockIdsDrinkRequest)
        .unwrap()
        .then(() => {
            localStorage.setItem(
                'drink-ids-blocked', 
                JSON.stringify(ids as string[]
            )) 

            drinksChoose.value = GetDrinks()
            drinksChosen.value = []  
        })    
    }

    const UnBlock = (ids: string[]) => {    
        unblockDrinks({ids: ids} as BlockIdsDrinkRequest)
        .unwrap()
        .then(() => {
            const data = localStorage.getItem('drink-ids-blocked')
            console.log(ids)
            if(data) {
                const removeIds = JSON.parse(data) as string[]
                removeIds.forEach(id => delete ids[ids.findIndex(_id => id === _id)])

                localStorage.setItem(
                    'drink-ids-blocked', 
                    JSON.stringify(ids)
                ) 
            }

            drinksChoose.value = GetDrinks()
            drinksChoose.value = []
        })    
    }
</script>

<style lang="scss" module>
    .drinksSeller{
        color: white; 
    }

    body {
        overflow-y: hidden;
        background-color: rgb(32, 29, 37);
    }

    .endPanel {
        width: 20vw;
        white-space: nowrap;
        margin-top: 1px;
        margin-left: 0vw;
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
</style>@/services/GetAndUpdateDrinks