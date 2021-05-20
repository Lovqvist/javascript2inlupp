import axios from 'axios'
import router from  '../../router'

export default {
    state:{
        user: null,
        loggedIn: false,
        error: null
        
    },
    getters: {
        loggedIn: state => state.loggedIn,
        user: state => state.user,
        error: state => state.error
    },
    mutations: {
        LOGIN_USER: (state, user) => {
            state.loggedIn = true
            state.user = user
        },
        LOGOUT_USER: state => {
            state.loggedIn = false
            state.user = null
        },
        SET_ERROR: (state, msg) => {
            state.error = msg
        }
    },
    actions: {
        register: async ({dispatch}, _user) => {
            await axios.post('http://localhost:8888/api/users/register', _user)
            const user = {
                email: _user.email,
                password: _user.password
            }
            dispatch('login', user)
        },
        login: ({commit}, user) => {
            axios.post('http://localhost:8888/api/users/login', user)
            .then(res =>{
                if(res.status === 200){
                    commit('LOGIN_USER', user.email)
                    commit('SET_ERROR', null)
                    router.push('/')
                } 
            })
            .catch(() => {
                commit('SET_ERROR', 'Fel lösenord eller emailadress')
            })
            
            
        },
        logout: ({commit}) => {
            commit('LOGOUT_USER')
            router.push('/')
        }
    }
}