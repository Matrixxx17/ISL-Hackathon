import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ModuleCard = ({ id, title, lessons, image, navigation }) => {
  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => navigation.navigate("ModuleVideosScreen", { moduleId: id })} // Navigate with moduleId
    >
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.lessons}>{lessons} lessons</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "white",
    margin: 8,
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  info: {
    marginTop: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  lessons: {
    fontSize: 14,
    color: "gray",
  },
});

export default ModuleCard;
