const answers_no = [
  "No",
  "Are you sure?",
  "Are you really sure??",
  "Are you really really sure???",
  "Think again?",
  "Don't believe in second chances?",
  "Why are you being so cold?",
  "Maybe we can talk about it?",
  "I am not going to ask again!",
  "Ok now this is hurting my feelings!",
  "You are now just being mean!",
  "Why are you doing this to me?",
  "Please give me a chance!",
  "I am begging you to stop!",
  "Ok, Let's just start over.."
];

const no_button = document.getElementById("no-button");
const yes_button = document.getElementById("yes-button");
const banner = document.getElementById("banner");

let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener("click", () => {
  if (clicks === 0) {
    banner.src = "public/images/no.gif";
    refreshBanner();
  }

  clicks++;

  const sizes = [40, 50, 30, 35, 45];
  size += sizes[Math.floor(Math.random() * sizes.length)];

  yes_button.style.height = `${size}px`;
  yes_button.style.width = `${size}px`;

  if (i < answers_no.length - 1) {
    no_button.innerHTML = answers_no[i];
    i++;
  } else {
    alert(answers_no[i]);
    i = 1;
    no_button.innerHTML = answers_no[0];
    yes_button.style.height = "50px";
    yes_button.style.width = "50px";
    size = 50;
  }
});

yes_button.addEventListener("click", () => {
  console.log("YES clicked");

  // Change banner
  banner.src = "public/images/yes.gif";
  refreshBanner();

  // Hide buttons
  document.querySelector(".buttons").style.display = "none";

  // Show message
  document.querySelector(".message").style.display = "block";

  // ⏱️ REDIRECT AFTER 10 SECONDS (NO MUSIC HERE)
  setTimeout(() => {
    console.log("Redirecting to final page...");
    window.location.href = "../final/index.html";
  }, 3000);
});

function refreshBanner() {
  const src = banner.src;
  banner.src = "";
  banner.src = src;
}
