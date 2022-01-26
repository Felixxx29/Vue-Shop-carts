<template>
    <div class="v-main-wrapper">
        <h1>Catalog</h1>
        <v-catalog/>
        <v-cart
                v-if="this.CART.length"
                :cart_data="CART"

        />
    </div>
</template>

<script>
    import VCatalog from "./v-catalog";
    import VCart from "./v-cart";
    import {mapGetters} from 'vuex'

    export default {
        name: "v-main-wrapper",
        components: {VCart, VCatalog},
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters(['CART'])
        }
    }
</script>

<style scoped lang="scss">
    .v-main-wrapper {
        max-width: 900px;
        margin: 0 auto;
    }
</style>