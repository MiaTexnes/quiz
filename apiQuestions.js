// Fetch questions from Open Trivia Database API
async function fetchQuestions() {
  try {
    const response = await fetch('https://opentdb.com/api.php?amount=30&difficulty=medium&type=multiple');
    const data = await response.json();

    if (data.response_code === 0) {
      // Format the questions to match your current structure
      const formattedQuestions = data.results.map(question => {
        // Combine correct answer with incorrect answers
        const options = [...question.incorrect_answers, question.correct_answer];

        return {
          question: decodeHTML(question.question),
          options: options.map(option => decodeHTML(option)),
          correctAnswer: decodeHTML(question.correct_answer),
          category: question.category
        };
      });

      return formattedQuestions;
    } else {
      console.error("API returned an error:", data);
      return [];
    }
  } catch (error) {
    console.error("Failed to fetch questions:", error);
    return [];
  }
}

// Helper function to decode HTML entities
function decodeHTML(html) {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

export { fetchQuestions };