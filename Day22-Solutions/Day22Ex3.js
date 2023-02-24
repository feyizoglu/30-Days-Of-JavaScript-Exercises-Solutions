const asabenehChallenges2020 = {
  description: "Asabeneh Yetayeh challenges",
  challengeTitle: "Asabeneh Yetayeh challenges",
  challengeSubtitle: "30DaysOfJavaScript Challenge",
  challengeYear: 2020,
  keywords: [
    "HTML",
    "HTML5",
    "CSS",
    "CSS3",
    "JS",
    "JavaScript",
    "ES6",
    "Promise",
    "async await",
    "Database",
    "React",
    "React Hooks",
    "Context API",
    "React Router",
    "Web Storage",
    "localStorage",
    "sessionStorage",
    "Redux",
    "Node",
    "MongoDB",
    "SQL",
    "API",
    "DOM",
    "data science",
    "MERN",
    "Python",
    "Flask",
    "Statistics",
    "Linear Algebra",
    "Numpy",
    "Pandas",
    "Scipy",
    "Scikit-learn",
    "Visualization",
    "D3.js",
  ],
  author: {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    titles: [
      ["🌱", "Educator"],
      ["💻", "Programmer"],
      ["🌐", "Developer"],
      ["🔥", "Motivator"],
      ["📔", "Content Creator"],
    ],
    qualifications: [
      "MSc. Computer Science Ongoing",
      "BSc. Information and Communication Eng.",
      "MSc. Food Technology",
      "BSc.Food Technology",
    ],
    socialLinks: [
      {
        social: "LinkedIn",
        url: "https://www.linkedin.com/in/asabeneh/",
        fontawesomeIcon: '<i class="fab fa-linkedin">',
      },
      {
        social: "Twitter",
        url: "https://twitter.com/Asabeneh",
        fontawesomeIcon: '<i class="fab fa-twitter-square"></i>',
      },
      {
        social: "Github",
        fontawesomeIcon: '<i class="fab fa-github-square"></i>',
        url: "https://github.com/Asabeneh",
      },
      {
        social: "DEV.to",
        fontawesomeIcon: "",
        url: "https://dev.to/asabeneh",
      },
    ],
    skills: [
      "Web Development",
      "Data Analysis",
      "Data Visualization",
      "Programming",
      "Databases",
      "Developing API",
    ],
    bio: "I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.",
  },
  challenges: [
    {
      name: "30 Days Of Python",
      topics: [
        "Python",
        "Flask",
        "Numpy",
        "Pandas",
        "Statistics",
        "API",
        "MongoDB",
      ],
      days: 30,
      status: "Done",
      questions: "Above 500",
      projects: "Two",
      interviewQns: "",
      githubUrl: "https://github.com/Asabeneh/30-Days-Of-Python",
    },
    {
      name: "30 Days Of JavaScript",
      topics: ["JavaScript", "ES6", "Promise", "async and await", "DOM"],
      days: 30,
      status: "Ongoing",
      questions: "Above 500",
      projects: "About 30",
      interviewQns: "",
      githubUrl: "https://github.com/Asabeneh/30DaysOfJavaScript",
    },
    {
      name: "30 Days Of HTML & CSS",
      topics: ["CSS", "Flex", "Grid", "CSS Animation"],
      days: 30,
      status: "Coming",
      questions: "Above 500",
      projects: "Two",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of React",
      topics: [
        "React",
        "React Router",
        "Redux",
        "Context API",
        "React Hooks",
        "MERN",
      ],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of ReactNative",
      topics: ["ReactNative", "Redux"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "Two",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Fullstack",
      topics: ["React", "Redux", "MongoDB", "Node", "MERN"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Data Analysis",
      topics: ["Python", "Numpy", "Pandas", "Statistics", "Visualization"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Machine Learning",
      topics: [
        "Python",
        "Numpy",
        "Pandas",
        "Scikit-learn",
        "Scipy",
        "Linear Algebra",
        "Statistics",
        "Visualization",
      ],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
  ],
};

let body = document.body;
let div = document.createElement("div");
body.appendChild(div);

// Organizing Body

body.style.textAlign = "center";
body.style.fontFamily = "sans-serif";

//Organizing H1
let h1 = document.createElement("h1");
div.appendChild(h1);
h1.innerHTML = `${asabenehChallenges2020.challengeTitle} in <span>${asabenehChallenges2020.challengeYear}</span>`;
let span = document.querySelector("span");
span.style.fontSize = "60px";

let color;
const randColor = () => {
  let random1 = Math.floor(Math.random() * 255);
  let random2 = Math.floor(Math.random() * 255);
  let random3 = Math.floor(Math.random() * 255);
  color = `rgb(${random1},${random2},${random3})`;
  span.style.color = color;
};
setInterval(randColor, 1000);

//Organizing h2

let h2 = document.createElement("h2");
h2.innerHTML = asabenehChallenges2020.challengeSubtitle;
div.appendChild(h2);
h2.style.textDecoration = "underline";
h2.style.fontWeight = "normal";

//adding and organizing p

let p = document.createElement("p");
div.appendChild(p);
p.style.width = "300px";
p.style.margin = "0 auto";
const context = () => {
  p.textContent = Date();
};

const randTime = () => {
  let random1 = Math.floor(Math.random() * 255);
  let random2 = Math.floor(Math.random() * 255);
  let random3 = Math.floor(Math.random() * 255);
  color = `rgb(${random1},${random2},${random3})`;
  p.style.backgroundColor = color;
};
setInterval(randTime, 1000);
setInterval(context, 1000);

//Organizing list items
let challengesLength = asabenehChallenges2020.challenges.length;

for (let i = 0; i < challengesLength; i++) {
  let sc_i = document.createElement("section");
  body.appendChild(sc_i);
  let dv1 = document.createElement("div");
  let dv2 = document.createElement("details");
  let dv3 = document.createElement("div");
  sc_i.appendChild(dv1);
  sc_i.appendChild(dv2);
  sc_i.appendChild(dv3);
  dv1.textContent = asabenehChallenges2020.challenges[i].name;
  let sm = document.createElement("summary");
  dv2.appendChild(sm);
  sm.textContent = asabenehChallenges2020.challenges[i].name.replace(
    "30 Days Of ",
    ""
  );
  let topicsLength = asabenehChallenges2020.challenges[i].topics.length;
  for (let k = 0; k < topicsLength; k++) {
    let p_k = document.createElement("p");
    p_k.textContent = asabenehChallenges2020.challenges[i].topics[k];
    dv2.appendChild(p_k);
  }
  dv3.textContent = asabenehChallenges2020.challenges[i].status;
  sc_i.style.cssText = `
    width: 800px;
    margin: 5px auto;
    min-height: 40px;
    padding: 20px 0 0 0; 
    `;

  if (dv3.textContent.toLowerCase().includes("done")) {
    sc_i.style.backgroundColor = "#47cc6b";
  } else if (dv3.textContent.toLowerCase().includes("ongoing")) {
    sc_i.style.backgroundColor = "#ebeb44";
  } else {
    sc_i.style.backgroundColor = "#cc6063";
  }
  dv1.style.cssText = `  width: 35%;
  height: 2100%;
  text-align: left; 
  display: inline-block;
 
  `;
  dv2.style.cssText = `  width: 35%;
  display: inline-block;
  `;
  dv3.style.cssText = `  width: 30%;
  text-align: right; 
  display: inline-block;
  `;
}
