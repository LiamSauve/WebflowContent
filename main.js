const titles = [
  // audio related
  "Composer",
  "Sound Designer",
  "Audio Designer",
  "Audio Engineer",
  "Audio Director",
  "Digital Artist",
  "Audio Artist",
  "Film Composer",
  "Musical Composer",
  "Recording Artist",
  "Musician",
  "Producer",
  // tech related
  "Programmer",
  "Software Engineer",
  "Game Developer",
  "Audio Programmer",
  "Technical Director",
  // education related
  "Educator",
  "Professor",
  "Teacher",
  "Instructor",
  // misc
  "Creative",
  "Designer",
  "Installation Artist",
  "Photographer",
  "Artist",
  "Creative",
];

var randomOrderTitles = [];
var currentIndex = 0;

function generateTitlesArray() {
  var original = [...titles];
  var newArray = [];

  while (original.length > 0) {
    let randomIndex = Math.floor(Math.random() * original.length);
    newArray.push(original.splice(randomIndex, 1)[0]);
  }

  return newArray;
}

function changeToNextText() {
  var nextString = randomOrderTitles[currentIndex];
  const title = document.querySelector("[changing-title='changing-title']");

  if (title) {
    // Stop current animations by clearing existing transitions
    title.style.transition = "none";

    // Set initial state (position lower and slightly scaled down)
    title.style.transform = "translateY(50%)";
    title.style.opacity = "0";

    // Update text
    title.textContent = nextString;

    // Trigger reflow to apply initial state immediately
    void title.offsetWidth;

    // Apply floating animation
    title.style.transition = "transform 1s ease, opacity 1s ease";
    title.style.transform = "translateY(0)";
    title.style.opacity = "1";
  }

  currentIndex++;
  if (currentIndex == randomOrderTitles.length) {
    currentIndex = 0;
  }
}

$(document).ready(function () {
  randomOrderTitles = generateTitlesArray();
  while (titles[currentIndex].includes("Composer")) {
    //
    currentIndex++;
  }

  // change text every 3 seconds
  setInterval(changeToNextText, 3000);
});
