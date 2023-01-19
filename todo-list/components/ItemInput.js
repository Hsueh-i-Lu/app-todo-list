import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

export default function ItemInput(props) {
  //use props to talk with parent (App.js) -> use at event handler
  const [item, text2item] = useState(""); //pass the parameter of text2item to item //init with empty string

  function getInputItem(text) {
    text2item(text); //assign text to item
  }
  function addItem() {
    //called by addItem in button
    props.addItemFunc(item); //pass item to addItem() in App.js
    text2item(""); //clear text input box
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/todo-list.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="your to-do item"
          onChangeText={getInputItem} //do not add "()" or it will execute once the codes are compiled
          value={item} //bind variable "item" to the value of TextInput box so that cleared text can be seen/updated
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.closeModalFunc}
              color="#ff2d2d"
            />
          </View>
          <View style={styles.button}>
            <Button title="Add Item" onPress={addItem} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    //parent is container
    flex: 1, //child container takes 1/8
    flexDirection: "column", //same as default
    justifyContent: "center",
    alignItems: "center", //default is stretch
    backgroundColor: "#e0e0e0",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#d0d0d0",
    borderRadius: 6,
    backgroundColor: "#d0d0d0",
    width: "90%",
    marginRight: 8,
    padding: 8,
    height: 50,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 25,
  },
  button: {
    //width: "25%",
    marginHorizontal: 20,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 50,
  },
});
