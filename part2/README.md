# Part 2 - Full Stack Open Exercises

This folder contains my solutions to the **Part 2** exercises from the [Full Stack Open](https://fullstackopen.com/) course.

## 📖 Topics Covered

In Part 2, the focus is on communicating with servers and enhancing React applications. Key topics include:

- **Collections Rendering:** Working with arrays and rendering component lists
- **Forms Management:** Controlled components and form submission
- **Server Communication:** Fetching and sending data with axios
- **API Integration:** Working with REST APIs
- **Styling React Applications:** CSS in React applications

---

## 📝 Exercises Overview

### courseinfo (Exercises 2.1-2.5)
An enhanced version of the Part 1 courseinfo application, now handling more complex data structures and utilizing component modularization.

### phonebook (Exercises 2.6-2.17)
A contact management application that implements full CRUD operations with a backend server, form validation, and error handling.

### countries (Exercises 2.18-2.20)
An application that fetches and displays country data from an external API, featuring search functionality and detailed country information.

---

## 🛠 Tools Used

- **React:** A JavaScript library for building user interfaces
- **Vite:** Next generation frontend tooling
- **Axios:** Promise-based HTTP client for browser and Node.js
- **JSON Server:** Full fake REST API for development
- **CSS:** Styling for React components
- **RESTful API:** External API integration

---

## 📂 Folder Structure

```plaintext
📁 part2
├── 📁 courseinfo
│   ├── 📁 src
│   │   ├── 📁 components
│   │   │   ├── Course.jsx
│   │   │   └── [other components]
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── 📁 phonebook
│   ├── 📁 src
│   │   ├── 📁 components
│   │   │   ├── Filter.jsx
│   │   │   ├── PersonForm.jsx
│   │   │   └── [other components]
│   │   ├── 📁 services
│   │   │   └── persons.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .gitignore
│   ├── db.json
│   └── [config files]
├── 📁 countries
│   ├── 📁 src
│   │   ├── 📁 components
│   │   │   └── [components files]
│   │   ├── 📁 services
│   │   │   └── countries.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .gitignore
│   └── [config files]
└── README.md
```

## 🚀 Installation and Usage

1. **Clone the repository:**
   ```bash
   git clone https://github.com/daviddefitero/fullstackopen-exercises.git
   cd fullstackopen-exercises
   ```

2. **Navigate to the folder of the desired exercise:**
   ```bash
   cd part2/phonebook
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the application:**
   ```bash
   npm run dev
   ```

5. **For phonebook application, also start the JSON server:**
   ```bash
   npm run server
   ```