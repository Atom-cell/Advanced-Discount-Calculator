import React from "react";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import { DataTable } from "react-native-paper";

const History = ({ route, navigation }) => {
  const { history } = route.params;

  return (
    <DataTable>
      <FlatList
        ListHeaderComponent={
          <DataTable.Header>
            <DataTable.Title>Original Price</DataTable.Title>
            <DataTable.Title numeric>Discount %</DataTable.Title>
            <DataTable.Title numeric>Final Price</DataTable.Title>
            <DataTable.Title numeric></DataTable.Title>
          </DataTable.Header>
        }
        data={history}
        renderItem={({ item, index }) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{item.originalPrice}</DataTable.Cell>
            <DataTable.Cell numeric>{item.discountPercentage}</DataTable.Cell>
            <DataTable.Cell numeric>{item.finalPrice}</DataTable.Cell>
            <DataTable.Cell numeric>❌</DataTable.Cell>
          </DataTable.Row>
        )}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={
          <View style={styles.container}>
            <Text>No History Available</Text>
          </View>
        }
      />
    </DataTable>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
