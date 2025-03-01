import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Mudra AI</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: "#6b46c1",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});