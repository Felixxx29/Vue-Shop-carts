<template>
    <div class="v-catalog">
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
        components: { VCatalogItem},
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
            ...mapGetters(['PRODUCTS'])
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API()
                .then(response => {
                    if (response.data) {
                        console.log('Data arrived')
                    }
                })
        },
    }
</script>

<style scoped lang="scss">
    .v-catalog {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
</style>