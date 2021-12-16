import * as React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
} from "react-native";
import { styles } from "../assets/styles/styles";
import { navigate } from "./Movement";
import Feather from "react-native-vector-icons/Feather";
Feather.loadFont();

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
MaterialCommunityIcons.loadFont();

export const categoryTopRow = ({ item }) => {
  return (
    <View
      style={{
        flex: 1,
        paddingRight: 10,
        alignItems: "center",
      }}
    >
      <Pressable
        style={({ pressed }) => [
          { opacity: pressed ? 0.5 : 1.0 },
          styles.button,
          {
            marginBottom: 10,
            backgroundColor: item.selected ? "#212b46" : "#c4c4c4",
          },
        ]}
      ></Pressable>
      <Text
        style={[
          styles.text,
          {
            width: 56,
            color: item.selected ? "#212b46" : "#c4c4c4",
            textAlign: "center",
          },
        ]}
      >
        {item.text}
      </Text>
    </View>
  );
};

export const listDataRow = ({ item }) => {
  return (
    <View>
      <Pressable
        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
        onPress={() => navigate("Details", { item })}
      >
        <View style={styles.listWrapper}>
          <View
            style={[
              styles.listWrapperTopLvl,
              {
                backgroundColor:
                  item.lvl == "Beginner"
                    ? "#04bebe"
                    : item.lvl == "Intermediate"
                    ? "#d7a72e"
                    : "#db5461",
              },
            ]}
          >
            <Text style={styles.TopLvlText}>{item.lvl}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Image source={item.image} style={styles.ListImage} />
            <View style={styles.listDetails}>
              <Text>{item.title}</Text>
              <Text style={styles.listDesciption}>{item.description}</Text>
              <View style={styles.listTagDetails}>
                <Text style={styles.listTagText}>{item.tag}</Text>
                <View
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <View>
                    <Text style={styles.listCreatedByText}>Created by</Text>
                    <Text style={styles.listCreatedByText}>
                      {item.username}
                    </Text>
                  </View>
                  <Image
                    source={item.userpic}
                    style={styles.listUserImage}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.listBottomWrapper}></View>
          <Text style={styles.listPriceText}>₹ {item.price}</Text>
          <Text style={styles.listSubTypeText}>per month</Text>
        </View>
      </Pressable>
    </View>
  );
};


