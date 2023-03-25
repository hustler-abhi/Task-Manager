import axios from "axios"
import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, REMOVE_TODO_ERROR, REMOVE_TODO_LOADING, REMOVE_TODO_SUCCESS, UPDATE_TODO_ERROR, UPDATE_TODO_LOADING, UPDATE_TODO_SUCCESS } from "./todo.types"

export const posttodosfun = (todo)=> async(dispatch)=>{
   dispatch({type:ADD_TODO_LOADING})
   try{
    let res = await axios.post('http://localhost:8080/todos',todo)
    console.log(res.todos)
    dispatch({type:ADD_TODO_SUCCESS})

   }catch(error){
     dispatch({type:ADD_TODO_ERROR})
   }
}


export const gettodoData = () => async (dispatch) => {
    dispatch({ type: GET_TODO_LOADING });
    try {
    let response=await axios.get(`http://localhost:8080/todos`)
   // console.log(response.data)
      dispatch({ type: GET_TODO_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_TODO_ERROR });
    }
  };


export const deleteTodoData = (id)=> async(dispatch)=>{
   dispatch({type:REMOVE_TODO_LOADING})
   try{
    let res = await axios.delete(`http://localhost:8080/todos/${id}`)
    dispatch({ type: REMOVE_TODO_SUCCESS , payload : id });
   }catch(error){
     dispatch({type:REMOVE_TODO_ERROR})
   }
}


export const updateTodoData = (id, change) => async (dispatch) => {
  console.log(id)
    dispatch({ type: UPDATE_TODO_LOADING });
    try {
      let res=await axios.patch(`http://localhost:8080/todos/${id}`,change)
       console.log(res.data)
      dispatch({ type: UPDATE_TODO_SUCCESS , payload : res.data});
    } catch (error) {
      dispatch({ type: UPDATE_TODO_ERROR });
    }
  };