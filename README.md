# Ejam Full-Stack Project

This repository contains a **full-stack application** with a **React frontend (client)** and an **Express backend (server)**. Both are structured to be deployed from the same repository.

## 🚀 Features

- **Client (React + TypeScript)**
- **Server (Node.js + Express + TypeScript)**
- **Zustand for State Management**
- **In-Memory Storage**
- **Jest & Supertest for Testing**
- **Environment-Specific Configurations**

---

## 📂 Folder Structure

```
/project-root
│── client/              # React Frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── tsconfig.json
│── server/              # Node.js Backend
│   ├── src/
│   ├── package.json
│   ├── tsconfig.json
│── .gitignore           # Ignore files for both client & server
│── README.md            # Project documentation
```

---

## 🛠 Installation

### **1️⃣ Clone Repository**

```bash
git clone https://github.com/leoncvrtila/ejam.git
cd ejam
```

### **2️⃣ Install Dependencies**

```bash
# Install frontend dependencies
cd client && yarn install

# Install backend dependencies
cd ../server && yarn install
```

---

## 🚀 Running the Project

### **3️⃣ Start the Backend**

```bash
cd server
yarn dev  # Runs the Express API
```

### **4️⃣ Start the Frontend**

```bash
cd client
yarn start  # Runs React on http://localhost:3000
```

---

## ✅ Running Tests

```bash
# Run backend tests
cd server
yarn test
```

---

## 🌎 Environment Variables

Create a **`.env` file** inside both `client/` and `server/` folders:

📂 **`server/.env`**

```ini
PORT=4000
```

📂 **`client/.env`**

```ini
REACT_APP_API_URL=http://localhost:4000
```

---

## 📦 Deployment

### **Vercel (Frontend)**

```bash
vercel --prod
```

### **Railway or Render (Backend)**

```bash
git push origin main  # Automatically deploys on push
```

---

## ✨ Contributors

- **Your Name** (@leoncvrtila)

---

## 📜 License

This project is licensed under the **MIT License**. Feel free to use and modify it!

---

## ⏳ If I Had More Time

If I had more time, I would:

- Implement **CI/CD pipelines** for automatic testing and deployment.
- Optimize performance by **adding caching mechanisms** (e.g., Redis).
- Enhance the frontend by implementing **server-side rendering (SSR) with Next.js**.
- Improve authentication by integrating **OAuth and JWT token refresh strategies**.
- Expand test coverage by adding **end-to-end (E2E) tests with Cypress**.
- Add **translations** for multilingual support if needed.
- Use a **database instead of in-memory storage** for better data persistence.
- Introduce additional **common folders** (e.g., `common/` for shared utilities, components, and features) to improve code structure and reusability.
