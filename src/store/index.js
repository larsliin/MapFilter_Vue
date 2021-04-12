import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
    state: {
        properties: [],
    },
    mutations: {
        setProperties(state, properties) {
            state.properties = properties;
        },
    },
    getters: {
        propertiesList: (state) => state.properties,
    },
    actions: {
        async fetchProperties({ commit }, file) {
            const response = await axios.get(`http://localhost:8080/data/${file}.json`);
            commit('setProperties', response.data);
        },
    },
    modules: {},
});
