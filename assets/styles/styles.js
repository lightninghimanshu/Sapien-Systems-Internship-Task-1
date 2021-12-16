import { StyleSheet, Dimensions } from "react-native";

import colors from "../colors/colors";


export const styles = StyleSheet.create({
  popularWrapper: {
    paddingHorizontal: 20,
  },
  button: {
    borderRadius: 100,
    width: 50,
    height: 50,
  },
  text: {

    fontWeight: "bold",
   
    color: colors.textColor,
  },
  container: {
    flex: 1,
   
    marginLeft: 3,
  },
  listWrapper: {
    backgroundColor: colors.listBackground,
    marginTop: 10,
    borderRadius: 30,
    paddingBottom: 10,
  },
  listWrapperTopLvl: {
    alignSelf: "flex-end",
    
    paddingVertical: 2,
    
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    width: 100,
  },
  TopLvlText: {
    textAlign: "center",
    color: colors.listLvlText,
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
    backgroundColor: colors.listTag,
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
  listBottomBorder: {
    borderWidth: 0.5,
    borderStyle: "dashed",
    borderRadius: 1,
    borderColor: "lightgrey",
    margin: 10,
  },
  listPriceText: {
    textAlign: "right",
    marginRight: 10,
    color: colors.price,
  },
  listSubTypeText: {
    textAlign: "right",
    marginRight: 10,
    color: colors.subType,
  },
});
