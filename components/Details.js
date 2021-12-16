import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";
export default function Details({ route }) {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "white",
          marginTop: 10,
          borderRadius: 30,
          paddingBottom: 10,
        }}
      >
        <View
          style={[
            {
              alignSelf: "flex-end",
             
              paddingVertical: 2,
        
              borderTopRightRadius: 30,
              borderBottomLeftRadius: 30,
              width: 100,
            },
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
          <Text style={{ textAlign: "center", color: "white" }}>
            {item.lvl}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            source={item.image}
            style={{
              height: 100,
              width: 100,
              marginLeft: 10,
              borderRadius: 30,
              marginTop: -5,
            }}
          />
          <View
            style={{ flex: 1, marginLeft: 10, marginRight: 10, marginTop: 5 }}
          >
            <Text>{item.title}</Text>
            <Text style={{ paddingRight: 10, fontSize: 12 }}>
              {item.description}
            </Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  backgroundColor: "yellow",
                  alignSelf: "flex-start",
                  borderRadius: 10,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                }}
              >
                {item.tag}
              </Text>
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <View>
                  <Text
                    style={{
                      marginRight: 5,
                      fontSize: 10,
                      fontStyle: "italic",
                    }}
                  >
                    Created by
                  </Text>
                  <Text
                    style={{
                      marginRight: 5,
                      fontSize: 10,
                      fontStyle: "italic",
                    }}
                  >
                    {item.username}
                  </Text>
                </View>
                <Image
                  source={item.userpic}
                  style={{ width: 25, height: 25 }}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            borderWidth: 0.5,
            borderStyle: "dashed",
            borderRadius: 1,
            borderColor: "lightgrey",
            margin: 10,
          }}
        ></View>
        <Text style={{ textAlign: "right", marginRight: 10, color: "green" }}>
          ₹ {item.price}
        </Text>
        <Text
          style={{ textAlign: "right", marginRight: 10, color: "lightgrey" }}
        >
          per month
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
   
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
