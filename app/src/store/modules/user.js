import axios from 'axios'

export default {
    state: {
        loggedIn: false
    },
    getters: {
        loggedIn: state => state.loggedIn
    },
    mutations: {
        LOGIN_USER: state => {
            state.loggedIn = true
        },
        LOGOUT_USER: state => {
            state.loggedIn = false
        }
    },
    actions: {
        register: async ({ dispatch }, _user) => {
            await axios.post('http://localhost:8888/api/users/register', _user)
            const user = {
                email: _user.email,
                password: _user.password
            }
            dispatch('loggin', user)
        },
        login: ({ commit }, user) => {
            axios.post('http://localhost:8888/api/users/login', user)
            .then(res => {
                if(res.status === 200) {
                    commit('LOGIN_USER')
                }
            })
        },
        logout: ({commit}) => {
            commit('LOGOUT_USER')
        }
    }

}