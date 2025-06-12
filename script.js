// Newsletter Form Validation
const newsletterForm = document.getElementById('newsletter-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');

newsletterForm.addEventListener('submit', (event) => {
    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameError.classList.add('show');
        isValid = false;
    } else {
        nameError.classList.remove('show');
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.classList.add('show');
        isValid = false;
    } else {
        emailError.classList.remove('show');
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    } else {
        alert("Thanks for subscribing to The Beauty Handbook!");
    }
});

nameInput.addEventListener('input', () => {
    nameError.classList.remove('show');
});

emailInput.addEventListener('input', () => {
    emailError.classList.remove('show');
});

// Makeup Quiz
const quizQuestions = [
    {
        question: "Which makeup product is used to even out skin tone and provide a base for other makeup?",
        answers: ["Concealer", "Foundation", "Blush", "Highlighter"],
        correct: 1 // Index of the correct answer (Foundation)
    },
    {
        question: "What is the primary purpose of mascara?",
        answers: ["To define eyebrows", "To add color to eyelids", "To lengthen and volumize eyelashes", "To create a winged eyeliner look"],
        correct: 2 // Index of the correct answer (To lengthen and volumize eyelashes)
    },
    {
        question: "Which tool is best for applying loose powder?",
        answers: ["Beauty blender", "Flat foundation brush", "Powder brush", "Angled eyebrow brush"],
        correct: 2 // Index of the correct answer (Powder brush)
    },
    {
        question: "What does 'setting spray' do in makeup?",
        answers: ["Adds shimmer to the face", "Hydrates the skin", "Helps makeup last longer and prevents smudging", "Removes makeup"],
        correct: 2 // Index of the correct answer (Helps makeup last longer and prevents smudging)
    },
    {
        question: "Which of these is typically applied to the apples of the cheeks for a pop of color?",
        answers: ["Bronzer", "Highlighter", "Concealer", "Blush"],
        correct: 3 // Index of the correct answer (Blush)
    }
];

let currentQuestionIndex = 0;
let score = 0;
let quizAnswered = false; // Flag to prevent multiple answers per question

const questionText = document.getElementById('question-text');
const answerButtonsContainer = document.getElementById('answer-buttons');
const feedbackText = document.getElementById('feedback-text');
const scoreDisplay = document.getElementById('score-display');
const nextQuestionButton = document.getElementById('next-question-button');
const restartQuizButton = document.getElementById('restart-quiz-button');

function displayQuestion() {
    // Reset feedback and button states
    feedbackText.textContent = '';
    answerButtonsContainer.innerHTML = '';
    nextQuestionButton.style.display = 'none'; // Hide next button until answered
    restartQuizButton.style.display = 'none'; // Hide restart button

    if (currentQuestionIndex < quizQuestions.length) {
        const question = quizQuestions[currentQuestionIndex];
        questionText.textContent = question.question;
        scoreDisplay.textContent = `Score: ${score} / ${quizQuestions.length}`;
        quizAnswered = false; // Reset flag for new question

        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.classList.add('answer-button'); // Add a class for styling
            button.addEventListener('click', () => selectAnswer(index));
            answerButtonsContainer.appendChild(button);
        });
    } else {
        // Quiz finished
        questionText.textContent = "Quiz Completed!";
        feedbackText.textContent = "Great job! You've finished the quiz.";
        scoreDisplay.textContent = `Your final score is: ${score} out of ${quizQuestions.length}`;
        nextQuestionButton.style.display = 'none';
        restartQuizButton.style.display = 'block'; // Show restart button
    }
}

function selectAnswer(selectedIndex) {
    if (quizAnswered) return; // Prevent answering multiple times

    quizAnswered = true;
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const answerButtons = answerButtonsContainer.querySelectorAll('.answer-button');

    // Disable all answer buttons
    answerButtons.forEach(button => {
        button.disabled = true;
    });

    if (selectedIndex === currentQuestion.correct) {
        feedbackText.textContent = "Correct!";
        feedbackText.style.color = '#4CAF50'; // Green color
        score++;
        answerButtons[selectedIndex].classList.add('correct');
    } else {
        feedbackText.textContent = "Incorrect. Try again!";
        feedbackText.style.color = '#f44336'; // Red color
        answerButtons[selectedIndex].classList.add('incorrect');
        // Optionally highlight the correct answer
        answerButtons[currentQuestion.correct].classList.add('correct');
    }

    scoreDisplay.textContent = `Score: ${score} / ${quizQuestions.length}`;
    nextQuestionButton.style.display = 'block'; // Show next button
}

function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
}

nextQuestionButton.addEventListener('click', nextQuestion);
restartQuizButton.addEventListener('click', restartQuiz);

// Initial display of the first question when the page loads
document.addEventListener('DOMContentLoaded', displayQuestion);

// Beauty Quotes (Local Data)
const beautyQuotes = [
    {
        content: "Beauty begins the moment you decide to be yourself.",
        author: "Coco Chanel"
    },
    {
        content: "The best thing is to look natural, but it takes makeup to look natural.",
        author: "Calvin Klein"
    },
    {
        content: "A girl should be two things: classy and fabulous.",
        author: "Coco Chanel"
    },
    {
        content: "Glamour is a state of mind.",
        author: "Dita Von Teese"
    },
    {
        content: "Makeup is about balance. When you have a strong eye, you need a softer lip.",
        author: "Bobbi Brown"
    },
    {
        content: "The most beautiful thing you can wear is confidence.",
        author: "Blake Lively"
    }
];

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const fetchQuoteButton = document.getElementById('fetch-quote-button');

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * beautyQuotes.length);
    const randomQuote = beautyQuotes[randomIndex];
    quoteText.textContent = `"${randomQuote.content}"`;
    quoteAuthor.textContent = `- ${randomQuote.author}`;
}

// Display a random quote when the page loads
document.addEventListener('DOMContentLoaded', displayRandomQuote);
// Display a new random quote when the button is clicked
fetchQuoteButton.addEventListener('click', displayRandomQuote);


// To-Do List
const todoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-todo-button');
const todoList = document.getElementById('todo-list');

function addTodoItem() {
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const listItem = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = todoText;
        listItem.appendChild(span);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-todo-button';
        deleteButton.addEventListener('click', () => {
            listItem.remove();
        });

        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
        todoInput.value = ''; // Clear the input
    }
}

addTodoButton.addEventListener('click', addTodoItem);

todoInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTodoItem();
    }
});

// Image Gallery
const imageUpload = document.getElementById('image-upload');
const uploadImageButton = document.getElementById('upload-image-button');
const imageGallery = document.getElementById('image-gallery');

uploadImageButton.addEventListener('click', () => {
    imageUpload.click(); // Trigger file input click
});

imageUpload.addEventListener('change', () => {
    const file = imageUpload.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = (event) => {
            const listItem = document.createElement('li');
            const img = document.createElement('img');
            img.src = event.target.result;
            img.alt = 'Uploaded Image';
            listItem.appendChild(img);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-image-button';
            deleteButton.addEventListener('click', () => {
                listItem.remove();
            });

            listItem.appendChild(deleteButton);
            imageGallery.appendChild(listItem);
            imageUpload.value = ''; // Clear the input
        };

        reader.readAsDataURL(file);
    }
});
