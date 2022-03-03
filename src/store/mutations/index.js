export default {
    SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products = products
    },
    SET_CART: (state, product) => {
        if (state.cart.find(item => item === product)) {
            let idx = state.cart.indexOf(product)
            if (!state.cart[idx].amount) {
                state.cart[idx].amount = 2
            } else {
                state.cart[idx].amount++
            }
            return
        }
        state.cart.push(product)
    },
    DELETE_CART_ITEM(state, index) {
        if (state.cart[index].amount) delete state.cart[index].amount

        state.cart.splice(index,1)
    }
}