const axios = require("axios");

const YOUTUBE_API_KEY = "AIzaSyDkxHV8G13kPB8CF23WtC_RUsSz1h-bhT4"; // Replace with your API key
const PLAYLIST_IDS = [
  "PLFjydPMg4DapfRTBMokl09Ht-fhMOAYf6",
  "PLxYMaKXKMMcMgg4f47WkG7AM0bb3AyjTi"
];

async function getRandomVideoUrl() {
  try {
    const randomPlaylist = PLAYLIST_IDS[Math.floor(Math.random() * PLAYLIST_IDS.length)];
    
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${randomPlaylist}&key=${YOUTUBE_API_KEY}`;
    
    const response = await axios.get(url);
    const videos = response.data.items;
    
    if (!videos || videos.length === 0) {
      throw new Error("No videos found in the playlist.");
    }

    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    const videoId = randomVideo.snippet.resourceId.videoId;
    return `https://www.youtube.com/embed/${videoId}`;
  } catch (error) {
    console.error("Error fetching YouTube video:", error);
    return null;
  }
}

module.exports = { getRandomVideoUrl };
