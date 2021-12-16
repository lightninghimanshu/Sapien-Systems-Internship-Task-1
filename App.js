import "react-native-gesture-handler";
import * as React from "react";
import { Text, View , SafeAreaView} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Movement } from "./components/Movement";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from "react-native-vector-icons/Feather";
import Foundation from "react-native-vector-icons/Foundation";


const Tab = createBottomTabNavigator();

function Journey() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Journey!</Text>
    </View>
  );
}
function Favourites() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Favourites!</Text>
    </View>
  );
}
function Chat() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Chat!</Text>
    </View>
  );
}
function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Movement}
            options={{
              headerShown: false,
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <Feather name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Journey"
            component={Journey}
            options={{
              headerShown: false,
              tabBarLabel: "Journey",
              tabBarIcon: ({ color, size }) => (
                <Foundation name="mountains" color={color} size={size} />
              ),
              tabBarItemStyle: {},
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              headerShown: false,
              tabBarLabel: "Profile",
              tabBarIcon: ({ color, size }) => (
                <Feather name="user" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Favourites"
            component={Favourites}
            options={{
              headerShown: false,
              tabBarLabel: "Favourites",
              tabBarIcon: ({ color, size }) => (
                <Feather name="star" color={color} size={size} />
              ),
            }}
          />

          <Tab.Screen
            name="Chat"
            component={Chat}
            options={{
              headerShown: false,
              tabBarLabel: "Chat",
              tabBarIcon: ({ color, size }) => (
                <Feather name="message-square" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
