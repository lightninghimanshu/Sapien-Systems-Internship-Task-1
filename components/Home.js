import * as React from "react";
import { View, FlatList, ScrollView , SafeAreaView} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { categoryTopData, listData } from "../assets/data/categoriesData";
import { styles } from "../assets/styles/styles";
// import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";
import { categoryTopRow, listDataRow } from "./Row";

Feather.loadFont();

export const Home_m = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
      >
        {/*BUTTON TABS */}

        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            paddingHorizontal: 20,
          }}
        >
          <FlatList
            data={categoryTopData}
            renderItem={categoryTopRow}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
        </View>
        <View style={styles.popularWrapper}>
        
          <FlatList
            data={listData}
            renderItem={listDataRow}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
};
