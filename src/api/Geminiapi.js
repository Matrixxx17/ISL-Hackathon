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
