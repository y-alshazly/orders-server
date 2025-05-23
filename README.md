# 📦 Orders API

A simple Node.js + Express + TypeScript REST API to handle order submissions. This server accepts POST requests to create orders, performs basic validation, and stores the orders in memory.

---

## 🚀 Features

- ✅ POST `/api/v1/orders` endpoint to create orders
- 🧪 Basic input validation
- 🧠 In-memory data storage (no database required)
- ⚙️ Built with TypeScript
- 🔁 Live development with `nodemon`
- 🔒 Environment variable support via `.env`
- 🧹 Linting and formatting with ESLint + Prettier

---

## 🛠️ Installation

```bash
git clone https://github.com/y-alshazly/orders-server.git
cd orders-server
yarn install
```

## 🏃 Running the Project

- **Start development server**:

  ```bash
  yarn watch
  ```

- **Regular development build**:

  ```bash
  yarn dev
  ```

- **Start development server**:

  ```bash
  yarn watch
  ```

- **QA environment:**:

  ```bash
  yarn qa
  ```

- **Production environment**:

  ```bash
  yarn prod
  ```

- **Manual build (compiles TypeScript to JavaScript)**:

  ```bash
  yarn build:start
  ```

- **Run linter (check for issues)**:

  ```bash
  yarn lint:no-fix
  ```

- **Run linter with auto-fix**:

  ```bash
  yarn lint
  ```

- **Format code with Prettier**:

  ```bash
  yarn prettier
  ```
