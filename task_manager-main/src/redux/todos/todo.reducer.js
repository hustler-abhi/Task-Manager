import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, REMOVE_TODO_ERROR, REMOVE_TODO_LOADING, REMOVE_TODO_SUCCESS, UPDATE_TODO_ERROR, UPDATE_TODO_LOADING, UPDATE_TODO_SUCCESS } from "./todo.types"

const initialState = {
    loading : false,
    error : false,
    todos : []
}

export const TodoReducer = (state=initialState , {type,payload})=>{
    switch (type) {
        case GET_TODO_LOADING : return {
            ...state,
            loading : true,
            error : false
        }

        case GET_TODO_ERROR : return {
            ...state,
            loading : false,
            error : true
        }

        case GET_TODO_SUCCESS : return {
            ...state,
            loading : false,
            error : false,
            todos : payload
        }

        case ADD_TODO_LOADING : return {
            ...state,
            loading : true,
            error : false
        }

        case ADD_TODO_ERROR : return {
            ...state,
            loading : false,
            error : true
        }

        case ADD_TODO_SUCCESS : return {
            ...state,
            loading : false,
            error : false,
            todos : [...state.todos,payload]
        }

        case REMOVE_TODO_LOADING : return {
            ...state,
            loading : true
        }

        case REMOVE_TODO_ERROR : return {
            ...state,
            loading : false,
            error : true
        }

        case REMOVE_TODO_SUCCESS :{
            let removed = state.todos.filter((todo)=>todo.id != payload)
        
             return {
              ...state,
              todos : removed
           }
        }

        case UPDATE_TODO_LOADING : return{
            ...state,
            loading : true
        }

        case UPDATE_TODO_ERROR : return {
            ...state,
            loading : false,
            error : true
        }

        case UPDATE_TODO_SUCCESS : 
            let Updated=state.todos.map((todos)=>{
            if(todos.id==payload.id){
             return {...todos,payload}
            }
            return todos
        })
        return {
          ...state,
          todos:Updated
  
  
        }

        default : return state
    }
}