<template>
    <div class="v-catalog">
        <router-link class="v-catalog__link_to_cart" to="/cart">
                Cart: {{ this.calcCartItems }}
        </router-link>
        <v-catalog-item
                v-for="product in this.PRODUCTS"
                :key="product.article"
                :product_data="product"
                @addToCart="addToCart"
        />
    </div>
</template>

<script>
    import VCatalogItem from "./v-catalog-item";
    import {mapActions, mapGetters} from 'vuex'


    export default {
        name: "v-catalog",
        components: {VCatalogItem},
        data() {
            return {}
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'ADD_TO_CART'
            ]),
            addToCart(data) {
                this.ADD_TO_CART(data)
            }
        },
        computed: {
            ...mapGetters(['PRODUCTS','CART']),
            calcCartItems(){
                return this.CART.reduce((first,next) => {
                    if (next.amount) {
                        return first + next.amount
                    }
                    return first + 1
                },0)
            },
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API()
        },
    }
</script>

<style scoped lang="scss">
    .v-catalog {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        &__link_to_cart {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: $padding*2;
            border: 1px solid #eaeaea;
            text-decoration: none;
            color: black;
        }
    }
</style>