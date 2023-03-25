import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { gettodoData, updateTodoData } from "../todos/todo.action";

const UpdateTodo = () => {
  const toast = useToast();
  const [val, setVal] = useState({});
  const [prod, setProd] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setVal({ ...val, [name]: value });
  };

  const handleUpdate = async (e) => {
    
    dispatch(updateTodoData(e.id, val));
    dispatch(gettodoData());
    console.log(val);
    e.preventDefault();
    toast({
      title: "Congratulations",
      description: "Todo Updated sucessfully",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <>
      <Text
        variantcolor="teal"
        backgroundColor={"tomato"}
        color={"white"}
        textAlign={"center"}
        borderRadius={"8%"}
        fontWeight={"medium"}
        padding={"4px"}
        fontSize={["sm", "18px"]}
        onClick={onOpen}>
        Update
      </Text>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader backgroundColor={"skyblue"}>Update</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleUpdate}>
              <FormControl mt={4}>
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  name="title"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  id="title"
                  placeholder="Enter new Todo"
                />
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              variantcolor="teal"
              backgroundColor={"Black"}
              color={"white"}
              mr={3}
              onClick={handleUpdate}>
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
        :
      </Modal>
    </>
  );
};

export default UpdateTodo;
