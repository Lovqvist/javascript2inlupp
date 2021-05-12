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
        
    },
    actions: {
        confirmOrder: ({commit}, orders) => {
            axios.post('http://localhost:8888/api/order/', orders).then((res) => {
                if(res.status === 201) {
                    commit('123')
                }
            })
            console.log(orders)
        }
    }
}