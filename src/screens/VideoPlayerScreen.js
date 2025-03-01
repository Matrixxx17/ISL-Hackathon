import React from "react";
import { View, StyleSheet } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function VideoPlayerScreen() {
  return (
    <View style={styles.container}>
      <YoutubePlayer height={300} play={true} videoId={"dQw4w9WgXcQ"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
});