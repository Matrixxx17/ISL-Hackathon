import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from "react-native";

const modules = [
  "Introduction to ISL",
  "Alphabet & Numbers",
  "Basic Greetings & Common Phrases",
  "Days, Months & Time",
  "Family & Relationships",
  "Colors & Basic Adjectives",
  "Common Objects & Places",
  "Actions & Verbs",
  "Question Words & Sentences",
  "Sentence Formation & Grammar Basics",
];

const ModuleSelectionScreen = ({ navigation }) => {
  const [loadingModule, setLoadingModule] = useState(null); // Track which module is being fetched

  const handleModulePress = async (module) => {
    setLoadingModule(module); // Set loading for this module
    try {
      const response = await fetch("http://192.168.29.227:5000/generate-isl-questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ module }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch questions");
      }

      const data = await response.json();
      navigation.navigate("QuizScreen", { module, questions: data.questions }); // Navigate with data
    } catch (error) {
      Alert.alert("Error", "Could not load questions. Please try again.");
      console.error("Error fetching quiz:", error);
    } finally {
      setLoadingModule(null); // Reset loading state
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Module</Text>
      {modules.map((module, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, loadingModule === module && styles.disabledButton]}
          onPress={() => handleModulePress(module)}
          disabled={loadingModule !== null} // Disable all buttons while fetching
        >
          {loadingModule === module ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.buttonText}>{module}</Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20, backgroundColor: "#f8f9fa" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  button: {
    backgroundColor: "#6b46c1",
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  disabledButton: { backgroundColor: "#9b7dcf" },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});

export default ModuleSelectionScreen;
