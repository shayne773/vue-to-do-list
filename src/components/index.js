import {createStore} from 'vuex';

export default createStore({
    state: {
        
        id : 0,
        
        newTodo : "",
        newMember: "",
        newPriority: "",
        hideCompleted : false,

        to_do_list : [
            {id: 0, text: "Get groceries", done: false, member: "Shayne", priority: "low"},
            {id: 1, text: "Do the laundry", done: false, member: "Kelly", priority: "high"},
            {id: 2, text: "complete physics homework", done: false, member: "Mark", priority: "medium"},
            
        ],
    },

    mutations: {
        addTodo: (state)=>{
            state.to_do_list.push({id: state.id++, text: state.newTodo, done: false, member: state.newMember, priority: state.newPriority});
            state.newTodo = ""
            state.newMember = ""
            state.newPriority = ""
        },

        removeTodo(state, todo) {
            state.to_do_list = state.to_do_list.filter((t) => t !== todo);
        }

    },

    getters: {
        filtered_list : (state)=>{
            return state.hideCompleted?state.to_do_list.filter((t)=>!t.done):state.to_do_list
        }
    }
})