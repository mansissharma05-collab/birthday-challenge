const HIS_NAME = "Kammo";
const FAILS_TO_UNLOCK = 12;
const STORAGE_KEY = "kammo_letter_unlocked_v2";

const taunts = [
  "You look confident. That’s adorable.",
  "Wrong. But I love the effort.",
  "So close… (no you weren’t).",
  "Try again, birthday boy 😌",
  "The audacity of clicking that.",
  "You really thought… huh?",
  "Mansi says: denied.",
  "Your ego is loading… please wait.",
  "Skill issue.",
  "Again??? determination or delusion?",
];

const loses = [
  "Wrong button. Like… impressively wrong.",
  "Incorrect. But nice try, cutie.",
  "Nope. Your luck is blocked.",
  "Wrong. You clicked too confidently.",
  "Wrong. You hesitated.",
  "Wrong. Mansi said no.",
  "Wrong. You’re not worthy (yet).",
  "Wrong. Try begging.",
];

function qs(id){ return document.getElementById(id); }
function clamp(n, min, max){ return Math.max(min, Math.min(max, n)); }

function isUnlocked(){
  return localStorage.getItem(STORAGE_KEY) === "true";
}
function setUnlocked(v){
  localStorage.setItem(STORAGE_KEY, v ? "true" : "false");
}

/* confetti */
function confettiBurst(){
  const duration = 1200;
  const end = Date.now() + duration;
  const colors = ["#ff5fa2", "#ffd6e7", "#d8f3dc", "#ffffff"];

  const interval = set
