import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./src/screens/HomeScreen";
import ModulesScreen from "./src/screens/ModulesScreen";
import ModuleVideosScreen from "./src/screens/ModuleVideosScreen";
import VideoPlayerScreen from "./src/screens/VideoPlayerScreen";
import QuizScreen from "./src/screens/QuizScreen";
import ModuleSelectionScreen from "./src/screens/ModuleSelectionScreen";
import RecorderScreen from "./src/screens/RecorderScreen"; // Import RecorderScreen


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ModulesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ModulesScreen" 
        component={ModulesScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="ModuleVideosScreen" 
        component={ModuleVideosScreen} 
        options={{ title: "Videos" }} 
      />
      <Stack.Screen 
        name="VideoPlayerScreen" 
        component={VideoPlayerScreen} 
        options={{ title: "Video Player" }} 
      />
      <Stack.Screen 
        name="QuizScreen" 
        component={QuizScreen} 
        options={{ title: "Quiz" }} 
      />
      <Stack.Screen 
        name="ModuleSelectionScreen" 
        component={ModuleSelectionScreen} 
        options={{ title: "Videos" }} 
      />
    </Stack.Navigator>
  );
}

function QuizStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="QuizModulesScreen" 
        component={ModuleSelectionScreen} 
        options={{ title: "Quiz Modules" }} 
      />
      <Stack.Screen 
        name="QuizScreen" 
        component={QuizScreen} 
        options={{ title: "Quiz" }} 
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Video Modules") {
                iconName = focused ? "grid" : "grid-outline";
              } else if (route.name === "Quiz Modules") {
                iconName = focused ? "book" : "book-outline";
              }else if (route.name === "Recorder") {
                iconName = "mic";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#6b46c1",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ headerShown: false }} 
          />
          <Tab.Screen 
            name="Video Modules" 
            component={ModulesStack} 
            options={{ headerShown: false }} 
          />
          <Tab.Screen 
            name="Quiz Modules" 
            component={QuizStack} 
            options={{ headerShown: false }} 
          />
           <Tab.Screen name="Recorder" component={RecorderScreen} options={{ title: "Recorder" }} />
           
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
