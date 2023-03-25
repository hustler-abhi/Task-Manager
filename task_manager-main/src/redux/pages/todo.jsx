import { EditIcon,DeleteIcon } from "@chakra-ui/icons";
import { Button, Card, CardBody,CardFooter,Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodoData } from "../todos/todo.action";
import UpdateTodo from "./updatetodo";

const Todo = ({ el }) => {
    const dispatch = useDispatch()

  return (
    <div key={el.id}>
      <Card maxW="md" >
        <CardBody>
          <Text>
            {el.title}
          </Text>
        </CardBody>

        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}>
          <Button flex="1" variant="ghost" leftIcon={<EditIcon />}>
           <UpdateTodo el={el}/>
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<DeleteIcon />}
          onClick={() => {
            dispatch(deleteTodoData(el.id));
          }}
          >
            Remove
          </Button>
          
        </CardFooter>
      </Card>
    </div>
  );
};

export default Todo;
