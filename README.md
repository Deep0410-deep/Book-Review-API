# Book Review API:
A RESTful API for managing books and user reviews with secure authentication using JWT. Built with Node.js, Express, and MongoDB.

## Features:
- ✅ User Signup & Login using JWT
- 📚 Add, View, and Search Books
- ✍️ Post, Update, and Delete Reviews
- 🔒 Auth middleware to protect routes
- 🌐 MongoDB database via Mongoose

# Tech Stack:
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT
- bcryptjs
- dotenv

# Folder Structure:
book review api/
│
├── controllers/
│   ├─ authController.js
│   ├─ bookController.js
│   └─ reviewController.js
│
├── middleware/
│   └─ auth.js
│
├── models/
│   ├─ Book.js
│   ├─ Review.js
│   └─ User.js
│
├── routes/
│   ├─ authRoutes.js
│   ├─ bookRoutes.js
│   └─ reviewRoutes.js
|
├─ .env
├─ README.md
├─ server.js

# API Endpoints

# Authentication:
| Method | Endpoint  | Description       |
|--------|-----------|-------------------|
| POST   | /signup   | Register a user   |
| POST   | /login    | Login and get JWT |

# Books:
| Method | Endpoint       | Description                     |
|--------|----------------|---------------------------------|
| POST   | /books         | Create book (Auth required)     |
| GET    | /books         | List all books                  |
| GET    | /books/:id     | Get a book with reviews         |
| GET    | /search        | Search books by title/author    |

# Reviews:
| Method | Endpoint             | Description                    |
|--------|----------------------|--------------------------------|
| POST   | /books/:id/reviews   | Add review (Auth required)     |
| PUT    | /reviews/:id         | Update review (Auth + Owner)   |
| DELETE | /reviews/:id         | Delete review (Auth + Owner)   |

# Environment Variables:
Create a `.env` file in the root folder and add:
PORT=5000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key


Replace `your-mongodb-uri` with your actual MongoDB connection string and `your-secret-key` with any secret phrase for JWT.

# How to Run This Project Locally:
1. Clone or download this repository
2. Open terminal inside the project folder
3. Run:npm install

# Start the server using:
node server.js

