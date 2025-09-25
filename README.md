HEAD

# Full-Stack Todo List App

This is a **Full-Stack Todo List application** built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to create, edit, and delete tasks, with data persisted in a MongoDB database.

---

## Features

- Add, edit, and delete tasks
- Tasks are stored in MongoDB (via Mongoose)
- Responsive and user-friendly interface
- Full-stack integration: frontend React communicates with backend Express API

---

## Tech Stack

- **Frontend:** React.js, HTML, CSS, Axios for API calls
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Atlas)
- **Other:** dotenv for environment variables, CORS for cross-origin requests

---

## Project Structure
Here's a quick overview of the project structure:

todo-list-app/
│
├── public/
├── src/
│   ├── components/
│   │   ├── TodoItem.js
│   │   ├── TodoList.js
│   │   └── TodoForm.js
│   ├── styles/
│   │   └── App.css
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md

## installation & setup
### backend
1. Navigate to the backend folder:

```bash
cd backend

2. Install dependencies
```
npm install

3. Create a .env file (copy from .env.example) and add your MongoDB URI:
```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000

4. Start the backend Server
```bash
npm start
Server will run at http://localhost:5000
```
### frontend
1. Navigate to the frontend folder:
cd frontend

2. Install dependencies:
npm install

3. Start the React app:
npm start

Frontend will run at http://localhost:3000

## How it works
- The React frontend communicates with the Express backend using Axios API calls.
- Tasks are stored and retrieved from MongoDB Atlas.
- All CRUD operations (Create, Read, Update, Delete) are implemented via RESTful APIs.

## Future Improvements
- Add user authentication and multiple user support
- Add due dates, task priorities, and categories
- Deploy on cloud platform (e.g., Heroku, Vercel, Render)
- Add unit and integration tests for backend APIs

## Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository, create a new branch, and submit a pull request.

## Author
# Santhosh Kumar Penupotula
LinkedIn: https://www.linkedin.com/in/penupotula-santhosh/
GitHub: https://www.github.com/santhosh1188
 833102fb11e2202b7beb9412938aede56a07042f
