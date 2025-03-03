// // Define the module structure
// export interface Module {
//   id: number
//   title: string
//   description: string
// }

// // Define the question structure
// export interface Question {
//   id: number
//   question: string
//   videoUri: string
//   options: string[]
//   correctOptionIndex: number
// }

// // Define the modules
// export const modules: Module[] = [
//   {
//     id: 1,
//     title: "Introduction to ISL",
//     description: "Learn the basics of Indian Sign Language and its importance.",
//   },
//   {
//     id: 2,
//     title: "Alphabet & Numbers",
//     description: "Learn to sign the alphabet and numbers in Indian Sign Language.",
//   },
//   {
//     id: 3,
//     title: "Basic Greetings & Common Phrases",
//     description: "Learn everyday greetings and common phrases in ISL.",
//   },
//   {
//     id: 4,
//     title: "Days, Months & Time",
//     description: "Learn to sign days of the week, months, and time-related concepts.",
//   },
//   {
//     id: 5,
//     title: "Family & Relationships",
//     description: "Learn signs for family members and relationship terms.",
//   },
//   {
//     id: 6,
//     title: "Colors & Basic Adjectives",
//     description: "Learn to sign colors and basic descriptive words.",
//   },
//   {
//     id: 7,
//     title: "Common Objects & Places",
//     description: "Learn signs for everyday objects and common places.",
//   },
//   {
//     id: 8,
//     title: "Actions & Verbs",
//     description: "Learn to sign common actions and verbs in ISL.",
//   },
//   {
//     id: 9,
//     title: "Question Words & Sentences",
//     description: "Learn to form questions and basic sentences in ISL.",
//   },
//   {
//     id: 10,
//     title: "Sentence Formation & Grammar Basics",
//     description: "Learn the grammar rules and sentence structure in ISL.",
//   },
// ]

// // Sample questions for each module
// // In a real app, you would have a database with all questions
// // This is a simplified version with sample questions

// // This function generates questions for a specific module and set
// export const getQuizQuestions = (moduleId: string, setId: number): Question[] => {
//   // Define the module-to-folder mapping
//   const videoFolders = {
//     "Introduction to ISL": "Introduction to ISL",
//     "Alphabet & Numbers": "Alphabets & Numbers",
//     "Basic Greetings & Common Phrases": "Basic Greetings & Common Phrases",
//     "Days, Months & Time": "Days, Months & Time",
//     "Family & Relationships": "Family & Relationships",
//     "Colors & Basic Adjectives": "Colors & Basic Adjectives",
//     "Common Objects & Places": "Common Objects & Places",
//     "Actions & Verbs": "Actions & Verbs",
//     "Question Words & Sentences": "Question Words & Sentences",
//     "Sentence Formation & Grammar Basics": "Sentence Formation & Grammar Basics",
//   };

//   // Get the correct folder name for the module
//   const folderName = videoFolders[moduleId];
//   if (!folderName) {
//     console.error(`Module ID "${moduleId}" not found.`);
//     return [];
//   }

//   // Load all videos (assuming names are `video1.mp4`, `video2.mp4`, ..., `video22.mp4`)
//   const videos = Array.from({ length: 22 }, (_, i) =>
//     require(`../videos/${folderName}/video${i + 1}.mp4`)
//   );

//   // Define sample question prompts
//   const questionPrompts = [
//     "What does this sign mean?",
//     "Identify this sign.",
//     "Which of these represents the shown sign?",
//     "Choose the correct meaning of this sign.",
//     "This sign is used for?",
//   ];

//   // Generate 22 questions (1 per video)
//   const allQuestions: Question[] = videos.map((videoUri, index) => ({
//     id: index + 1,
//     videoUri,
//     question: questionPrompts[index % questionPrompts.length], // Cycle through prompts
//     options: shuffleArray(["Hello", "Goodbye", "Thank You", "Sorry"]), // Replace with real options
//     correctOptionIndex: Math.floor(Math.random() * 4), // Random correct answer
//   }));

//   // Shuffle and pick 10 questions for the selected set
//   const selectedQuestions = shuffleArray(allQuestions).slice((setId - 1) * 10, setId * 10);

//   return selectedQuestions;
// };


// // Function to shuffle an array (Fisher-Yates algorithm)
// export function shuffleArray<T>(array: T[]): T[] {
//   const newArray = [...array]
//   for (let i = newArray.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1))
//     ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
//   }
//   return newArray
// }

// Define the module structure
// Define the module structure
export interface Module {
  id: number;
  title: string;
  description: string;
}

// Define the question structure
export interface Question {
  id: number;
  question: string;
  videoUri: any;
  options: string[];
  correctOptionIndex: number;
}

// Define valid module names
export const moduleNames = [
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
] as const;

export type ModuleName = (typeof moduleNames)[number];

// Define the modules
export const modules: Module[] = moduleNames.map((name, index) => ({
  id: index + 1,
  title: name,
  description: `Learn about ${name} in Indian Sign Language.`,
}));

// 🔹 **Manually Define Video Paths (Since Dynamic Require() is Not Allowed)**
const videoMap: Record<ModuleName, any[]> = {
  "Introduction to ISL": [
    require("../videos/Introduction to ISL/A.mp4"),
    require("../videos/Introduction to ISL/A.T.M. Card.mp4"),
  ],
  "Alphabet & Numbers": [
    require("../videos/Alphabets & Numbers/A/A.mp4"),
    require("../videos/Alphabets & Numbers/A/A.T.M. Card.mp4"),
  ],
  "Basic Greetings & Common Phrases": [
    require("../videos/Basic Greetings & Common Phrases/A.mp4"),
    require("../videos/Basic Greetings & Common Phrases/A.T.M. Card.mp4"),
  ],
  "Days, Months & Time": [
    require("../videos/Days, Months & Time/A.mp4"),
    require("../videos/Days, Months & Time/A.T.M. Card.mp4"),
  ],
  "Family & Relationships": [
    require("../videos/Family & Relationships/A.mp4"),
    require("../videos/Family & Relationships/A.T.M. Card.mp4"),
  ],
  "Colors & Basic Adjectives": [
    require("../videos/Colors & Basic Adjectives/A.mp4"),
    require("../videos/Colors & Basic Adjectives/A.T.M. Card.mp4"),
  ],
  "Common Objects & Places": [
    require("../videos/Common Objects & Places/Book.mp4"),
    require("../videos/Common Objects & Places/Chair.mp4"),
  ],
  "Actions & Verbs": [
    require("../videos/Actions & Verbs/Call.mp4"),
    require("../videos/Actions & Verbs/Cross.mp4"),
  ],
  "Question Words & Sentences": [
    require("../videos/Question Words & Sentences/If.mp4"),
    require("../videos/Question Words & Sentences/When.mp4"),
  ],
  "Sentence Formation & Grammar Basics": [
    require("../videos/Sentence Formation & Grammar Basics/A.mp4"),
    require("../videos/Sentence Formation & Grammar Basics/A.T.M. Card.mp4"),
  ],
};

// **Updated Function to Get Quiz Questions**
export const getQuizQuestions = (moduleId: ModuleName, setId: number): Question[] => {
  const videos = videoMap[moduleId];
  if (!videos) {
    console.error(`Module "${moduleId}" not found.`);
    return [];
  }

  const questionPrompts = [
    "What does this sign mean?",
    "Identify this sign.",
    "Which of these represents the shown sign?",
    "Choose the correct meaning of this sign.",
    "This sign is used for?",
  ];

  // Generate questions
  const allQuestions: Question[] = videos.map((videoUri, index) => ({
    id: index + 1,
    videoUri,
    question: questionPrompts[index % questionPrompts.length],
    options: shuffleArray(["A", "A.T.M. Card", "Thank You", "Sorry"]),
    correctOptionIndex: Math.floor(Math.random() * 4),
  }));

  // Select 10 random questions
  return shuffleArray(allQuestions).slice((setId - 1) * 10, setId * 10);
};

// **Function to Shuffle an Array (Fisher-Yates Algorithm)**
export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export interface Question {
  id: number;
  question: string;
  videoUri: any;
  options: string[];
  correctOptionIndex: number;
}
