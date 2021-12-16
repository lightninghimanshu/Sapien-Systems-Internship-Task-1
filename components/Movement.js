import * as React from "react";
import { View, Text, SafeAreaView, SegmentedControlIOSComponent } from "react-native";
import { Home_m } from "./Home";
import Details from "./Details";
import Constants from "expo-constants";
import colors from "../assets/colors/colors";
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Home_m">
      <Stack.Screen
        name="Home_m"
        options={{ headerShown: false }}
        component={Home_m}
      />
      <Stack.Screen
        name="Details"
        options={{ headerShown: false }}
        component={Details}
      />
    </Stack.Navigator>
  );
}

function Tracker() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Tracker!</Text>
    </View>
  );
}

function Workouts() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Workouts!</Text>
    </View>
  );
}
function Teachers() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Teachers!</Text>
    </View>
  );
}
function Brands() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Brands!</Text>
    </View>
  );
}

export const Movement = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
      <NavigationContainer independent={true} ref={navigationRef}>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: { fontSize: 12, color: colors.tabBarLabel },
            tabBarStyle: { backgroundColor: colors.tabBar },
            tabBarIndicatorStyle: { backgroundColor: colors.tabBarLabel },
            tabBarScrollEnabled: true,
            tabBarBounces: true,
          }}
        >
          <Tab.Screen name="Tracker" component={Tracker} />
          <Tab.Screen name="Workouts" component={Workouts} />
          <Tab.Screen name="Programs" component={MainStack} />

          <Tab.Screen name="Teachers" component={Teachers} />
          <Tab.Screen name="Brands" component={Brands} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
