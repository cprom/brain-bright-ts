
# 🧠 Brain Bright — Educational Web App for Kids

**Brain Bright** is a web-based educational platform designed to help children from **Kindergarten through 5th Grade** build foundational skills in **reading, writing**, and **basic math** (addition, subtraction, multiplication, and division).

This project was inspired by my 5-year-old daughter, and aims to support young Practiceers in a fun, interactive, and accessible way.

## 🎯 Features

- ✏️ **Early Literacy Activities**: Letter tracing, phonics, and word recognition
- ➕ **Basic Math Skills**: Covers addition, subtraction, multiplication, and division
- 🧩 **Interactive Exercises**: Games and practice modules designed to hold kids’ attention
- 🎨 **Kid-Friendly UI**: Simple, colorful interface ideal for young Practiceers

## 🛠️ Tech Stack

- **React JS** – for building interactive user interfaces
- **TypeScript** – for type safety and better developer experience
- **JavaScript** – for dynamic client-side behavior
- **Vite**
- **React-sketch-canvas**

## 🚀 Getting Started

Follow these instructions to run the project locally:

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## 🚀 Getting Started

Follow these instructions to run the project locally:

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/cprom/brain-bright-ts.git
   cd brain-bright-ts

2. Install dependencies:

npm install

3. Start the development server

npm run dev

## 📚 Future Improvements
🗣️ Add speech recognition and pronunciation features

🌍 Support for multiple languages

🧮 Adaptive difficulty based on user progress


## 🤝 Contributing
Contributions are welcome! Whether it's adding features, fixing bugs, or improving the UI — feel free to submit a PR or open an issue.

## 📄 License
This project is open source and available under the MIT License.

## 👨‍👧 A Personal Note
This app was built with love for my daughter and others like her who are just beginning their Practiceing journey. I hope it brings as much joy to you and your children as it did to us during development. 💖

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
# brain-bright-ts

# Deploy
run npm deploy