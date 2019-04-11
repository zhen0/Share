import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    marginHorizontal: 3,
    paddingHorizontal: 8
  },
  header: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
    justifyContent: "center",
    alignItems: "baseline"
  },
  paragraph: {
    fontSize: 18
  }
});

export default styles;
