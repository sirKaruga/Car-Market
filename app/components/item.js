import React from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import { MapPin, User } from "react-native-feather";
import Ionicons from "react-native-vector-icons/Ionicons";

const Item = ({ item }) => {
  const onPress = () => {
    console.log("new item pressed");
  };
  return (
    <TouchableOpacity onPress={onPress} style={{ backgroundColor: "white" }}>
      <View style={styles.listItem}>
        <View style={styles.itemCardTopSection}>
          <Image
            style={styles.itemImage}
            source={require("../assets/luxury.jpg")}
          />
          <View style={{ alignSelf: "center", flex: 4 }}>
            <Text style={styles.item}>ermanian engine car</Text>
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
            style={{
              flex: 1,
              borderBottomWidth: 2,
              borderBottomColor: "green",
            }}
          >
            <Text style={[styles.item]}>
              <User stroke="grey" fill="#fff" /> Dennis
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(220,220,220)",
    flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
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

export default Item;
