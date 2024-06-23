# ToDo List Backend Setup

This is the backend setup for a simple ToDo List application. The backend is built using Node.js, Express, and MongoDB, with additional dependencies for handling CORS, cookies, environment variables, and more.

## Prerequisites

Ensure you have the following installed on your system:

- Node.js (v14 or higher recommended)
- npm (v6 or higher recommended)
- MongoDB Atlas account (for database setup)

## Environment Variables

Create a `.env` file in the root directory of your project and include the following variables:

````env
PORT=5000
MONGODB_URI=your_mongodb_atlas_uri
FRONTEND_URL=http://localhost:5173

Replace your_mongodb_atlas_uri with the URI you get from your MongoDB Atlas account.

Database Setup
Create a new database in your MongoDB Atlas account named todolist.

Install Dependencies:-

npm install cors cookie-parser dotenv mongoose express

Development Dependencies:-
npm install --save-dev nodemon

Running the Backend:-
npm run dev

# ToDo List Frontend Setup

This is the frontend setup for a simple ToDo List application. The frontend is built using Vite, React, Tailwind CSS, and axios, with react-hook-form for form handling.

## Prerequisites

Ensure you have the following installed on your system:

- Node.js (v14 or higher recommended)
- npm (v6 or higher recommended)

## Project Setup

1. **Create Vite Project**

   Create a new project using Vite:

   ```bash
   npm create vite@latest

Navigate to Project Directory:-
cd your-project-name

Install Dependencies:-
npm install react-hook-form axios

Install and Configure Tailwind CSS:-
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Add the following paths to the content array in tailwind.config.js:
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

Add Tailwind Directives:-
@tailwind base;
@tailwind components;
@tailwind utilities;

Running the Frontend:-
npm run dev

````
