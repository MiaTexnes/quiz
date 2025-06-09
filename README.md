# Quiz Application

A responsive web-based quiz application that delivers an engaging trivia experience with questions from the Open Trivia Database.

## 🚀 Demo

**[Try the Live Quiz](https://quiz-mia.netlify.app/)**

## 📋 Overview

This project is a modern, interactive quiz application that fetches multiple-choice questions from the Open Trivia Database API. Users can test their knowledge across various topics with randomized questions and receive immediate feedback on their performance.

## ✨ Features

- **🔄 Dynamic Content**: Real-time question fetching from Open Trivia Database API
- **🎲 Randomized Experience**: Questions and answer options are shuffled for variety
- **📱 Responsive Design**: Clean, user-friendly interface that works on all devices
- **✅ Real-Time Validation**: Highlights unanswered questions and prevents incomplete submissions
- **⚡ Immediate Feedback**: Visual indicators show correct and incorrect answers after submission
- **📄 Answer Key**: Dedicated page displays all correct answers via "Show answers" button
- **🖨️ Print Support**: Optimized formatting for printing quiz results
- **♿ Accessibility**: Clear visual indicators and intuitive navigation

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Responsive styling and animations
- **JavaScript (ES6+)** - Modern JavaScript features and functionality
- **Fetch API** - Asynchronous data retrieval
- **JSON** - Data processing and manipulation

## 🎯 How It Works

1. **Data Fetching**: Application retrieves questions from the Open Trivia Database API
2. **Question Processing**: Questions are shuffled and limited to 30 for optimal user experience
3. **Answer Randomization**: Answer options for each question are shuffled to prevent patterns
4. **User Interaction**: Users select answers using intuitive radio button interface
5. **Validation & Feedback**:
   - Unanswered questions are highlighted in red
   - Completed quizzes show color-coded correct/incorrect answers
   - Final score displays correct answers out of total questions

## 📁 File Structure

```
quiz-application/
├── index.html          # Main quiz interface
├── fasit.html          # Answer key display page
├── styles.css          # Application styling
├── index.js            # Core quiz logic and answer checking
└── apiQuestions.js     # API communication and question formatting
```

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone [https://github.com/MiaTexnes/quiz.git]
   cd quiz-application
   ```

2. **Or you can just the quiz!**

## 🌐 API Information

This application uses the [Open Trivia Database API](https://opentdb.com/) to fetch trivia questions. The API provides:

- Multiple categories of questions
- Various difficulty levels (easy)
- Multiple choice format
- No authentication required

## 🎨 Customization

The quiz can be easily customized by modifying:

- **Styling**: Update colors, fonts, and layout in `styles.css`
- **API parameters**: Modify category, difficulty, or question type on the opentdb page.

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 👤 Author

**Mia Texnes**

- Website: [miatexnes.com](https://miatexnes.com)
- GitHub: [@miatexnes](https://github.com/miatexnes)

---

⭐ If you found this project helpful, please consider giving it a star!
