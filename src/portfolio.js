/* Arun's Personal Portfolio Config */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Arun Kumar",
  title: "Hey, I'm Arun 👋",
  subTitle: emoji("Automation nerd ⚡ who loves scripting in PowerShell, Bash & Zsh. I build cool stuff for EUC and chase the future with AI."),
  resumeLink: "", // Add link later if needed
  displayGreeting: true
};

// Social Media
const socialMediaLinks = {
  github: "https://github.com/arunkumar-pu",
  linkedin: "https://linkedin.com/in/arunkumar-pu",
  gmail: "",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "PowerShell pro automating the boring stuff",
  skills: [
    emoji("⚡ Write powerful PowerShell scripts for EUC automation"),
    emoji("⚡ Build clean CLI tools with Bash, Zsh, and native tooling"),
    emoji("⚡ Experiment with AI to improve IT infrastructure workflows")
  ],
  softwareSkills: [
    { skillName: "PowerShell", fontAwesomeClassname: "fas fa-terminal" },
    { skillName: "Bash", fontAwesomeClassname: "fas fa-terminal" },
    { skillName: "Zsh", fontAwesomeClassname: "fas fa-terminal" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "VSCode", fontAwesomeClassname: "fas fa-code" }
  ],
  display: true
};

// Education
const educationInfo = {
  display: false,
  schools: []
};

// Tech Stack
const techStack = {
  viewSkillBars: false,
  experience: [],
  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: false,
  experience: []
};

// Open Source
const openSource = {
  showGithubProfile: true,
  display: true
};

// Big Projects
const bigProjects = {
  title: "Projects",
  subtitle: "Personal & experimental tools I’ve built",
  projects: [],
  display: false
};

// Achievements
const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "Some stuff I’ve earned along the way",
  achievementsCards: [],
  display: false
};

// Blogs
const blogSection = {
  title: "Blogs",
  subtitle: "I write occasionally. If there’s anything, it’ll show here.",
  displayMediumBlogs: false,
  blogs: [],
  display: false
};

// Talks
const talkSection = {
  title: "Talks",
  subtitle: emoji("Sharing is caring 💬"),
  talks: [],
  display: false
};

// Podcast
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "If I ever record something cool, it’ll be here.",
  podcast: [],
  display: false
};

// Resume
const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume",
  display: false
};

// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to collab or chat scripting? I’m down.",
  number: "",
  email_address: ""
};

// Twitter
const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
