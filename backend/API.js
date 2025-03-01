/*const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = 5000;
const apiKey = "AIzaSyDReqcObgWfehDizf0fUZmxtlOuo6E2axU"; // Replace with your actual API key

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-vision" });

app.use(cors());
app.use(express.json());

const generateSignImage = async (signWord) => {
  const imagePrompt = `Generate a clear, high-quality image of a hand signing the word '${signWord}' in Indian Sign Language (ISL). The background should be plain, and the gesture should be accurate.`;

  try {
    const response = await model.generateContent(imagePrompt);

    if (response.response && response.response.candidates) {
      const imageBase64 = response.response.candidates[0].content.parts[0].inlineData.data; 
      return `data:image/png;base64,${imageBase64}`; // Convert to a displayable image format
    }
    
    return null;
  } catch (error) {
    console.error("Error generating ISL sign image:", error);
    return null;
  }
};

app.post("/generate-isl-questions", async (req, res) => {
  const { module } = req.body;

  const prompt = `
    Generate 10 quiz questions for the Indian Sign Language (ISL) module: "${module}".
    - 4-5 questions should be 'Match the correct sign from the given image.'
    - The remaining should be a mix of MCQs and True/False.
    - For image-based questions, include a placeholder field "sign_word".
    - Format the response as pure JSON, without markdown.

    Example:
    {
      "questions": [
        {
          "type": "match_image",
          "question": "Match the ISL sign shown in the image:",
          "sign_word": "Hello",
          "options": ["Hello", "Thank You", "Sorry", "Please"],
          "answer": "Hello"
        },
        {
          "type": "mcq",
          "question": "What is the ISL sign for 'Good Morning'?",
          "options": ["Raising both hands", "One hand moving up", "Waving", "Tapping chest"],
          "answer": "One hand moving up"
        }
      ]
    }
  `;

  try {
    const chatSession = model.startChat({});
    const result = await chatSession.sendMessage(prompt);

    let rawResponse = result.response.text();
    rawResponse = rawResponse.replace(/```json/g, "").replace(/```/g, "").trim();

    let questions = JSON.parse(rawResponse);

    // Generate ISL images dynamically for match_image questions
    for (let question of questions.questions) {
      if (question.type === "match_image" && question.sign_word) {
        const imageUrl = await generateSignImage(question.sign_word);
        if (imageUrl) {
          question.image_url = imageUrl;
        }
      }
    }

    res.json(questions);
  } catch (error) {
    console.error("Error generating ISL questions:", error);
    res.status(500).json({ error: "Failed to generate questions" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// AIzaSyDReqcObgWfehDizf0fUZmxtlOuo6E2axU*/

/*const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = 5000;
const apiKey = "AIzaSyDReqcObgWfehDizf0fUZmxtlOuo6E2axU"; // Replace with your actual API key

const genAI = new GoogleGenerativeAI(apiKey);

app.use(cors());
app.use(express.json());

// Route to list available models
app.get("/list-models", async (req, res) => {
  try {
    const response = await genAI.listModels();
    console.log(response)
    res.json(response.models);
  } catch (error) {
    console.error("Error listing models:", error);
    res.status(500).json({ error: "Failed to list available models" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});*/
/* */

///Implemented//
const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = 5000;
const apiKey = "AIzaSyDReqcObgWfehDizf0fUZmxtlOuo6E2axU"; // Replace with your actual API key

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.use(cors());
app.use(express.json());

const getRandomSignImage = () => {
  const images = [
    "https://example.com/sign1.jpg",
    "https://example.com/sign2.jpg",
    "https://example.com/sign3.jpg",
    "https://example.com/sign4.jpg",
    "https://example.com/sign5.jpg",
  ];
  return images[Math.floor(Math.random() * images.length)];
};

app.post("/generate-isl-questions", async (req, res) => {
  const { module } = req.body;

  const prompt = `
    Generate 10 quiz questions for the Indian Sign Language (ISL) module: "${module}".
    - 4-5 questions should be 'Match the correct sign from the given image.'
    - The remaining should be a mix of MCQs and True/False.
    - For image-based questions, use a placeholder like "RANDOM_IMAGE_URL" (will be replaced with actual images).
    - Format the response as pure JSON, without markdown.

    Example:
    {
      "questions": [
        {
          "type": "match_image",
          "question": "Match the ISL sign shown in the image:",
          "image_url": "RANDOM_IMAGE_URL",
          "options": ["Hello", "Thank You", "Sorry", "Please"],
          "answer": "Hello"
        },
        {
          "type": "mcq",
          "question": "What is the ISL sign for 'Good Morning'?",
          "options": ["Raising both hands", "One hand moving up", "Waving", "Tapping chest"],
          "answer": "One hand moving up"
        },
        {
          "type": "true_false",
          "question": "True or False: The ISL sign for 'Hello' is a simple wave.",
          "answer": "True"
        }
      ]
    }
  `;

  try {
    const chatSession = model.startChat({});
    const result = await chatSession.sendMessage(prompt);

    let rawResponse = result.response.text();
    rawResponse = rawResponse.replace(/```json/g, "").replace(/```/g, "").trim();

    let questions = JSON.parse(rawResponse);

    // Replace "RANDOM_IMAGE_URL" placeholders with actual sign images
    questions.questions = questions.questions.map((q) => {
      if (q.type === "match_image") {
        q.image_url = getRandomSignImage();
      }
      return q;
    });

    res.json(questions);
  } catch (error) {
    console.error("Error generating ISL questions:", error);
    res.status(500).json({ error: "Failed to generate questions" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


//Open AI

/*require("dotenv").config();
const express = require("express");
const multer = require("multer");
const fs = require("fs");
const axios = require("axios");

const app = express();
const upload = multer({ dest: "uploads/" });

const ASSEMBLYAI_API_KEY = process.env.ASSEMBLYAI_API_KEY;
const PORT = process.env.PORT || 5000;

if (!ASSEMBLYAI_API_KEY) {
  console.error("❌ Missing AssemblyAI API Key. Please add it to .env");
  process.exit(1);
}

const retryRequest = async (fn, retries = 3, delay = 2000) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      console.error(`Retry ${i + 1}/${retries} failed:`, error.message);
      if (i === retries - 1) throw error;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
};

app.post("/transcribe", upload.single("audio"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No audio file uploaded" });
    }

    const audioPath = req.file.path;
    console.log("✅ File received:", audioPath);

    // Step 1: Upload the file to AssemblyAI
    const audioData = fs.readFileSync(audioPath);
    const uploadResponse = await retryRequest(() =>
      axios.post("https://api.assemblyai.com/v2/upload", audioData, {
        headers: { Authorization: ASSEMBLYAI_API_KEY, "Content-Type": "application/json" },
      })
    );

    const uploadUrl = uploadResponse.data.upload_url;
    console.log("✅ File uploaded to AssemblyAI:", uploadUrl);

    // Step 2: Request Transcription
    const transcriptResponse = await retryRequest(() =>
      axios.post(
        "https://api.assemblyai.com/v2/transcript",
        {
          audio_url: uploadUrl,
          speaker_labels: true, // Enable speaker differentiation if needed
        },
        {
          headers: { Authorization: ASSEMBLYAI_API_KEY, "Content-Type": "application/json" },
        }
      )
    );

    const transcriptId = transcriptResponse.data.id;
    console.log("📝 Transcription requested, ID:", transcriptId);

    // Step 3: Poll for Transcription Status
    let transcript;
    while (true) {
      const statusResponse = await axios.get(
        `https://api.assemblyai.com/v2/transcript/${transcriptId}`,
        { headers: { Authorization: ASSEMBLYAI_API_KEY } }
      );

      if (statusResponse.data.status === "completed") {
        transcript = statusResponse.data.text;
        console.log("✅ Transcription completed:", transcript);
        break;
      } else if (statusResponse.data.status === "failed") {
        throw new Error("Transcription failed");
      }

      console.log("⏳ Waiting for transcription...");
      await new Promise((res) => setTimeout(res, 5000));
    }

    res.json({ transcript });
    fs.unlinkSync(audioPath); // Delete file after processing
  } catch (error) {
    console.error("❌ Error transcribing audio:", error);
    res.status(500).json({ error: "Failed to process audio", details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});*/


/*require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = process.env.PORT || 5000;
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
const GOOGLE_AI_KEY = process.env.GOOGLE_AI_KEY;

const genAI = new GoogleGenerativeAI(GOOGLE_AI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.use(cors());
app.use(express.json());

// Function to fetch ISL-related images from Unsplash
const getUnsplashImage = async (query) => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query, per_page: 1, orientation: "squarish" },
      headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` },
    });

    return response.data.results.length > 0
      ? response.data.results[0].urls.regular
      : null;
  } catch (error) {
    console.error("Error fetching Unsplash image:", error);
    return null;
  }
};

// Mapping ISL modules to search queries for images
const moduleImageQueries = {
  "Introduction to ISL": "sign language hands",
  "Alphabet & Numbers": "hand sign alphabet",
  "Basic Greetings & Common Phrases": "hello sign language",
  "Days, Months & Time": "calendar sign language",
  "Family & Relationships": "family sign language",
  "Colors & Basic Adjectives": "color sign language",
  "Common Objects & Places": "objects sign language",
  "Actions & Verbs": "action sign language",
  "Question Words & Sentences": "question sign language",
  "Sentence Formation & Grammar Basics": "sign language grammar",
};

// Function to generate AI-based MCQ and True/False questions
const generateAIQuestions = async (module) => {
  const prompt = `
    Generate 5 quiz questions for the Indian Sign Language (ISL) module: "${module}".
    - Questions should be a mix of MCQs and True/False.
    - Format the response as pure JSON, without markdown.

    Example:
    {
      "questions": [
        {
          "type": "mcq",
          "question": "What is the ISL sign for 'Good Morning'?",
          "options": ["Raising both hands", "One hand moving up", "Waving", "Tapping chest"],
          "answer": "One hand moving up"
        },
        {
          "type": "true_false",
          "question": "True or False: The ISL sign for 'Hello' is a simple wave.",
          "answer": "True"
        }
      ]
    }
  `;

  try {
    const chatSession = model.startChat({});
    const result = await chatSession.sendMessage(prompt);

    let rawResponse = result.response.text();
    rawResponse = rawResponse.replace(/```json/g, "").replace(/```/g, "").trim();
    let questions = JSON.parse(rawResponse);

    return questions.questions;
  } catch (error) {
    console.error("Error generating AI questions:", error);
    return [];
  }
};

// Main API to generate ISL quiz questions
app.post("/generate-isl-questions", async (req, res) => {
  const { module } = req.body;

  if (!module || !moduleImageQueries[module]) {
    return res.status(400).json({ error: "Invalid module name" });
  }

  try {
    // Fetch an ISL image related to the module
    const imageUrl = await getUnsplashImage(moduleImageQueries[module]);

    if (!imageUrl) {
      return res.status(500).json({ error: "No image found for this module" });
    }

    // Generate AI-based MCQ & True/False questions
    const aiQuestions = await generateAIQuestions(module);

    // Generate image-based questions
    const imageQuestions = [
      {
        type: "match_image",
        question: "Match the ISL sign shown in the image:",
        image_url: imageUrl,
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answer: "Option 1",
      },
      {
        type: "match_image",
        question: "Identify the sign language gesture in the image:",
        image_url: imageUrl,
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
    ];

    // Combine AI-generated and image-based questions
    const finalQuestions = [...imageQuestions, ...aiQuestions];

    res.json({ questions: finalQuestions });
  } catch (error) {
    console.error("Error generating ISL questions:", error);
    res.status(500).json({ error: "Failed to generate questions" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
*/