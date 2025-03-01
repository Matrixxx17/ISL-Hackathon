import React, { useState, useRef } from "react";
import { View, Button, Text, Alert } from "react-native";
import { Audio } from "expo-av";

export default function Recorder() {
  const [recording, setRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recordingRef = useRef(null); // Use useRef to store recording instance

  const startRecording = async () => {
    try {
      const { status } = await Audio.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission required", "Please allow microphone access.");
        return;
      }

      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync({
        isMeteringEnabled: true,
        android: {
          extension: ".mp3", // Save as MP3
          outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
          audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
          sampleRate: 44100,
          numberOfChannels: 2,
          bitRate: 128000,
        },
        ios: {
          extension: ".mp3", // Save as MP3
          outputFormat: Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC,
          audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
          sampleRate: 44100,
          numberOfChannels: 2,
          bitRate: 128000,
        },
      });

      await recording.startAsync();
      recordingRef.current = recording; // Store in useRef
      setRecording(true);
    } catch (error) {
      console.error("Failed to start recording:", error);
    }
  };

  const stopRecording = async () => {
    if (!recordingRef.current) return;

    try {
      await recordingRef.current.stopAndUnloadAsync();
      const uri = recordingRef.current.getURI();
      console.log("✅ Recording saved at:", uri);

      sendAudioToBackend(uri);
    } catch (error) {
      console.error("Failed to stop recording:", error);
    } finally {
      recordingRef.current = null;
      setRecording(false);
    }
  };

  const sendAudioToBackend = async (uri) => {
    try {
      console.log("📤 Sending recorded file:", uri);

      const formData = new FormData();
      formData.append("audio", {
        uri,
        name: "recording.mp3",
        type: "audio/mp3",
      });

      const response = await fetch("http://192.168.29.227:5000/transcribe", {  // Replace with your backend IP
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        body: formData,
      });

      const result = await response.json();
      console.log("📜 Transcription response:", result);

      if (result.transcript) {
        setTranscript(result.transcript);
      } else {
        console.error("No transcription text found in response.");
      }
    } catch (error) {
      console.error("Error sending audio:", error);
    }
  };

  return (
    <View>
      <Button title="Start Recording" onPress={startRecording} disabled={recording} />
      <Button title="Stop Recording" onPress={stopRecording} disabled={!recording} />
      {transcript ? <Text>📜 Transcription: {transcript}</Text> : null}
    </View>
  );
}
