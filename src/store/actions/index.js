import axios from "axios";

export default {
    GET_PRODUCTS_FROM_API({commit}) {
        return axios("http://localhost:3000/products", {
            method: "GET"
        })
            .then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data)
                return products
            })
            .catch(error => {
                console.error(error)
                return error
            })
    },
    ADD_TO_CART({commit}, product) {
        commit('SET_CART', product)
    },
    DELETE_FORM_CART({commit}, index) {
        commit('DELETE_CART_ITEM', index)
    }
}