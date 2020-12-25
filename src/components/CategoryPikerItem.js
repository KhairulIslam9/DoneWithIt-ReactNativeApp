import React from "react";
import { View, StyleSheet } from "react-native";

import AppIcon from "./AppIcon";
import AppText from "./AppText";

function CategoryPikerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <AppIcon
        backgroundColor={item.backgroundColor}
        name={item.icon}
        size={70}
      />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 15,
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 17,
  },
});

export default CategoryPikerItem;
