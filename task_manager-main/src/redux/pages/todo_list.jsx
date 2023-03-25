import { Box, Button, Select ,Input, Heading} from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gettodoData, posttodosfun } from '../todos/todo.action'
import Navbar from './Navbar'
import Todo from './todo'

const Todo_list = () => {
    const [val,setval] = useState([])
    const dispatch = useDispatch()
    const todos = useSelector((store)=>store.todoManager)
    console.log(todos.todos)

    useEffect(()=>{
    dispatch(gettodoData())
    },[])

    let handleChange=(e)=>{
       const {name,value} = e.target
       setval({...val,[name]:value})
    }

    const handleSubmit =()=>{
    
        document.getElementById("title").value = ""
        alert("Todo is added")
    
          
         dispatch(posttodosfun(val))
         console.log(val,"todos")
        
    
      }

  return (
    <div>
        <Navbar/>
        <Box backgroundColor={"teal"} width={"50%"} margin={"auto"} paddingBottom={"30px"} borderRadius="5%" paddingTop={"20px"} marginTop="30px"   >
        <Box width={"80%"} margin={"auto"} backgroundColor={"white"} padding={"10px"} borderRadius="5%" marginTop={"30px"}>
        <Input type="text"  onChange={(e)=>{handleChange(e)}} margin="7px" name="title" id="title" placeholder="Enter Title" required /> <br />
        
        
        <Button  backgroundColor={"skyblue"}  width={"100%"} onClick={handleSubmit}>ADD</Button>

        </Box>
      </Box>
      <Heading>Todos List</Heading>
      <div style={{marginLeft:"500px",marginTop:"20px"}}>
        
      {
        todos.todos && 
         todos.todos.map((el)=>{
            return <Todo key={el.id} el={el}/>
         })
      }
      </div>
    </div>
  )
}

export default Todo_list