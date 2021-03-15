import React, { useState } from "react";
import { Image } from "react-native";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { MapPin, User } from "react-native-feather";
import Ionicons from "react-native-vector-icons/Ionicons";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "bd7acbea-c51b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68a4fc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a30f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <View style={styles.listItem}>
      <View style={styles.itemCardTopSection}>
        <Image
          style={styles.itemImage}
          source={require("../assets/luxury.jpg")}
        />
        <View style={{ alignSelf: "center", flex: 4 }}>
          <Text style={styles.item}>{item.title}</Text>
          <Text>
            <MapPin stroke="grey" fill="#fff" width={15} name="map-pin" />
            {"  "}
            Nairobi
          </Text>
          <Text style={{ backgroundColor: "beige", padding: 5 }}>Used</Text>
          <Text
            style={{ fontStyle: "italic", fontWeight: "bold", fontSize: 14 }}
          >
            Ksh. 230/=
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
            borderRightWidth: 1,
            borderRightColor: "rgb(220,220,220)",
            borderBottomWidth: 2,
            borderBottomColor: "blue",
          }}
        >
          <Text style={[styles.item]}>
            <Ionicons name="ios-call-outline" size={20} /> Contact
          </Text>
        </View>
        <View
          style={{ flex: 1, borderBottomWidth: 2, borderBottomColor: "green" }}
        >
          <Text style={[styles.item]}>
            <User stroke="grey" fill="#fff" /> Dennis
          </Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const Flatlist = (props) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(220,220,220)",
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    fontSize: 15,
    marginVertical: 3,
    marginHorizontal: 5,
  },
  itemCardTopSection: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "rgb(220,220,220)",
  },
  itemImage: {
    flex: 3,
    height: 100,
    alignSelf: "center",
    marginTop: 5,
    resizeMode: "contain",
  },
  listItem: {
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
  },
});

export default Flatlist;
