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
    location: "Nairobi",
    seller: "Dennis",
    contact: "0786545678",
    price: 230,
    condition: "used",
    images: [
      require("../assets/luxury.jpg"),
      require("../assets/carbrolet.jpg"),
      require("../assets/pickup.png"),
    ],

    productDetails:
      "Add the appropriate keys to your Info.plist, If you are allowing user to select image/video from photos, add NSPhotoLibraryUsageDescription. If you are allowing user to capture image add NSCameraUsageDescription key also. If you are allowing user to capture video add NSCameraUsageDescription add NSMicrophoneUsageDescription key also. Android No permissions required (saveToPhotos requires permission check). Note: This library does not require Manifest.permission.CAMERA, if your app declares as using this permission in manifest then you have to obtain the permission before using launchCamera.",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bajk",
    title:
      "Top-class toyota low cog type color red automatic from my garage to the",
    location: "Nairobi",
    seller: "Dennis",
    contact: "0786545678",
    price: 230,
    condition: "used",
    images: [
      require("../assets/car.png"),
      require("../assets/carbrolet.jpg"),
      require("../assets/pickup.png"),
    ],

    productDetails:
      "Add the appropriate keys to your Info.plist, If you are allowing user to select image/video from photos, add NSPhotoLibraryUsageDescription. If you are allowing user to capture image add NSCameraUsageDescription key also. If you are allowing user to capture video add NSCameraUsageDescription add NSMicrophoneUsageDescription key also. Android No permissions required (saveToPhotos requires permission check). Note: This library does not require Manifest.permission.CAMERA, if your app declares as using this permission in manifest then you have to obtain the permission before using launchCamera.",
  },
];

const Item = ({ image, item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <View style={styles.listItem}>
      <View style={styles.itemCardTopSection}>
        <Image style={styles.itemImage} source={image} />
        <View style={{ alignSelf: "center", flex: 4 }}>
          <Text style={styles.item}>
            {item.title.length > 50
              ? item.title.slice(0, 50).concat("...")
              : item.title}
          </Text>
          <Text>
            <MapPin stroke="grey" fill="#fff" width={15} name="map-pin" />
            {"  "}
            {item.location}
          </Text>
          <Text style={{ backgroundColor: "beige", padding: 5 }}>
            {item.condition}
          </Text>
          <Text
            style={{ fontStyle: "italic", fontWeight: "bold", fontSize: 14 }}
          >
            Ksh. {item.price}/=
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
            <User stroke="grey" fill="#fff" /> {item.seller}
          </Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const Flatlist = (props) => {
  const [selectedId, setSelectedId] = useState(null);

  const page = props.route.params.source;
  const image = require("../assets/carbrolet.jpg");
  //

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    return (
      <Item
        image={item.images[0]}
        item={item}
        onPress={() => {
          props.navigation.navigate("ProductDetails", { productData: item });
        }}
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
