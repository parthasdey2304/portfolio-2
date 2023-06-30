const words = ["developer", "engineer", "graphic designer"];
const typingSpeed = 100; // Adjust typing speed (in milliseconds)
const pauseBetweenWords = 1000; // Pause time between words (in milliseconds)

function typeText(text, element) {
  return new Promise(resolve => {
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(intervalId);
        resolve();
      }
    }, typingSpeed);
  });
}

async function playTypingAnimation() {
  const typingElement = document.getElementById("typing-animation");
  for (let i = 0; i < words.length; i++) {
    typingElement.textContent = "";
    await typeText(words[i], typingElement);
    await sleep(pauseBetweenWords);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Start the typing animation
playTypingAnimation().then(() => {
  console.log('Animation complete');
});
