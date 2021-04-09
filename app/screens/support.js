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
import firebaseDB from "../firebase";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    message: "Hello... how may we assist you today?...",
    sender: "support",
  },
  {
    id:
      "3ac68afc-c605-48d3-a4f8-fb3ac68afc-c605-48d3-a4f8-fbd91aa97f633ac68afc-c605-48d3-a4f8-fbd91aa97f633ac68afc-c605-48d3-a4f8-fbd91aa97f633ac68afc-c605-48d3-a4f8-fbd91aa97f633ac68afc-c605-48d3-a4f8-fbd91aa97f63d91aa97f63",
    message: "Hello.. Id like to know if it is free using your app",
    sender: "me",
  },
  {
    id: "571e29d72",
    message:
      "Yes.. it is absolutely free... you only pay for the car you want to buy, of which there are lots of them listed here in",
    sender: "support",
  },
  {
    id: "bd7acbea-c51b1-46c2-aed5-3ad53abb28ba",
    message: "Okay, let me check through",
    sender: "me",
  },
  {
    id: "3ac68a4fc-c605-48d3-a4f8-fbd91aa97f63",
    message: "Feel free",
    sender: "support",
  },
  {
    id: "58694a30f-3da1-471f-bd96-145571e29d72",
    message: "i need a Toyota premio",
    sender: "me",
  },
];

export default function suppurt() {
  firebaseDB
    .database()
    .ref("collection")
    .on("value", (data) => {
      console.log(data.toJSON());
    });

  const [messages, setmessages] = useState(DATA);

  var date = new Date().getDay();
  //console.log(date);
  const sms = () => {
    //console.log(mes);
    // setmessages({ ...messages });
    // DATA.push(mes);
    console.log(DATA);
  };

  var mes = { sender: "me", date: "today", message: "", id: "47858" };
  const onChange = (val) => {
    mes.message = val;
  };

  return (
    <View style={{ flex: 1, height: "100%" }}>
      <ScrollView>
        <StatusBar />
        {messages.map((da) => (
          <View
            key={da.id}
            style={da.sender === "support" ? styles.message : styles.received}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              {da.sender}
            </Text>

            <Text>{da.message}</Text>
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
          position: "absolute",
          bottom: 0,
          flex: 8,
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 6, height: 70, height: 50, marginBottom: 10 }}>
          <TextInput
            style={{
              backgroundColor: "#fff",
              color: "black",
              // minWidth: "100%",
              // maxWidth: "100%",
            }}
            placeholder="Type your Text here.."
            multiline={true}
            placeholderTextColor={"grey"}
            numberOfLines={4}
            onChangeText={(val) => onChange(val)}
          />
        </View>
        <TouchableOpacity
          onPress={() => sms()}
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "green",
            flex: 2,
            borderRadius: 20,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
            Send
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  received: {
    marginVertical: 10,
    borderWidth: 1,
    backgroundColor: "beige",
    padding: 5,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: -60,
    borderTopLeftRadius: 20,
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
