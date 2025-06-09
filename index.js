import { fetchQuestions } from "./apiQuestions.js";

// Function to shuffle the questions array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", async () => {
  // Display loading indicator
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = '<div class="loading">Loading questions...</div>';

  // Fetch questions from API
  const questions = await fetchQuestions();

  if (questions.length === 0) {
    quizContainer.innerHTML =
      '<div class="error">Failed to load questions. Please try again later.</div>';
    return;
  }

  // Clear loading indicator
  quizContainer.innerHTML = "";

  // Shuffle the questions
  shuffleArray(questions);

  // Shuffle options for each question and update correctAnswer
  questions.forEach((q) => {
    // Store the correct answer before shuffling
    const correct = q.correctAnswer;
    // Shuffle options
    shuffleArray(q.options);
    // Update correctAnswer to the new shuffled value
    q.correctAnswer = q.options.find((opt) => opt === correct);
  });

  // Select all questions (or limit to 30 if more)
  const selectedQuestions =
    questions.length > 30 ? questions.slice(0, 30) : questions;

  // Display the questions on the webpage
  selectedQuestions.forEach((questionObj, index) => {
    // Create container for each question
    const questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    questionContainer.dataset.questionNumber = index + 1;

    // Add category if available
    if (questionObj.category) {
      const categoryText = document.createElement("div");
      categoryText.className = "category-text";
      categoryText.textContent = questionObj.category;
      questionContainer.appendChild(categoryText);
    }

    // Create and add the question text
    const questionText = document.createElement("div");
    questionText.className = "question-text";
    questionText.textContent = `${index + 1}. ${questionObj.question}`;
    questionContainer.appendChild(questionText);

    // Create a container for all options for this question
    const optionsContainer = document.createElement("div");
    optionsContainer.className = "options-container";

    // Create and add each option as a radio button
    questionObj.options.forEach((option, optionIndex) => {
      const optionContainer = document.createElement("div");
      optionContainer.className = "option";

      // Create radio button
      const radioButton = document.createElement("input");
      radioButton.type = "radio";
      radioButton.name = `question-${index}`;
      radioButton.id = `question-${index}-option-${optionIndex}`;
      radioButton.value = option;

      // Create label for the radio button
      const label = document.createElement("label");
      label.htmlFor = `question-${index}-option-${optionIndex}`;
      label.textContent = option;

      // Add radio button and label to option container
      optionContainer.appendChild(radioButton);
      optionContainer.appendChild(label);

      // Add option to options container
      optionsContainer.appendChild(optionContainer);
    });

    // Add the options container to the question container
    questionContainer.appendChild(optionsContainer);

    // Add the question container to the quiz container
    quizContainer.appendChild(questionContainer);
  });

  // Add a submit button to check answers
  const submitButton = document.createElement("button");
  submitButton.textContent = "Check your answers";
  submitButton.className = "submit-button";

  // Find button container and add submit-button
  const buttonsContainer = document.getElementById("buttons-container");
  buttonsContainer.appendChild(submitButton);

  // Create an element to display validation messages and add it to the DOM immediately
  // This ensures it doesn't cause layout shift when populated
  const validationMessage = document.createElement("div");
  validationMessage.className = "validation-message";
  validationMessage.style.minHeight = "30px"; // Reserve space to prevent layout shift
  buttonsContainer.appendChild(validationMessage);

  // Add event listener to check answers when the button is clicked
  submitButton.addEventListener("click", () => {
    // Clear previous validation messages
    validationMessage.textContent = "";
    validationMessage.className = "validation-message";

    // Reset any previously marked unanswered questions
    document
      .querySelectorAll(".question-container.unanswered")
      .forEach((container) => {
        container.classList.remove("unanswered");
      });

    // Check if all questions are answered
    const unansweredQuestions = [];

    selectedQuestions.forEach((questionObj, index) => {
      const selectedOption = document.querySelector(
        `input[name="question-${index}"]:checked`
      );

      if (!selectedOption) {
        unansweredQuestions.push(index + 1);
        // Mark the question container as unanswered
        const questionContainer = document.querySelector(
          `.question-container[data-question-number="${index + 1}"]`
        );
        if (questionContainer) {
          questionContainer.classList.add("unanswered");
        }
      }
    });

    // If there are unanswered questions, show error message and stop
    if (unansweredQuestions.length > 0) {
      validationMessage.textContent = `Please answer all questions before submitting. Missing answers for questions: ${unansweredQuestions.join(
        ", "
      )}`;
      validationMessage.className = "validation-message error";

      // Scroll to the first unanswered question
      const firstUnanswered = document.querySelector(
        `.question-container.unanswered`
      );
      if (firstUnanswered) {
        firstUnanswered.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    // All questions answered, proceed with checking
    let score = 0;

    selectedQuestions.forEach((questionObj, index) => {
      const selectedOption = document.querySelector(
        `input[name="question-${index}"]:checked`
      );

      if (
        selectedOption &&
        selectedOption.value === questionObj.correctAnswer
      ) {
        score++;
        // Highlight correct answer
        selectedOption.parentElement.classList.add("correct-answer");
      } else {
        // Highlight wrong answer
        selectedOption.parentElement.classList.add("wrong-answer");

        // Find and highlight the correct answer
        const options = document.querySelectorAll(
          `input[name="question-${index}"]`
        );
        options.forEach((option) => {
          if (option.value === questionObj.correctAnswer) {
            option.parentElement.classList.add("correct-answer");
          }
        });
      }
    });

    // Display score - Add it to the score-container element instead
    const scoreContainer = document.querySelector(".score-container");
    scoreContainer.innerHTML = ""; // Clear any previous scores

    const scoreDisplay = document.createElement("div");
    scoreDisplay.textContent = `Your Score: ${score} av ${selectedQuestions.length}`;
    scoreDisplay.className = "score-display";

    // Add score to the score container (at the bottom)
    scoreContainer.appendChild(scoreDisplay);

    // Disable submit button after checking answers
    submitButton.disabled = true;

    // Scroll to the score
    scoreContainer.scrollIntoView({ behavior: "smooth" });
  });

  // Add event listeners to buttons
  document.getElementById("print-button").addEventListener("click", () => {
    window.print();
  });

  document.getElementById("fasit-button").addEventListener("click", () => {
    openFasitWindow(selectedQuestions);
  });
});

// Function to open fasit.html with the correct answers
function openFasitWindow(selectedQuestions) {
  const fasitData = selectedQuestions.map((q, index) => ({
    number: index + 1,
    question: q.question,
    correctAnswer: q.correctAnswer,
  }));

  const encodedFasitData = encodeURIComponent(JSON.stringify(fasitData));
  window.open(`fasit.html?data=${encodedFasitData}`, "_blank");
}
