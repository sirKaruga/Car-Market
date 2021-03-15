import "react-native-gesture-handler";
import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./app/screens/home";
import Sell from "./app/screens/sell";
import Support from "./app/screens/support";
import Profile from "./app/screens/profile";
import PreProfile from "./app/screens/preprofile";
import ProductDetails from "./app/screens/productDetails";
import NoInternet from "./app/components/noInternet";
import SqliteScreen from "./sqlite/sqtable";
import Flatlist from "./app/screens/flatlist";
import Login from "./app/screens/login";
import ViewImage from "./app/screens/viewImage";

// global.db = SQLite.openDatabase(
//   {
//     name: "silkyMarket",
//     location: "default",
//     createFromLocation: "~SQLite.db",
//   },
//   () => {},
//   (error) => {
//     console.log("ERROR: " + error);
//   }
// );
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "ios-home-outline";
          } else if (route.name === "Details") {
            iconName = "ios-list";
          } else if (route.name === "Sell") {
            iconName = "ios-add-circle-outline";
          } else if (route.name === "Profile") {
            iconName = "ios-person-outline";
          } else if (route.name === "Support") {
            iconName = "ios-pulse-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Details" component={SettingsScreen} />
      <Tab.Screen name="Sell" component={Sell} />
      <Tab.Screen name="Support" component={Support} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Tabs}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Products"
          component={Flatlist}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ProductDetails"
          component={ProductDetails}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="viewImage"
          component={ViewImage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// var firebaseConfig = {
//   apiKey: "AIzaSyCn1Sm8P-pgmsHe-n3iLD52LMk0ovTk2J0",
//   authDomain: "silkymarket-6036a.firebaseapp.com",
//   projectId: "silkymarket-6036a",
//   storageBucket: "silkymarket-6036a.appspot.com",
//   messagingSenderId: "463420618338",
//   appId: "1:463420618338:web:e817961bc3a14c4ca8c33b",
//   measurementId: "G-Q1K9YCB91M",
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
