import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, Image, Alert } from "react-native";

const QuizScreen = ({ route, navigation }) => {
  const { module, questions: initialQuestions } = route.params;
  const [questions, setQuestions] = useState(initialQuestions || []);
  const [loading, setLoading] = useState(!initialQuestions);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  useEffect(() => {
    if (!initialQuestions) {
      fetchQuestions(module);
    }
  }, []);

  const fetchQuestions = async (module) => {
    setLoading(true);
    try {
      const response = await fetch("http://192.168.29.227:5000/generate-isl-questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ module }),
      });
      const data = await response.json();
      setQuestions(data.questions);
    } catch (error) {
      console.error("Error fetching quiz:", error);
      Alert.alert("Error", "Failed to load quiz questions.");
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerSelect = (questionIndex, selectedOption, correctAnswer) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: selectedOption });

    if (selectedOption === correctAnswer) {
      Alert.alert("Correct!", "You got it right! ✅");
    } else {
      Alert.alert("Wrong Answer", `The correct answer is: ${correctAnswer}`);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#f8f9fa" }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ padding: 10, backgroundColor: "#d9534f", marginBottom: 10, borderRadius: 8 }}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>⬅ Back to Modules</Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 10 }}>
        {module} Quiz
      </Text>

      {loading ? (
        <ActivityIndicator size="large" color="#6b46c1" />
      ) : (
        <FlatList
          data={questions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={{ padding: 20, marginBottom: 15, backgroundColor: "white", borderRadius: 8, elevation: 3 }}>
              <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>{item.question}</Text>

              {item.type === "match_image" && item.image_url ? (
                <Image source={{ uri: item.image_url }} style={{ height: 200, width: "100%", borderRadius: 8 }} />
              ) : null}

              {item.options && item.options.length > 0 &&
                item.options.map((option, optionIndex) => (
                  <TouchableOpacity
                    key={optionIndex}
                    style={{
                      backgroundColor: selectedAnswers[index] === option ? "#6b46c1" : "#ddd",
                      padding: 12,
                      marginVertical: 5,
                      borderRadius: 5,
                    }}
                    onPress={() => handleAnswerSelect(index, option, item.answer)}
                  >
                    <Text
                      style={{
                        color: selectedAnswers[index] === option ? "white" : "black",
                        fontSize: 16,
                        textAlign: "center",
                      }}
                    >
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
            </View>
          )}
        />
      )}
    </View>
  );
};

export default QuizScreen;
