import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  StyleSheet,
} from "react-native";
import axios from "axios";
import { useNavigation, useRoute } from "@react-navigation/native";

const YOUTUBE_API_KEY = "AIzaSyDkxHV8G13kPB8CF23WtC_RUsSz1h-bhT4"; 
const PRIMARY_PLAYLIST_ID = "PLxYMaKXKMMcMgg4f47WkG7AM0bb3AyjTi";
const SECONDARY_PLAYLIST_ID = "PLFjydPMg4DapfRTBMokl09Ht-fhMOAYf6";

const moduleVideoMappings = {
  1: [],
  2: [{ playlist: PRIMARY_PLAYLIST_ID, indices: [1, 2] }, { playlist: SECONDARY_PLAYLIST_ID, indices: [6] }],
  3: [{ playlist: PRIMARY_PLAYLIST_ID, indices: [6] }, { playlist: SECONDARY_PLAYLIST_ID, indices: [36] }],
  4: [{ playlist: SECONDARY_PLAYLIST_ID, indices: [3, 4, 2, 8] }],
  5: [{ playlist: PRIMARY_PLAYLIST_ID, indices: [9, 10] }, { playlist: SECONDARY_PLAYLIST_ID, indices: [16] }],
  6: [{ playlist: SECONDARY_PLAYLIST_ID, indices: [10, 12] }],
  7: [{ playlist: SECONDARY_PLAYLIST_ID, indices: [23, 24, 26, 27, 28, 32, 35] }],
  8: [{ playlist: SECONDARY_PLAYLIST_ID, indices: [14, 22, 11] }],
  9: [{ playlist: SECONDARY_PLAYLIST_ID, indices: [30, 31, 34] }],
  10: [{ playlist: SECONDARY_PLAYLIST_ID, indices: [19, 18, 20, 38, 39, 40] }]
};

const ModuleVideosScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { moduleId } = route.params || {};

  const [videos, setVideos] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Route params:", route.params);  // Debugging
    if (moduleId !== undefined) {
      console.log("Fetching videos for module:", moduleId);
      fetchVideosForModule(moduleId);
    } else {
      console.log("Module ID is undefined");
      setError("Module ID is undefined. Please select a valid module.");
      setLoading(false);
    }
  }, [moduleId]);

  const fetchVideosForModule = async (moduleId) => {
    setLoading(true);
    setError(null);
    try {
      console.log("Starting to fetch videos for module:", moduleId);
      const videoRequests = moduleVideoMappings[moduleId]?.map(({ playlist, indices }) =>
        fetchVideosFromPlaylist(playlist, Math.max(...indices))
      ) || [];

      const results = await Promise.all(videoRequests);
      const combinedVideos = results.flat();

      const filteredVideos = combinedVideos.filter(video => 
        moduleVideoMappings[moduleId].some(({ indices }) => indices.includes(video.index))
      );

      setVideos(filteredVideos);
      if (filteredVideos.length === 0) {
        setError("No videos found for this module.");
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
      setError("An error occurred while fetching videos. Please try again.");
    } finally {
      console.log("Finished fetching videos. Setting loading to false.");
      setLoading(false);
    }
  };

  const fetchVideosFromPlaylist = async (playlistId, maxIndex) => {
    try {
      const response = await axios.get("https://www.googleapis.com/youtube/v3/playlistItems", {
        params: {
          part: "snippet",
          playlistId,
          maxResults: maxIndex + 1,
          key: YOUTUBE_API_KEY,
        },
      });

      return response.data.items.map((item, index) => ({
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title.trim(),
        thumbnail: item.snippet.thumbnails?.medium?.url || "https://via.placeholder.com/150",
        index: index + 1,
      }));
    } catch (error) {
      console.error(`Error fetching videos from playlist ${playlistId}:`, error.message);
      return [];
    }
  };

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search videos..."
        value={searchText}
        onChangeText={setSearchText}
        style={styles.searchBar}
      />

      {loading ? (
        <ActivityIndicator size="large" color="blue" style={styles.loader} />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : filteredVideos.length > 0 ? (
        <FlatList
          data={filteredVideos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.videoContainer}
              onPress={() =>
                navigation.navigate("VideoPlayer", { videoId: item.id, title: item.title })
              }
            >
              <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} resizeMode="cover" />
              <Text style={styles.videoTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={styles.noVideosText}>No videos available for this module.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f9f9f9",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  videoContainer: {
    marginBottom: 15,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    alignItems: "center",
    width: "100%",
  },
  thumbnail: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  videoTitle: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  searchBar: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: "white",
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  noVideosText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ModuleVideosScreen;