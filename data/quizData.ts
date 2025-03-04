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
  "Alphabets & Numbers",
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

// **Manually Define Video Paths and Options**
const videoMap: Record<ModuleName, { videoUri: any; options: string[]; correctOptionIndex: number }[]> = {
  "Introduction to ISL": [
    {
      videoUri: require("../videos/Introduction to ISL/A.mp4"),
      options: ["A", "B", "C", "D"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Introduction to ISL/A.T.M. Card.mp4"),
      options: ["A.T.M. Card", "Credit Card", "Debit Card", "ID Card"],
      correctOptionIndex: 0,
    },
  ],
  "Alphabets & Numbers": [
    {
      videoUri: require("../videos/Alphabets & Numbers/A/A.mp4"),
      options: ["A", "B", "C", "D"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/B/B.mp4"),
      options: ["A", "B", "C", "D"],
      correctOptionIndex: 1,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/Numbers/10,000,000 or One Crore.mp4"),
      options: ["1 Million", "1 Crore", "100 Thousand", "10 Thousand"],
      correctOptionIndex: 1,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/Numbers/1000 or One Thousand.mp4"),
      options: ["1000", "10000", "100", "10"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/C/C.mp4"),
      options: ["O", "D", "P", "C"],
      correctOptionIndex: 3,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/Numbers/6 or Six.mp4"),
      options: ["50", "100", "6", "10"],
      correctOptionIndex: 2,
    },{
      videoUri: require("../videos/Alphabets & Numbers/Numbers/20 or Twenty.mp4"),
      options: ["1", "20", "100", "10"],
      correctOptionIndex: 1,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/Q/Q.mp4"),
      options: ["O", "D", "Q", "C"],
      correctOptionIndex: 2,
    }, {
      videoUri: require("../videos/Alphabets & Numbers/V/V.mp4"),
      options: ["O", "D", "P", "V"],
      correctOptionIndex: 3,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/Numbers/5,000,000 or Five Million.mp4"),
      options: ["10 Million", "10000", "5 Million", "50 "],
      correctOptionIndex: 2,
    },{
      videoUri: require("../videos/Alphabets & Numbers/Numbers/100 or One Hundred.mp4"),
      options: ["0", "5000", "100", "10"],
      correctOptionIndex: 2,
    },

  ],
  "Basic Greetings & Common Phrases": [
    {
      videoUri: require("../videos/Basic Greetings & Common Phrases/A.mp4"),
      options: ["Hello", "Goodbye", "Thank You", "Sorry"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Basic Greetings & Common Phrases/A.T.M. Card.mp4"),
      options: ["Good Morning", "Good Night", "See You", "Welcome"],
      correctOptionIndex: 3,
    },
  ],
  "Actions & Verbs": [
    {
      videoUri: require("../videos/Actions & Verbs/Borrow.mp4"),
      options: ["Call", "Borrow", "Eat", "Write"],
      correctOptionIndex: 1,
    },
    {
      videoUri: require("../videos/Actions & Verbs/Dislike.mp4"),
      options: ["Do", "Walk", "Drink", "Dislike"],
      correctOptionIndex: 3,
    },
    {
      videoUri: require("../videos/Actions & Verbs/Run.mp4"),
      options: ["Run", "Eat", "Stand", "Catch"],
      correctOptionIndex: 0,
    }, {
      videoUri: require("../videos/Actions & Verbs/Eat.mp4"),
      options: ["Write", "Touch", "Eat", "Call"],
      correctOptionIndex: 2,
    }, {
      videoUri: require("../videos/Actions & Verbs/Defend.mp4"),
      options: ["Jump", "Defend", "Call", "Doubt"],
      correctOptionIndex: 1,
    }, {
      videoUri: require("../videos/Actions & Verbs/Slap.mp4"),
      options: ["Slap", "Cross", "Draw", "Communicate"],
      correctOptionIndex: 0,
    }, {
      videoUri: require("../videos/Actions & Verbs/Disagree.mp4"),
      options: ["Drink", "Catch", "Stand", "Disagree"],
      correctOptionIndex: 3,
    }, {
      videoUri: require("../videos/Actions & Verbs/Walk.mp4"),
      options: ["Stand", "Walk", "Do", "Run"],
      correctOptionIndex: 1,
    }, {
      videoUri: require("../videos/Actions & Verbs/Call.mp4"),
      options: ["Run", "Jump", "Call", "Write"],
      correctOptionIndex: 2,
    }, {
      videoUri: require("../videos/Actions & Verbs/Touch.mp4"),
      options: ["Touch", "Dislike", "Sleep", "Walk"],
      correctOptionIndex: 0,
    },
  ],
  "Question Words & Sentences": [
    {
      videoUri: require("../videos/Question Words & Sentences/Where.mp4"),
      options: ["How", "Where", "If", "Why"],
      correctOptionIndex: 1,
    },
    {
      videoUri: require("../videos/Question Words & Sentences/What.mp4"),
      options: ["If", "Why", "Who", "What"],
      correctOptionIndex: 3,
    },
    {
      videoUri: require("../videos/Question Words & Sentences/How.mp4"),
      options: ["How", "Whom", "If", "Why"],
      correctOptionIndex: 0,
    },  {
      videoUri: require("../videos/Question Words & Sentences/Whose.mp4"),
      options: ["If", "Whose", "When", "Who"],
      correctOptionIndex: 1,
    },  {
      videoUri: require("../videos/Question Words & Sentences/Which.mp4"),
      options: ["Where", "Whom", "Which", "What"],
      correctOptionIndex: 2,
    },  {
      videoUri: require("../videos/Question Words & Sentences/If.mp4"),
      options: ["If", "When", "How", "Whose"],
      correctOptionIndex: 0,
    },  {
      videoUri: require("../videos/Question Words & Sentences/Whom.mp4"),
      options: ["How", "Where", "Whom", "Why"],
      correctOptionIndex: 2,
    },  {
      videoUri: require("../videos/Question Words & Sentences/When.mp4"),
      options: ["Whose", "What", "If", "When"],
      correctOptionIndex: 3,
    },  {
      videoUri: require("../videos/Question Words & Sentences/Who.mp4"),
      options: ["Who", "Where", "What", "Why"],
      correctOptionIndex: 0,
    },  {
      videoUri: require("../videos/Question Words & Sentences/Why.mp4"),
      options: ["How", "When", "Whom", "Why"],
      correctOptionIndex: 3,
    },
  ],
  "Common Objects & Places": [
    {
      videoUri: require("../videos/Common Objects & Places/Table.mp4"),
      options: ["Door", "Book", "Table", "School"],
      correctOptionIndex: 2,
    },
    {
      videoUri: require("../videos/Common Objects & Places/Hospital.mp4"),
      options: ["Hospital", "Bottle", "Pen", "Market"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Common Objects & Places/Chair.mp4"),
      options: ["Book", "Chair", "Park", "Door"],
      correctOptionIndex: 1,
    }, {
      videoUri: require("../videos/Common Objects & Places/Market.mp4"),
      options: ["Pen", "Table", "Market", "School"],
      correctOptionIndex: 2,
    }, {
      videoUri: require("../videos/Common Objects & Places/Door.mp4"),
      options: ["Door", "Table", "Chair", "Park"],
      correctOptionIndex: 0,
    }, {
      videoUri: require("../videos/Common Objects & Places/Bottle.mp4"),
      options: ["Hospital", "Bottle", "Market", "School"],
      correctOptionIndex: 1,
    }, {
      videoUri: require("../videos/Common Objects & Places/School.mp4"),
      options: ["Chair", "Book", "School", "Door"],
      correctOptionIndex: 2,
    }, {
      videoUri: require("../videos/Common Objects & Places/Pen.mp4"),
      options: ["Pen", "Park", "Table", "Hospital"],
      correctOptionIndex: 0,
    }, {
      videoUri: require("../videos/Common Objects & Places/Book.mp4"),
      options: ["Door", "Book", "Bottle", "Market"],
      correctOptionIndex: 1,
    }, {
      videoUri: require("../videos/Common Objects & Places/Park.mp4"),
      options: ["School", "Pen", "Hospital", "Park"],
      correctOptionIndex: 3,
    },
  ],
  // Add similar objects for other modules
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

  // Generate questions with user-defined options
  const allQuestions: Question[] = videos.map((video, index) => ({
    id: index + 1,
    videoUri: video.videoUri,
    question: questionPrompts[index % questionPrompts.length],
    options: video.options,
    correctOptionIndex: video.correctOptionIndex,
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
