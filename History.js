import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { DataTable } from "react-native-paper";
import ShowModal from "./ShowModal";

const History = ({ route, navigation }) => {
  const { history, deletePrice } = route.params;
  const [showModal, setShowModal] = React.useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => setShowModal(true)}>
          <Text>Clear History</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, setShowModal]);

  React.useEffect(() => deletePrice(history));
  const deleteItem = (id) => {
    // // setHistoryList(history.filter((value) => value.index !== id));
    navigation.setParams({
      history: history.filter((value) => value.index !== id),
    });
  };

  const hideModal = (msg) => {
    setShowModal(!showModal);
    if (msg === "ok") {
      navigation.setParams({
        history: [],
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>
              <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                Original Price
              </Text>
            </DataTable.Title>
            <DataTable.Title numeric>
              <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                Discount %
              </Text>
            </DataTable.Title>
            <DataTable.Title numeric>
              <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                Final Price
              </Text>
            </DataTable.Title>
            <DataTable.Title numeric></DataTable.Title>
          </DataTable.Header>
          <FlatList
            data={history}
            renderItem={({ item, index }) => (
              <DataTable.Row key={index}>
                <DataTable.Cell>
                  <DataTable.Cell numeric>
                    <Text style={{ fontSize: 15 }}>{item.originalPrice}</Text>
                  </DataTable.Cell>
                </DataTable.Cell>
                <DataTable.Cell numeric>
                  <Text style={{ fontSize: 15 }}>
                    {item.discountPercentage} %
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell numeric>
                  <Text style={{ fontSize: 15 }}>{item.finalPrice}</Text>
                </DataTable.Cell>
                <DataTable.Cell numeric>
                  <TouchableOpacity
                    onPress={() => {
                      deleteItem(item.index);
                    }}
                  >
                    <Text>❌</Text>
                  </TouchableOpacity>
                </DataTable.Cell>
              </DataTable.Row>
            )}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text>No History Available</Text>
              </View>
            }
          />
        </DataTable>
      </View>

      {showModal ? <ShowModal show={true} hideModal={hideModal} /> : null}
      {/* <View style={{ height: "10%", backgroundColor: "white" }}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() =>
            navigation.navigate({
              name: "MainScreen",
              params: { history: history },
            })
          }
        >
          <Text>BACK</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
  },
  list: {
    // height: "90%",
  },
  // backBtn: {
  //   padding: 20,
  //   backgroundColor: "grey",
  //   width: "20%",
  //   borderRadius: 50,
  //   margin: 5,
  //   backgroundColor: "#2196F3",
  // },
});
