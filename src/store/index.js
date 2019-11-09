import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        api_token: localStorage.getItem('user-token') || '',
        status: '',
    },
    mutations: {
        AUTH_REQUEST: (state) => {
            state.status = 'loading'
        },
        AUTH_SUCCESS: (state, token) => {
            state.status = 'success';
            state.api_token = token
        },
        AUTH_ERROR: (state) => {
            state.status = 'error'
        },
    },
    actions: {
        AUTH_REQUEST: ({commit, dispatch}, user) => {
            return new Promise((resolve, reject) => {
                commit('AUTH_REQUEST');
                axios({url: 'http://socials.local/api/login', data: user, method: 'POST'}).then(resp => {
                    const token = resp.data.api_token;
                    localStorage.setItem('user-token', token);
                    // Add the following line:
                    axios.defaults.headers.common['Authorization'] = token;
                    commit('AUTH_SUCCESS', resp);
                   // dispatch('USER_REQUEST');
                    resolve(resp);
                }).catch(err => {
                    commit('AUTH_ERROR', err);
                    localStorage.removeItem('user-token')
                    reject(err)
                })
            })
        },
        AUTH_LOGOUT: ({commit, dispatch}) => {
            return new Promise((resolve, reject) => {
                commit('AUTH_LOGOUT');
                localStorage.removeItem('user-token')
                // remove the axios default header
                delete axios.defaults.headers.common['Authorization'];
                resolve()
            })
        }
    },
    modules: {},
    getters: {
        isAuthenticated: state => !!state.api_token,
        authStatus: state => state.status,
    }
})
