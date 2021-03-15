import React, { useState } from "react";
import { Image, TextInput } from "react-native";
import { ScrollView } from "react-native";
import {
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
    id:
      "3ac68afc-c605-48d3-a4f8-fb3ac68afc-c605-48d3-a4f8-fbd91aa97f633ac68afc-c605-48d3-a4f8-fbd91aa97f633ac68afc-c605-48d3-a4f8-fbd91aa97f633ac68afc-c605-48d3-a4f8-fbd91aa97f633ac68afc-c605-48d3-a4f8-fbd91aa97f63d91aa97f63",
    title: "Second Item",
  },
  {
    id: "571e29d72",
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
    title: "no",
  },
];

export default function suppurt() {
  //console.log(DATA);
  var date = new Date().getHours();

  return (
    <View style={{ flex: 1, height: "100%" }}>
      <ScrollView>
        <StatusBar />
        {DATA.map((da) => (
          <View
            key={da.id}
            style={
              da.id === "3ac68a4fc-c605-48d3-a4f8-fbd91aa97f63"
                ? styles.received
                : styles.message
            }
          >
            <Text>{da.id}</Text>
            <Text
              style={{ paddingLeft: 70, color: "grey", alignSelf: "flex-end" }}
            >
              date
            </Text>
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          flex: 1,
          flexShrink: 1,
          position: "absolute",
          bottom: 0,
          flex: 1,
          flexShrink: 1,
        }}
      >
        <TextInput
          style={{
            flex: 6,
            height: "auto",
            marginBottom: 10,
            backgroundColor: "#fff",
            color: "black",
            minWidth: "100%",
            maxWidth: "100%",
            width: 0,
            flexGrow: 1,
            flex: 1,
          }}
          placeholder="Type your Text here.."
          multiline={true}
          placeholderTextColor={"grey"}
          numberOfLines={4}
          onChangeText={(data) => console.log(data)}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  received: {
    marginVertical: 10,
    borderWidth: 1,
    backgroundColor: "green",
    padding: 5,
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    borderTopRightRadius: -60,
    borderTopLeftRadius: 60,
    maxWidth: "80%",
    alignSelf: "flex-end",
    marginRight: 10,
    //alignItems: "flex-end",
  },
  message: {
    backgroundColor: "white",
    marginLeft: 10,
    marginVertical: 10,
    borderWidth: 1,
    padding: 5,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    maxWidth: "80%",
    alignSelf: "flex-start",
    //alignItems: "flex-end",
  },
});
