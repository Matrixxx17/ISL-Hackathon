const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = "AIzaSyDReqcObgWfehDizf0fUZmxtlOuo6E2axU"; // Replace with your new secured API key

async function listAvailableModels() {
  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const response = await genAI.listModels();
    
    console.log("Available Models:", response.models);
  } catch (error) {
    console.error("Error fetching models:", error);
  }
}

listAvailableModels();
