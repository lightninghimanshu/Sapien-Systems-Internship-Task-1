import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";

const window = Dimensions.get("screen");

export const styles = StyleSheet.create({
  popularWrapper: {
    paddingHorizontal: 20,
  },
  button: {
    // alignItems: "center",
    // justifyContent: "center",
    // paddingVertical: 10,
    // paddingHorizontal: 32,
    borderRadius: 100,
    backgroundColor: "white",
    // borderColor: "grey",
    borderWidth: 1,
    borderColor:"#ecf0f1",
    width: 50,
    height: 50,
  },
  text: {
    // fontSize: 12,
    // lineHeight: 21,
    fontWeight: "bold",
    // letterSpacing: 0.25,
    color: "black",
  },
  container: {
    flex: 1,
    // paddingTop: Constants.statusBarHeight,
    marginLeft: 3,
  },
  listWrapper: {
    backgroundColor: "white",
    marginTop: 10,
    borderRadius: 30,
    paddingBottom: 10,
  },
  listWrapperTopLvl: {
    alignSelf: "flex-end",
    // marginEnd: 20,
    paddingVertical: 2,
    // paddingHorizontal: 20,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    width: 100,
  },
  TopLvlText: {
    textAlign: "center",
    color: "white",
  },
  ListImage: {
    height: 100,
    width: 100,
    marginLeft: 10,
    borderRadius: 30,
    marginTop: -5,
  },
  listDetails: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
  },
  listDesciption: {
    paddingRight: 10,
    fontSize: 12,
  },
  listTagDetails: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listTagText: {
    backgroundColor: "yellow",
    alignSelf: "flex-start",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  listCreatedByText: {
    marginRight: 5,
    fontSize: 10,
    fontStyle: "italic",
  },
  listUserImage: { width: 25, height: 25 },
  listBottomWrapper: {
    borderWidth: 0.5,
    borderStyle: "dashed",
    borderRadius: 1,
    borderColor: "lightgrey",
    margin: 10,
  },
  listPriceText: {
    textAlign: "right",
    marginRight: 10,
    color: "green",
  },
  listSubTypeText: {
    textAlign: "right",
    marginRight: 10,
    color: "lightgrey",
  },
});
