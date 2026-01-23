# DevBlog: A Full-Stack Blogging Platform

A modern, full-stack blogging application built with the MERN stack (MongoDB, Express, React, Node.js). This project features a professional MVC + Service + Repository architecture on the backend and a responsive React/Tailwind frontend.

---

## 1. Project Overview

This platform allows users to create accounts, write blogs with image uploads, and manage their content through a personalized dashboard. The backend is designed for high maintainability using layered architecture, and the frontend provides a seamless Single Page Application (SPA) experience.

---

## 2. Features

- **Authentication**: Secure signup and login using Bcrypt for password hashing and JWT (JSON Web Tokens) stored in HTTP-only cookies for session management.
- **Blog CRUD**: Users can create & read blog posts.
- **Image Uploads**: Integration of Multer middleware to handle cover image uploads for blog posts.
- **Layered Architecture**: Strict separation of concerns using Controllers, Services, and Repositories.
- **Relational Mapping**: Using Mongoose `populate` to link blogs to their respective authors for dynamic data rendering.
- **Modern UI**: Responsive design built with Tailwind CSS and Vite for lightning-fast development.

---

## 3. Tech Stack

**Frontend:**
- React.js (Vite)
- Tailwind CSS
- React Router DOM
- Axios (with `withCredentials` for cookie support)

**Backend:**
- Node.js & Express
- MongoDB & Mongoose
- Multer (File Handling)
- JSON Web Tokens (Authentication)
- Bcrypt (Encryption)
- CORS (Cross-Origin Resource Sharing)

---

## 4. Project Structure (MVC-S-R)

**Backend:**
- `/controllers`: Handles incoming HTTP requests and sends responses.
- `/services`: Contains the business logic (e.g., validation, data transformation).
- `/repository`: Contains direct database queries using Mongoose.
- `/models`: Defines the MongoDB schemas.
- `/middleware`: Contains authentication checks and Multer configuration.
- `/uploads`: Folder for storing uploaded images.

**Frontend:**
- `/src/context`: Global state management for User Authentication.
- `/src/pages`: Page components (Home, Login, Signup, Create Blog).
- `/src/services`: API configuration and Axios instances.
- `/src/components`: Reusable UI elements like Navbar and Private Routes.

---

## 5. Installation and Setup

### Step 1: Backend Setup
1. Navigate to the backend directory: `cd src`
2. Run `npm install` to install dependencies.
3. Create a `.env` file and add the following:
   ```env
   PORT=5000
   MONGO_URL=your_mongodb_atlas_url
   JWT_SECRET=your_random_secret_key
4. Ensure a folder named `/uploads` exists.
5. Run `node index.js` to start the server.

### Step 2: Frontend Setup
1. Navigate to the frontend directory: `cd frontend` `cd blogify`
2. Run `npm install`
3. Create a `.env` file and add the following:
    ```bash
    VITE_API_URL=http://localhost:5000
4. Run `npm run dev` to start the server.

---

    

