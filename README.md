# AI Flashcards

An AI-powered flashcard web app that helps users study faster by generating high-quality question-and-answer flashcards from any topic. Users can also create their own cards manually, flip cards to review answers, and delete cards as needed.

This project demonstrates full-stack development skills, API integration, and modern React UI patterns.

---

## Features

* Generate multiple flashcards instantly from a topic using AI
* Manually add your own custom flashcards
* Flip cards to reveal answers
* Delete individual flashcards
* Clean, responsive UI built with React-Bootstrap
* Full-stack architecture with a separate frontend and backend

---

## Demo



**Live App:** https://ai-flashcards-mzbm.onrender.com/

---

## Tech Stack

### Frontend

* React
* JavaScript (ES6+)
* React-Bootstrap
* CSS
* Axios

### Backend

* Node.js
* Express.js
* OpenAI API

### Tools & Deployment

* Git & GitHub
* Render (deployment)
* Environment variables for API key security

---

## Installation & Setup

### 1. Clone the repository

git clone https://github.com/philipdemand/ai-flashcards.git
cd ai-flashcards

### 2. Install dependencies

#### Frontend

cd client
npm install

#### Backend

cd server
npm install

---

## Environment Variables

Create a `.env` file in your **server** folder and add your OpenAI API key:

OPENAI_API_KEY=your_api_key_here

For the frontend, create a `.env.local` file in the **client** folder:

REACT_APP_API_URL=http://localhost:3001

---

##  Running the App Locally

### Start the backend server

cd server
node server.js

Server runs on:

http://localhost:3001

### Start the frontend

cd client
npm start

App runs on:

http://localhost:3000

---

## Example Usage

1. Enter a topic like `Photosynthesis`
2. Click **Generate**
3. Receive multiple AI-generated flashcards
4. Click a card to flip between question and answer
5. Delete cards as needed

---

## Future Improvements

* Decks and folders for organizing flashcards
* Spaced repetition study mode
* User authentication and saved progress
* Export flashcards to CSV or Anki format
* Difficulty levels for generated cards

---

## Author

**Philip Demand**

* Portfolio: [https://www.philipdemand.com](https://www.philipdemand.com)
* LinkedIn: [https://www.linkedin.com/in/philip-demand/](https://www.linkedin.com/in/philip-demand/)
* GitHub: [https://github.com/philipdemand](https://github.com/philipdemand)

---

## License

This project is open-source and available under the MIT License.

