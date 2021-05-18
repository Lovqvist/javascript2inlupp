import axios from 'axios'

export default {
    state: {
        orders: [],
        order: null
    },
    getters: {
        orders: state => state.orders,
        order: state => state.order
    },
    mutations: {
        SET_ORDERS: (state, orders) => {
            state.orders = orders
        },
        GET_ORDERS: (state, orders) => {
            state.orders = orders
            
        }
    },
    actions: {
        confirmOrder: ({commit}, orders) => {
            axios.post('http://localhost:8888/api/order/', orders).then((res) => {
                commit('GET_ORDERS', res.data)
            })
            // console.log(orders)
        },
        getOrders: async ({commit}, email) => {
            const res = await axios.get('http://localhost:8888/api/order/' + email)
            commit('SET_ORDERS', res.data)
            // console.log(res)
        }
        
    }
}