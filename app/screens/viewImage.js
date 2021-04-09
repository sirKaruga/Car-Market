import React from "react";
import { View, Text, Image } from "react-native";
import * as Animatable from "react-native-animatable";

export default function viewImage(props) {
  const image = props.route.params.image;
  console.log(image);
  return (
    <Animatable.View
      animation="bounceInDown"
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        height: 30,
      }}
    >
      <Image style={{ width: "100%" }} source={image} />
    </Animatable.View>
  );
}
