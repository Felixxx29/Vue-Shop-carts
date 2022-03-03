<template>
    <div class="v-cart">
        <h1>cart</h1>
        <v-cart-item
                v-for="(item, index) in this.CART"
                :key="item.article"
                :cart_item_data="item"
                @deleteFromCart="deleteFromCart(index)"
        />
        <div class="v-cart__total">
            <p class="total__name"></p>

        </div>
    </div>
    <router-link class="link_to_main" to="/">
        Back to catalog
    </router-link>

</template>

<script>
    import VCartItem from "./v-cart-item";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "v-cart",
        components: {VCartItem},
        methods: {
            ...mapActions(['DELETE_FORM_CART']),
            deleteFromCart(index) {
                this.DELETE_FORM_CART(index)
            }
        },
        computed: {
            ...mapGetters(['CART'])
        }
    }
</script>

<style scoped lang="scss">
    .v-cart {
        &__total {
            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            padding: $padding*3;
            display: flex;
            justify-content: center;
        }
        .total__name {
            margin-right: $margin*2;
            background: green;
        }
    }
    .link_to_main {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: $padding*2;
        border: 1px solid #eaeaea;
        text-decoration: none;
        color: black;
    }
</style>