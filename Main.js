import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  Keyboard,
} from "react-native";

export default function Main({ navigation }) {
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("HistoryScreen", {
            history: history,
            deletePrice: deletePrice,
          })
        }
        style={styles.histryBtn}
      >
        <Text>Show History ⏭</Text>
      </TouchableOpacity>
    ),
  });
  const [price, setPrice] = React.useState(0);
  const [discount, setDiscount] = React.useState(0);
  const [save, setSave] = React.useState(0);
  const [fp, setFp] = React.useState(0);
  const [history, setHistory] = React.useState([]);

  React.useEffect(() => {
    let disc = discount / 100;
    let final_price = price - price * disc;
    setFp(final_price.toFixed());
    setSave(((price * discount) / 100).toFixed());
  });

  const checkprice = (num) => {
    if (num >= 0) {
      setPrice(num);
    } else {
      alert("enter positive values only");
    }
  };

  const checkDisc = (disc) => {
    if (disc <= 100) {
      setDiscount(disc);
    } else {
      alert("Discount can't be greater than 100");
    }
  };

  const saveHistory = () => {
    Keyboard.dismiss();
    if (price > 0 && discount > 0) {
      let obj = {
        originalPrice: price,
        discountPercentage: discount,
        finalPrice: fp,
        index: Math.random(),
      };
      setHistory([...history, obj]);
      console.log(history);
    }
    setPrice(0);
    setDiscount(0);
  };

  const deletePrice = (newArr) => {
    setHistory(newArr);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={{ fontSize: 30 }}>Discount Calculator</Text> */}
      <TextInput
        style={styles.input}
        placeholder="ENTER PRICE"
        keyboardType="numeric"
        value={price}
        onChangeText={(price) => checkprice(price)}
      />
      <TextInput
        style={styles.input}
        placeholder="ENTER DISCOUNT %"
        keyboardType="numeric"
        value={discount}
        onChangeText={(discount) => checkDisc(discount)}
      />
      <Text style={styles.txt}>You Saved: {save}</Text>
      <Text style={styles.txt}>Final Price: {fp}</Text>
      <View style={{ flexDirection: "row" }}>
        <Pressable onPress={() => saveHistory()} style={styles.btn}>
          <Text style={{ fontSize: 17 }}>SAVE</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    padding: 20,
    // backgroundColor: "#cfcfcf",
    marginVertical: 20,
    width: "100%",
    borderRadius: 50,
    borderWidth: 1,
    fontSize: 20,
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  btn: {
    marginTop: 20,
    backgroundColor: "#00a8ff",
    padding: 20,
    paddingHorizontal: 50,
    borderRadius: 50,
    marginHorizontal: 10,
  },
});
