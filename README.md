
## 📘 README.md

```markdown
# 📝 Full Stack Simple Linked App

A simple full-stack web application that allows users to log in, create posts, and view posts. Built with **React**, **Express**, **MongoDB**, and **js-cookie** for session management.

---

## 🚀 Features

- 🔐 User login with email and password
- 🍪 Cookie-based session tracking
- 📝 Create posts with content
- 📃 View all posts
- 🛡️ Protected routes for authenticated users

---

## 🧱 Tech Stack

| Layer       | Technology           |
|-------------|----------------------|
| Frontend    | React, React Router  |
| Backend     | Express.js, Mongoose |
| Database    | MongoDB              |
| Auth/Session| js-cookie            |

---

## 📦 Dependencies

### Frontend

Install via `npm install` in the `/client` folder:

```bash
npm install react react-dom react-router-dom axios js-cookie
```

### Backend

Install via `npm install` in the `/server` folder:

```bash
npm install express mongoose cors cookie-parser
```

---

## 📁 Folder Structure

```
project-root/
│
├── frontend/               # React frontend
│   ├── src/
│   │   ├── |---Landing.jsx  ( default route ie, "/")
|   |   |---|---Signup.jsx (/signup route)
│   │   │   ├── Login.jsx    ( /login route)
│   │   │   ├── CreatePost.jsx  ( /create-post route)
│   │   │   ├── ShowPosts.jsx  ( /posts route)
│   │   │   └── ProtectedRoute.jsx   (for preventing user to enter /Showpost or /createpost if not logged in)
│   │   ├── App.jsx
│   │   
│   └── package.json
│
├── backend/               # Express backend
│   |   
│   ├── db.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/fullstack-post-app.git
cd fullstack-post-app
```

### 2. Setup Backend

```bash
cd server

npm install

```



Start the server:

```bash
node server.js
```

### 3. Setup Frontend

```bash
cd ../client
npm install
npm run dev
```

---

## 🔐 Authentication Flow

- User logs in via `/login`
- Email is stored in a cookie using `js-cookie` for persisent memory 
- Protected routes check for cookie presence
- Username is fetched via `/username` route using headers

---

## 📡 API Endpoints
### `POST /register`

- Body: `{ email, password , username }`
- Response: `{ message }`

### `POST /login`

- Body: `{ email, password }`
- Response: `{ message }`

### `GET /username`

- Header: `email: user@example.com`
- Response: `{ username }`

### `POST /posts`

- Body: `{ email, content }`
- Response: `{ message }`

### `GET /posts`

- Response: `[ { username, content, timestamp } ]`

---

## 🧪 Testing Tips

- Use Postman or browser dev tools to inspect cookies
- Test login flow before accessing protected routes
- Use MongoDB Compass to view stored users and posts

---

## 📌 Notes

- Cookies are set with `{ path: "/", expires: 1 }` for 1-day persistence
- CORS must be enabled on backend for frontend communication
- Backend uses `cookie-parser` to read cookies

---

## 📞 Contact

Made by [Anshuman](mailto:itisanshu@egmail.com)  
Feel free to reach out for improvements or questions!

```

---

