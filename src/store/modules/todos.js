import axios from 'axios'

const state = {
    todos: []
};

const getters = {
    getTodos: (state) => state.todos
};


//Actions is for fetching data
const actions = {
    async fetchTodos({commit}) {
        const response = await axios.get('http://jsonplaceholder.typicode.com/todos')

        commit ('setTodos', response.data)
        
    },
    async addTodo({commit}, title) {
        const response = await axios.post('http://jsonplaceholder.typicode.com/todos', {title, completed: false})

        commit('newTodo', response.data)
    }
};

//Mutations is for Setting data from the actions 
const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => (state.todos.unshift(todo))
};

export default {
    state,
    actions,
    getters,
    mutations
}