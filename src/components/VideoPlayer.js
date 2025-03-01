import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";

const VideoPlayer = ({ videoId, title }) => {
  return (
    <TouchableOpacity style={{ marginBottom: 15 }}>
      <YoutubeIframe height={200} videoId={videoId} />
      <Text style={{ marginTop: 5, fontSize: 16, fontWeight: "bold" }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default VideoPlayer;