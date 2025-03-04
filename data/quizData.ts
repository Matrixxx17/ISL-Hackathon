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
      videoUri: require("../videos/Introduction to ISL/Fast.mp4"),
      options: ["A", "B", "C", "D"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Introduction to ISL/Help.mp4"),
      options: ["A.T.M. Card", "Credit Card", "Debit Card", "ID Card"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Introduction to ISL/Love.mp4"),
      options: ["A", "B", "C", "D"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Introduction to ISL/Morning.mp4"),
      options: ["A", "B", "C", "D"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Introduction to ISL/Night.mp4"),
      options: ["A", "B", "C", "D"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Introduction to ISL/No.mp4"),
      options: ["A", "B", "C", "D"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Introduction to ISL/Please.mp4"),
      options: ["A", "B", "C", "D"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Introduction to ISL/Slow.mp4"),
      options: ["A", "B", "C", "D"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Introduction to ISL/Sorry.mp4"),
      options: ["A", "B", "C", "D"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Introduction to ISL/ThankYou.mp4"),
      options: ["A", "B", "C", "D"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Introduction to ISL/Understand.mp4"),
      options: ["A", "B", "C", "D"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Introduction to ISL/Where.mp4"),
      options: ["A", "B", "C", "D"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Introduction to ISL/Who.mp4"),
      options: ["A", "B", "C", "D"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Introduction to ISL/Yes.mp4"),
      options: ["A", "B", "C", "D"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Introduction to ISL/Hello.mp4"),
      options: ["A", "B", "C", "D"],
      correctOptionIndex: 0,
    }
  ],

  "Alphabets & Numbers": [
    {
      videoUri: require("../videos/Alphabets & Numbers/A/A.mp4"),
      options: ["A", "B", "C", "D"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/A/A.T.M.Card.mp4"),
      options: ["A.T.M. Card", "Credit Card", "Passport", "Driving License"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/A/AadharCard.mp4"),
      options: ["Aadhar Card", "PAN Card", "Voter ID", "Ration Card"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/A/Absorb.mp4"),
      options: ["Absorb", "Release", "Throw", "Ignore"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/A/Accept.mp4"),
      options: ["Accept", "Reject", "Deny", "Ignore"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/A/Accuse.mp4"),
      options: ["Accuse", "Forgive", "Ignore", "Help"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/A/Agree.mp4"),
      options: ["Agree", "Disagree", "Argue", "Doubt"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/A/Allow.mp4"),
      options: ["Allow", "Forbid", "Block", "Stop"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/A/April.mp4"),
      options: ["April", "May", "June", "July"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/A/Arrest.mp4"),
      options: ["Arrest", "Release", "Rescue", "Ignore"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/A/August.mp4"),
      options: ["August", "September", "October", "November"],
      correctOptionIndex: 0,
    },
    

    {
      videoUri: require("../videos/Alphabets & Numbers/B/B.mp4"),
      options: ["A", "B", "C", "D"],
      correctOptionIndex: 1,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/B/Baby.mp4"),
      options: ["Child", "Baby", "Teen", "Adult"],
      correctOptionIndex: 1,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/B/Boy.mp4"),
      options: ["Girl", "Boy", "Man", "Woman"],
      correctOptionIndex: 1,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/B/Brother.mp4"),
      options: ["Sister", "Brother", "Uncle", "Father"],
      correctOptionIndex: 1,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/B/Brother-In-Law.mp4"),
      options: ["Brother-In-Law", "Father-In-Law", "Cousin", "Nephew"],
      correctOptionIndex: 1,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/B/Building.mp4"),
      options: ["Tree", "Building", "Bridge", "Mountain"],
      correctOptionIndex: 1,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/B/BusStand.mp4"),
      options: ["Railway Station", "Bus Stand", "Airport", "Metro Station"],
      correctOptionIndex: 1,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/B/But.mp4"),
      options: ["And", "But", "Or", "Because"],
      correctOptionIndex: 1,
    },
    


    {
      videoUri: require("../videos/Alphabets & Numbers/Numbers/10,000,000 or One Crore.mp4"),
      options: ["1 Million", "1 Crore", "100 Thousand", "10 Thousand"],
      correctOptionIndex: 1,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/Numbers/1000 or One Thousand.mp4"),
      options: ["1000", "10", "100", "10000"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/Numbers/0 or Zero - Copy.mp4"),
      options: ["Zero", "1000", "10", "10000"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/Numbers/1 or One.mp4"),
      options: ["1", "10", "100", "1000"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/Numbers/5,000,000 or Five Million.mp4"),
      options: ["5 Million", "50 Thousand", "1 Million", "500 Thousand"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/Numbers/6 or Six.mp4"),
      options: ["6", "16", "60", "600"],
      correctOptionIndex: 0,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/Numbers/10 or Ten.mp4"),
      options: ["100", "1000", "10", "1"],
      correctOptionIndex: 2,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/Numbers/15 or Fifteen.mp4"),
      options: ["50", "15", "5", "500"],
      correctOptionIndex: 1,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/Numbers/20 or Twenty.mp4"),
      options: ["12", "22", "20", "200"],
      correctOptionIndex: 2,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/Numbers/50Th of Fiftieth.mp4"),
      options: ["5th", "50th", "15th", "55th"],
      correctOptionIndex: 1,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/Numbers/100 or One Hundred.mp4"),
      options: ["10", "100", "1000", "1"],
      correctOptionIndex: 1,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/Numbers/100,000 or One Lac.mp4"),
      options: ["10 Thousand", "1 Million", "100 Thousand", "10 Lac"],
      correctOptionIndex: 2,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/Numbers/1000 or One Thousand.mp4"),
      options: ["10000", "1000", "100", "10"],
      correctOptionIndex: 1,
    },
    


    {
      videoUri: require("../videos/Alphabets & Numbers/C/C.mp4"),
      options: ["O", "D", "P", "C"],
      correctOptionIndex: 3,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/C/Charger (Phone).mp4"),
      options: ["Charger", "Cable", "Pen", "Book"],
      correctOptionIndex: 3,
    },


    {
      videoUri: require("../videos/Alphabets & Numbers/Q/Q.mp4"),
      options: ["O", "D", "Q", "C"],
      correctOptionIndex: 2,
    }, 


    {
      videoUri: require("../videos/Alphabets & Numbers/V/V.mp4"),
      options: ["O", "D", "P", "V"],
      correctOptionIndex: 3,
    },


    {
      videoUri: require("../videos/Alphabets & Numbers/D/D.mp4"),
      options: ["O", "D", "P", "V"],
      correctOptionIndex: 1,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/D/Dangerous.mp4"),
      options: ["Safe", "Dangerous", "Careful", "Calm"],
      correctOptionIndex: 1,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/D/Daughter.mp4"),
      options: ["Son", "Mother", "Daughter", "Sister"],
      correctOptionIndex: 2,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/D/Day.mp4"),
      options: ["Night", "Week", "Month", "Day"],
      correctOptionIndex: 3,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/D/Deaf.mp4"),
      options: ["Blind", "Mute", "Deaf", "Lame"],
      correctOptionIndex: 2,
    },
    {
      videoUri: require("../videos/Alphabets & Numbers/D/December.mp4"),
      options: ["January", "March", "December", "July"],
      correctOptionIndex: 2,
    },
    

    {
  videoUri: require("../videos/Alphabets & Numbers/D/D.mp4"),
  options: ["O", "D", "P", "V"],
  correctOptionIndex: 1,
},
{
  videoUri: require("../videos/Alphabets & Numbers/D/Dangerous.mp4"),
  options: ["Safe", "Dangerous", "Careful", "Calm"],
  correctOptionIndex: 1,
},
{
  videoUri: require("../videos/Alphabets & Numbers/D/Daughter.mp4"),
  options: ["Son", "Mother", "Daughter", "Sister"],
  correctOptionIndex: 2,
},
{
  videoUri: require("../videos/Alphabets & Numbers/D/Day.mp4"),
  options: ["Night", "Week", "Month", "Day"],
  correctOptionIndex: 3,
},
{
  videoUri: require("../videos/Alphabets & Numbers/D/Deaf.mp4"),
  options: ["Blind", "Mute", "Deaf", "Lame"],
  correctOptionIndex: 2,
},
{
  videoUri: require("../videos/Alphabets & Numbers/D/December.mp4"),
  options: ["January", "March", "December", "July"],
  correctOptionIndex: 2,
},


{
  videoUri: require("../videos/Alphabets & Numbers/E/E.mp4"),
  options: ["A", "E", "I", "O"],
  correctOptionIndex: 1,
},
{
  videoUri: require("../videos/Alphabets & Numbers/E/Earn.mp4"),
  options: ["Spend", "Earn", "Lose", "Borrow"],
  correctOptionIndex: 1,
},
{
  videoUri: require("../videos/Alphabets & Numbers/E/Eat [VEB] or Food.mp4"),
  options: ["Drink", "Eat", "Cook", "Sleep"],
  correctOptionIndex: 1,
},
{
  videoUri: require("../videos/Alphabets & Numbers/E/Enemy.mp4"),
  options: ["Friend", "Ally", "Enemy", "Partner"],
  correctOptionIndex: 2,
},
{
  videoUri: require("../videos/Alphabets & Numbers/E/Evening.mp4"),
  options: ["Morning", "Afternoon", "Night", "Evening"],
  correctOptionIndex: 3,
},


{
  videoUri: require("../videos/Alphabets & Numbers/F/F.mp4"),
  options: ["A", "B", "F", "H"],
  correctOptionIndex: 2,
},
{
  videoUri: require("../videos/Alphabets & Numbers/F/Family.mp4"),
  options: ["Friends", "Family", "Neighbors", "Relatives"],
  correctOptionIndex: 1,
},
{
  videoUri: require("../videos/Alphabets & Numbers/F/Father.mp4"),
  options: ["Father", "Mother", "Uncle", "Grandfather"],
  correctOptionIndex: 0,
},
{
  videoUri: require("../videos/Alphabets & Numbers/F/February.mp4"),
  options: ["January", "March", "February", "April"],
  correctOptionIndex: 2,
},
{
  videoUri: require("../videos/Alphabets & Numbers/F/Feed.mp4"),
  options: ["Eat", "Feed", "Cook", "Sleep"],
  correctOptionIndex: 1,
},
{
  videoUri: require("../videos/Alphabets & Numbers/F/Follow.mp4"),
  options: ["Ignore", "Follow", "Lead", "Avoid"],
  correctOptionIndex: 1,
},
{
  videoUri: require("../videos/Alphabets & Numbers/F/Friday.mp4"),
  options: ["Monday", "Friday", "Sunday", "Wednesday"],
  correctOptionIndex: 1,
},
{
  videoUri: require("../videos/Alphabets & Numbers/F/Friend.mp4"),
  options: ["Enemy", "Stranger", "Friend", "Neighbor"],
  correctOptionIndex: 2,
},
{
  videoUri: require("../videos/Alphabets & Numbers/F/Fry.mp4"),
  options: ["Boil", "Steam", "Fry", "Bake"],
  correctOptionIndex: 2,
},


{
  videoUri: require("../videos/Alphabets & Numbers/G/G.mp4"),
  options: ["Boil", "Steam", "Fry", "Bake"],
  correctOptionIndex: 2,
},
{
  videoUri: require("../videos/Alphabets & Numbers/G/Get.mp4"),
  options: ["Boil", "Steam", "Fry", "Bake"],
  correctOptionIndex: 2,
},
{
  videoUri: require("../videos/Alphabets & Numbers/G/Girl.mp4"),
  options: ["Boil", "Steam", "Fry", "Bake"],
  correctOptionIndex: 2,
},
{
  videoUri: require("../videos/Alphabets & Numbers/G/Google.mp4"),
  options: ["Boil", "Steam", "Fry", "Bake"],
  correctOptionIndex: 2,
},
{
  videoUri: require("../videos/Alphabets & Numbers/G/Granddaughter.mp4"),
  options: ["Boil", "Steam", "Fry", "Bake"],
  correctOptionIndex: 2,
},
{
  videoUri: require("../videos/Alphabets & Numbers/G/Grandfather.mp4"),
  options: ["Boil", "Steam", "Fry", "Bake"],
  correctOptionIndex: 2,
},
{
  videoUri: require("../videos/Alphabets & Numbers/G/Grandmother.mp4"),
  options: ["Boil", "Steam", "Fry", "Bake"],
  correctOptionIndex: 2,
},
{
  videoUri: require("../videos/Alphabets & Numbers/G/Grandson.mp4"),
  options: ["Boil", "Steam", "Fry", "Bake"],
  correctOptionIndex: 2,
},
{
  videoUri: require("../videos/Alphabets & Numbers/G/Group.mp4"),
  options: ["Boil", "Steam", "Fry", "Bake"],
  correctOptionIndex: 2,
},
{
  videoUri: require("../videos/Alphabets & Numbers/G/Guest.mp4"),
  options: ["Boil", "Steam", "Fry", "Bake"],
  correctOptionIndex: 2,
},


{
  videoUri: require("../videos/Alphabets & Numbers/H/H.mp4"),
  options: ["A", "B", "H", "G"],
  correctOptionIndex: 2,
},
{
  videoUri: require("../videos/Alphabets & Numbers/H/Handicapped.mp4"),
  options: ["Healthy", "Handicapped", "Strong", "Fit"],
  correctOptionIndex: 1,
},
{
  videoUri: require("../videos/Alphabets & Numbers/H/Hello.mp4"),
  options: ["Goodbye", "Hello", "Thanks", "Sorry"],
  correctOptionIndex: 1,
},
{
  videoUri: require("../videos/Alphabets & Numbers/H/Hide.mp4"),
  options: ["Show", "Search", "Hide", "Find"],
  correctOptionIndex: 2,
},
{
  videoUri: require("../videos/Alphabets & Numbers/H/Holiday.mp4"),
  options: ["Work", "Holiday", "Meeting", "Exam"],
  correctOptionIndex: 1,
},
{
  videoUri: require("../videos/Alphabets & Numbers/H/Home or House.mp4"),
  options: ["Office", "Hotel", "Home", "Market"],
  correctOptionIndex: 2,
},
{
  videoUri: require("../videos/Alphabets & Numbers/H/How Many.mp4"),
  options: ["Where", "What", "How Many", "Who"],
  correctOptionIndex: 2,
},
{
  videoUri: require("../videos/Alphabets & Numbers/H/How.mp4"),
  options: ["Where", "When", "What", "How"],
  correctOptionIndex: 3,
},
{
  videoUri: require("../videos/Alphabets & Numbers/H/Hungry.mp4"),
  options: ["Sleepy", "Thirsty", "Hungry", "Tired"],
  correctOptionIndex: 2,
},
{
  videoUri: require("../videos/Alphabets & Numbers/H/Hurt.mp4"),
  options: ["Happy", "Hurt", "Fine", "Strong"],
  correctOptionIndex: 1,
},


{
  videoUri: require("../videos/Alphabets & Numbers/I/I (Person).mp4"),
  options: ["You", "I", "He", "She"],
  correctOptionIndex: 1,
},
{
  videoUri: require("../videos/Alphabets & Numbers/I/If.mp4"),
  options: ["Then", "If", "Because", "When"],
  correctOptionIndex: 1,
},
{
  videoUri: require("../videos/Alphabets & Numbers/I/Important.mp4"),
  options: ["Trivial", "Important", "Unnecessary", "Common"],
  correctOptionIndex: 1,
},


{
  videoUri: require("../videos/Alphabets & Numbers/J/J.mp4"),
  options: ["A", "J", "M", "Z"],
  correctOptionIndex: 1,
},
{
  videoUri: require("../videos/Alphabets & Numbers/J/January.mp4"),
  options: ["March", "April", "January", "June"],
  correctOptionIndex: 2,
},
{
  videoUri: require("../videos/Alphabets & Numbers/J/July.mp4"),
  options: ["July", "September", "November", "December"],
  correctOptionIndex: 0,
},
{
  videoUri: require("../videos/Alphabets & Numbers/J/June.mp4"),
  options: ["August", "June", "October", "May"],
  correctOptionIndex: 1,
},


{
  videoUri: require("../videos/Alphabets & Numbers/K/K.mp4"),
  options: ["A", "B", "K", "M"],
  correctOptionIndex: 2,
},
{
  videoUri: require("../videos/Alphabets & Numbers/K/Kill or Murder.mp4"),
  options: ["Save", "Protect", "Kill", "Help"],
  correctOptionIndex: 2,
},


{
  videoUri: require("../videos/Alphabets & Numbers/L/L.mp4"),
  options: ["J", "L", "M", "N"],
  correctOptionIndex: 1,
},
{
  videoUri: require("../videos/Alphabets & Numbers/L/Laptop.mp4"),
  options: ["Tablet", "Desktop", "Laptop", "Mobile"],
  correctOptionIndex: 2,
},
{
  videoUri: require("../videos/Alphabets & Numbers/L/Lend.mp4"),
  options: ["Borrow", "Give", "Lend", "Take"],
  correctOptionIndex: 2,
},



{
  videoUri: require("../videos/Alphabets & Numbers/M/M.mp4"),
  options: ["A", "B", "M", "Z"],
  correctOptionIndex: 2,
},
{
  videoUri: require("../videos/Alphabets & Numbers/M/Man.mp4"),
  options: ["Woman", "Boy", "Man", "Girl"],
  correctOptionIndex: 2,
},
{
  videoUri: require("../videos/Alphabets & Numbers/M/March.mp4"),
  options: ["January", "March", "December", "July"],
  correctOptionIndex: 1,
},
{
  videoUri: require("../videos/Alphabets & Numbers/M/May.mp4"),
  options: ["April", "June", "May", "July"],
  correctOptionIndex: 2,
},
{
  videoUri: require("../videos/Alphabets & Numbers/M/Me.mp4"),
  options: ["You", "Me", "They", "We"],
  correctOptionIndex: 1,
},
{
  videoUri: require("../videos/Alphabets & Numbers/M/Meet.mp4"),
  options: ["Ignore", "Meet", "Avoid", "Forget"],
  correctOptionIndex: 1,
},
{
  videoUri: require("../videos/Alphabets & Numbers/M/Mobile.mp4"),
  options: ["Laptop", "Tablet", "Mobile", "Computer"],
  correctOptionIndex: 2,
},
{
  videoUri: require("../videos/Alphabets & Numbers/M/Monday.mp4"),
  options: ["Sunday", "Tuesday", "Monday", "Friday"],
  correctOptionIndex: 2,
},
{
  videoUri: require("../videos/Alphabets & Numbers/M/Month.mp4"),
  options: ["Week", "Year", "Month", "Day"],
  correctOptionIndex: 2,
},
{
  videoUri: require("../videos/Alphabets & Numbers/M/Morning.mp4"),
  options: ["Evening", "Night", "Morning", "Afternoon"],
  correctOptionIndex: 2,
},
{
  videoUri: require("../videos/Alphabets & Numbers/M/Mother.mp4"),
  options: ["Father", "Mother", "Brother", "Sister"],
  correctOptionIndex: 1,
},
{
  videoUri: require("../videos/Alphabets & Numbers/M/Mother-In-Law.mp4"),
  options: ["Father-In-Law", "Mother-In-Law", "Sister-In-Law", "Uncle"],
  correctOptionIndex: 1,
},
  ],

  "Basic Greetings & Common Phrases": [
    {
      videoUri: require("../videos/Basic Greetings & Common Phrases/Afternoon.mp4"),
      options: ["Night", "Good", "Thank No", "Afternoon"],
      correctOptionIndex: 3,
    },
    {
      videoUri: require("../videos/Basic Greetings & Common Phrases/Sorry.mp4"),
      options: ["Sorry", "Good Night", "See You", "Welcome"],
      correctOptionIndex: 0,
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


  "Colors & Basic Adjectives": [
    {
      videoUri: require("../videos/Colors & Basic Adjectives/Blue.mp4"),
      options: ["Red", "Blue", "Purple", "Green"],
      correctOptionIndex: 1,
    },
   {
      videoUri: require("../videos/Colors & Basic Adjectives/Fast.mp4"),
      options: ["Easy", "Sad", "Fast", "Small"],
      correctOptionIndex: 2,
    },
{
      videoUri: require("../videos/Colors & Basic Adjectives/Big.mp4"),
      options: ["Big", "Hot", "Cold", "Slow"],
      correctOptionIndex: 0,
    },
{
      videoUri: require("../videos/Colors & Basic Adjectives/Green.mp4"),
      options: ["Red", "Yellow", "Purple", "Green"],
      correctOptionIndex: 3,
    },
{
      videoUri: require("../videos/Colors & Basic Adjectives/Difficult.mp4"),
      options: ["Happy", "Difficult", "Slow", "Easy"],
      correctOptionIndex: 1,
    },
{
      videoUri: require("../videos/Colors & Basic Adjectives/Hot.mp4"),
      options: ["Hot", "Slow", "Sad", "Cold"],
      correctOptionIndex: 0,
    },
{
      videoUri: require("../videos/Colors & Basic Adjectives/Cold.mp4"),
      options: ["Small", "Cold", "Big", "Happy"],
      correctOptionIndex: 1,
    },
{
      videoUri: require("../videos/Colors & Basic Adjectives/Easy.mp4"),
      options: ["Hot", "Happy", "Sad", "Easy"],
      correctOptionIndex: 3,
    },
{
      videoUri: require("../videos/Colors & Basic Adjectives/Happy.mp4"),
      options: ["Happy", "Difficult", "Slow", "Easy"],
      correctOptionIndex: 0,
    },
{
      videoUri: require("../videos/Colors & Basic Adjectives/Purple.mp4"),
      options: ["Red", "Blue", "Purple", "Green"],
      correctOptionIndex: 2,
    },
{
      videoUri: require("../videos/Colors & Basic Adjectives/Red.mp4"),
      options: ["Red", "Blue", "Purple", "Green"],
      correctOptionIndex: 0,
    },
{
      videoUri: require("../videos/Colors & Basic Adjectives/Sad.mp4"),
      options: ["Happy", "Difficult", "Sad", "Easy"],
      correctOptionIndex: 1,
    },
{
      videoUri: require("../videos/Colors & Basic Adjectives/Slow.mp4"),
      options: ["Slow", "Big", "Hot", "Difficult"],
      correctOptionIndex: 0,
    },
{
      videoUri: require("../videos/Colors & Basic Adjectives/Small.mp4"),
      options: ["Cold", "Small", "Fast", "Sad"],
      correctOptionIndex: 1,
    },
{
      videoUri: require("../videos/Colors & Basic Adjectives/Yellow.mp4"),
      options: ["Yellow", "Blue", "Purple", "Green"],
      correctOptionIndex: 0,
    },
  ],


  "Days, Months & Time": [
    {
      videoUri: require("../videos/Days, Months & Time/April.mp4"),
      options: ["May", "June", "September", "April"],
      correctOptionIndex: 3,
    },
    {
      videoUri: require("../videos/Days, Months & Time/August.mp4"),
      options: ["April", "March", "August", "July"],
      correctOptionIndex: 2,
    },
     {
      videoUri: require("../videos/Days, Months & Time/February.mp4"),
      options: ["February", "June", "September", "July"],
      correctOptionIndex: 0,
    }, {
      videoUri: require("../videos/Days, Months & Time/Friday.mp4"),
      options: ["Monday", "Friday", "Saturday", "Tuesday"],
      correctOptionIndex: 1,
    }, {
      videoUri: require("../videos/Days, Months & Time/January.mp4"),
      options: ["May", "June", "September", "January"],
      correctOptionIndex: 3,
    }, {
      videoUri: require("../videos/Days, Months & Time/July.mp4"),
      options: ["July", "August", "September", "April"],
      correctOptionIndex: 0,
    }, {
      videoUri: require("../videos/Days, Months & Time/June.mp4"),
      options: ["May", "June", "January", "March"],
      correctOptionIndex: 1,
    }, {
      videoUri: require("../videos/Days, Months & Time/March.mp4"),
      options: ["August", "June", "March", "April"],
      correctOptionIndex: 2,
    }, {
      videoUri: require("../videos/Days, Months & Time/May.mp4"),
      options: ["May", "July", "September", "August"],
      correctOptionIndex: 0,
    }, {
      videoUri: require("../videos/Days, Months & Time/Monday.mp4"),
      options: ["Monday", "Friday", "Saturday", "Tuesday"],
      correctOptionIndex: 0,
    }, 
    {
      videoUri: require("../videos/Days, Months & Time/Saturday (1).mp4"),
      options: ["Sunday", "Thursday", "Saturday", "Tuesday"],
      correctOptionIndex: 2,
    }, 
    {
      videoUri: require("../videos/Days, Months & Time/September.mp4"),
      options: ["May", "June", "September", "April"],
      correctOptionIndex: 2,
    }, 
    {
      videoUri: require("../videos/Days, Months & Time/Thursday.mp4"),
      options: ["Thursday", "Friday", "Saturday", "Tuesday"],
      correctOptionIndex: 0,
    }, 
    {
      videoUri: require("../videos/Days, Months & Time/Tuesday.mp4"),
      options:  ["Monday", "Thursday", "Sunday", "Tuesday"],
      correctOptionIndex: 3,
    }, 
    {
      videoUri: require("../videos/Days, Months & Time/Wednesday.mp4"),
      options: ["Thursday", "Wednesday", "Saturday", "Monday"],
      correctOptionIndex: 1,
    }, 

  ],


  "Family & Relationships": [
  {
    videoUri: require("../videos/Family & Relationships/Mother.mp4"),
    options: ["Father", "Sister", "Mother", "Daughter"],
    correctOptionIndex: 2,
  },
  {
    videoUri: require("../videos/Family & Relationships/Father.mp4"),
    options: ["Uncle", "Brother", "Father", "Grandfather"],
    correctOptionIndex: 2,
  },
  {
    videoUri: require("../videos/Family & Relationships/Husband.mp4"),
    options: ["Wife", "Brother", "Husband", "Friend"],
    correctOptionIndex: 2,
  },
  {
    videoUri: require("../videos/Family & Relationships/Wife.mp4"),
    options: ["Sister", "Mother", "Wife", "Daughter"],
    correctOptionIndex: 2,
  },
  ],

  "Sentence Formation & Grammar Basics": [
  {
    videoUri: require("../videos/Sentence Formation & Grammar Basics/They.mp4"),
    options: ["We", "I", "They", "You"],
    correctOptionIndex: 2,
  },
  {
    videoUri: require("../videos/Sentence Formation & Grammar Basics/Without.mp4"),
    options: ["With", "Without", "For", "By"],
    correctOptionIndex: 1,
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
