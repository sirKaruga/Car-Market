import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  Platform,
  TextInput,
} from "react-native";
import { Card, Input } from "react-native-elements";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ShoppingBag, MapPin } from "react-native-feather";
import * as ImagePicker from "expo-image-picker";
import { State } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import * as Animatable from "react-native-animatable";

export default function sell() {
  const [image, setImage] = useState({
    image1: null,
    image2: null,
    image3: null,
  });

  const [product, setProduct] = useState({
    name: "",
    cartegory: "",
    brand: "",
    condition: "",
    price: "",
    location: "",
  });

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  // handle the image picker buttons
  const pickImage = async (id) => {
    console.log(id);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      if (id === "image1") {
        setImage({ ...image, image1: result.uri });
      }
      if (id === "image2") {
        setImage({ ...image, image2: result.uri });
      }
      if (id === "image3") {
        setImage({ ...image, image3: result.uri });
      }
    }
  };

  // handle other input change values
  const handleChange = (val, field) => {
    if (field === "location") {
      setProduct({ ...product, location: val });
    }
    if (field === "name") {
      setProduct({ ...product, name: val });
    }
    if (field === "brand") {
      setProduct({ ...product, brand: val });
    }
    if (field === "price") {
      setProduct({ ...product, price: val });
    }
  };

  // handle product submit
  const submit = () => {
    console.log(product);
  };

  return (
    <ScrollView>
      <Animatable.View animation="bounce">
        <Card marginHorizontal={1} marginVertical={5}>
          <StatusBar />
          <Text style={styles.screenHead}>Post Your Sale add here</Text>
        </Card>
      </Animatable.View>
      <Animatable.View animation="pulse">
        <Card marginHorizontal={1} marginVertical={5}>
          <Text style={styles.subHead}>Product details</Text>

          <View>
            <Text style={{ fontSize: 18, fontStyle: "italic" }}>
              Vehicle Name and model
            </Text>
            <Input
              placeholder="e.g Toyota Fielder"
              onChangeText={(val) => handleChange(val, "name")}
              errorStyle={{ color: "red" }}
              errorMessage="Product name is required"
              leftIcon={<ShoppingBag name="user" size={24} color="black" />}
            />
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "grey",
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 18, fontStyle: "italic" }}>
              Vehicle cartegory
            </Text>
            <Picker
              selectedValue={product.cartegory}
              onValueChange={(itemValue, itemIndex) =>
                setProduct({ ...product, cartegory: itemValue })
              }
              style={{ color: "grey" }}
            >
              <Picker.Item label="Small car" value="electronics" />
              <Picker.Item label="pick-up" value="electronics" />
              <Picker.Item label="van" value="fashion" />
              <Picker.Item label="SUV" value="smartphones" />
              <Picker.Item label="Small truck" value="computers" />
              <Picker.Item label="Heavy Truck" value="cars" />
              <Picker.Item label="Carbrolet" value="services" />
              <Picker.Item label="luxury" value="jobs" />
              <Picker.Item label="electric car" value="property" />
            </Picker>
          </View>

          <View>
            <Text style={{ fontSize: 18, fontStyle: "italic" }}>Brand</Text>
            <Input
              placeholder="e.g Toyota"
              onChangeText={(val) => handleChange(val, "brand")}
              errorStyle={{ color: "red" }}
              leftIcon={<Ionicons name="logo-buffer" size={24} color="black" />}
            />
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "grey",
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 18, fontStyle: "italic" }}>
              Vehicle condition
            </Text>
            <Picker
              selectedValue={product.condition}
              onValueChange={(itemValue, itemIndex) =>
                setProduct({ ...product, condition: itemValue })
              }
              style={{ color: "grey" }}
            >
              <Picker.Item label="used" value="used" />
              <Picker.Item label="new" value="new" />
            </Picker>
          </View>

          <View>
            <Text style={{ fontSize: 18, fontStyle: "italic" }}>Price</Text>
            <Input
              placeholder="Price in ksh."
              onChangeText={(val) => handleChange(val, "price")}
              errorStyle={{ color: "red" }}
              errorMessage="Product price is required"
              leftIcon={
                <Ionicons name="ios-cash-outline" size={24} color="black" />
              }
            />
          </View>

          <View>
            <Text style={{ fontSize: 18, fontStyle: "italic" }}>Location</Text>
            <Input
              placeholder="Your location"
              errorStyle={{ color: "red" }}
              onChangeText={(val) => handleChange(val, "location")}
              errorMessage="Location is required"
              leftIcon={<MapPin size={24} color="black" />}
            />
          </View>

          <View>
            <Text style={{ fontSize: 18, fontStyle: "italic" }}>
              Vehicle Deascription
            </Text>
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
        </Card>
      </Animatable.View>

      <Card marginHorizontal={1} marginVertical={5}>
        <Text style={styles.subHead}>Product images</Text>
        <Text style={{ fontSize: 18 }}>Touch image field to upload</Text>
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            alignContent: "stretch",
            width: "100%",
          }}
        >
          <TouchableOpacity onPress={() => pickImage("image1")}>
            <Card marginHorizontal={5} marginVertical={0} style={{ flex: 1 }}>
              <Text>Image 1</Text>
              {image && (
                <Image
                  source={{ uri: image.image1 }}
                  style={{ width: 50, height: 50 }}
                />
              )}
            </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => pickImage("image2")}>
            <Card marginHorizontal={5} marginVertical={0} style={{ flex: 1 }}>
              <Text>Image 2</Text>
              {image && (
                <Image
                  source={{ uri: image.image2 }}
                  style={{ width: 50, height: 50 }}
                />
              )}
            </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => pickImage("image3")}>
            <Card marginHorizontal={5} marginVertical={0} style={{ flex: 1 }}>
              <Text>Image 3</Text>
              {image && (
                <Image
                  source={{ uri: image.image3 }}
                  style={{ width: 50, height: 50 }}
                />
              )}
            </Card>
          </TouchableOpacity>
        </View>
      </Card>
      <TouchableOpacity
        onPress={() => submit()}
        style={{
          width: "90%",
          backgroundColor: "green",
          marginTop: 30,
          alignSelf: "center",
          borderRadius: 30,
          marginBottom: 30,
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            fontSize: 20,
            color: "white",
            padding: 10,
          }}
        >
          Upload
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenHead: {
    alignSelf: "center",
    fontSize: 20,
  },
  subHead: {
    fontSize: 17,
    marginBottom: 10,
    fontStyle: "italic",
    color: "grey",
    fontWeight: "bold",
  },
});
