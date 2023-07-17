<script setup lang="ts">
import router from '@/router';


const Click = () => {
    router.push({path: '/drinks/seller'})
    router.go(1)
}

</script>

<template>
    <div :class="$style.helloPage" @click="Click">
        <div :class="$style.GoButton">GO TO DRINKS!</div>
    </div>
</template> 
 
<style lang="scss" module>
body {
    background-color: rgb(70, 56, 122);
}

.GoButton {
    position: fixed; /* or absolute */
    top: 50%;
    left: 50%;
    width: 200px;
    height: 100px;
    margin: -50px 0 0 -100px;
    border-radius: 20px;
    color: black;
    padding-left: 40px;
    line-height: 100px;
    background-color: aquamarine;
}

.GoButton:hover {
    background-color: rgb(85, 168, 141);
}
</style>