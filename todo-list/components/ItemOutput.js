import { StyleSheet, View, Text, Pressable } from "react-native";

export default function ItemOutput(props) {
  //output single item of to-do list
  return (
    //no longer needs key
    //FlatList will look for property named "key"

    //android_ripple for Android and style for iOS
    //function in style will be called when press state (here is named "pressed") changes
    <View style={styles.item}>
      <Pressable
        onPress={props.deleteItemFunc.bind(this, props.id)}
        android_ripple={{ color: "#000000" }}
        style={({ pressed }) => pressed && styles.pressedChange}
      >
        <Text style={styles.itemText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#7d6252",
  },
  pressedChange: {
    borderRadius: 6,
    backgroundColor: "#000000",
  },
  itemText: {
    color: "white", //text color
    fontSize: 15,
    padding: 8, //ripple effect can take the padding
  },
});
