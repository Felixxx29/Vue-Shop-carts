<template>
    <div class="v-cart-item">
        <img class="v-cart-item__image" :src="require('/src/assets/images/' + cart_item_data.image)" alt="">
        <div class="v-cart-item__info">
            <p>{{cart_item_data.name}}</p>
            <p>{{ parseInt(cart_item_data.price) }}</p>
            <p>{{cart_item_data.article}}</p>
            <p>{{cart_item_data.amount}}</p>
        </div>
        <button @click="deleteFromCart">Delete</button>
    </div>
</template>

<script>
    export default {
        name: "v-cart-item",
        props: {
            cart_item_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            deleteFromCart() {
                this.$emit('deleteFromCart')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .v-cart-item {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: $padding*2;
        margin-bottom: $margin*2;
    }

    .v-cart-item__image {
        max-width: 50px;
    }
    .v-cart-item__info {
        display: flex;
        flex-grow: 1;
        justify-content: space-evenly;
        padding-left: 20px;
        padding-right: 20px;
    }
</style>