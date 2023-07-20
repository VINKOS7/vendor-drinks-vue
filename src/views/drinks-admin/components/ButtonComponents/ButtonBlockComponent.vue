import styles from "./ButtonBlockComponent.module.scss"

export interface ButtonDropComponentProps {
    Drop(): void
}

export const ButtonBlockComponent = (props: ButtonDropComponentProps) => {
    return (
        <div>
            <div onClick={props.Drop} className={styles.dropBtn}>
                <div className={styles.dropBtnText}>block</div>
            </div>        
        </div>        
    )
}

<template>
    <div>
        <div @click="Drop" :class="$style.dropBtn">
            <div :class="$style.dropBtnText">block</div>
        </div>        
    </div> 
</template>

<script setup lang="ts">
    defineProps<{Drop(): void}>()
</script>

<style lang="scss" module>
    .dropBtn {
        background-color: rgb(255, 0, 0);
        height: 70px;
        width: 40vw;
        border-bottom-left-radius: 40px;
        margin-left: 5vw;
        margin-top: 10px;
    }

    .dropBtn:hover {
        background-color: rgb(255, 81, 0);
    }

    .dropBtnText {
        line-height: 70px;
    }
</style>