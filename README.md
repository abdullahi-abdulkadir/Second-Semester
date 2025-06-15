
# 📋 Todo App – Frontend Exam Project

A responsive, accessible, and feature-rich Todo App built with **React 19**, **Vite**, **TailwindCSS**, **TanStack Query**, and deployed on **Vercel**.

> This project was developed as part of the AltSchool Frontend Engineering second semester examination.

---

## 🚀 Live Demo

👉 [Live App on Vercel](https://second-semester-git-master-abdullahis-projects-720ececc.vercel.app/)

---

## 📦 Features

### ✅ Core Functionality

- Fetch and display todos from the JSONPlaceholder API
- Client-side **pagination** (10 items per page)
- Detailed **todo view page** via nested routing
- Global **error boundaries** + 404 page
- **Search** todos by title
- **Filter** by status: All, Completed, Incomplete

### ➕ Bonus Features

- ✅ Create a new todo
- ✅ Update existing todo
- ✅ Delete todo with confirmation
- ✅ API caching with **TanStack Query**
- ✅ Form validation
- ✅ Loading & error states

---

## 🧱 Tech Stack

| Category           | Technology                          |
|--------------------|-------------------------------------|
| Language           | JavaScript (ES2023)                 |
| Framework          | [React 19+](https://react.dev/)     |
| Build Tool         | [Vite](https://vitejs.dev)          |
| Styling            | [Tailwind CSS](https://tailwindcss.com) |
| State Management   | [TanStack Query](https://tanstack.com/query) |
| Routing            | [React Router v7](https://reactrouter.com) |
| UI Components      | [ShadCN/UI](https://ui.shadcn.com/) |
| Icons              | [Lucide React](https://lucide.dev/) |
| Deployment         | [Vercel](https://vercel.com)        |
| Package Manager    | [pnpm](https://pnpm.io)             |

---

## 🔌 API Info

Base URL: `https://jsonplaceholder.typicode.com`

| Method | Endpoint        | Description               |
|--------|------------------|---------------------------|
| GET    | `/todos`         | Fetch all todos           |
| GET    | `/todos/:id`     | Fetch single todo         |
| POST   | `/todos`         | Create a todo             |
| PUT    | `/todos/:id`     | Update a todo             |
| DELETE | `/todos/:id`     | Delete a todo             |

---

## 🧑‍💻 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/abdullahi-abdulkadir/todo-exam.git
cd todo-exam
pnpm install
pnpm dev

###  For build Production
pnpm build

### For Preview
pnpm preview


src/
├── components/         
├── db/              
├── pages/            
├── styles/           
├── utils/              
├── App.jsx            
├── main.jsx            
public/
├── index.html


🧑 Accessibility Highlights
Semantic HTML: <main>, <section>, <nav>, <button>, etc.

Keyboard navigability and focus indicators

ARIA labels for form fields and buttons

High contrast color palette (WCAG AA)

Logical heading order and structure




🐞 Error Handling
Error Boundary wraps the app for catching runtime exceptions

Custom 404 page for undefined routes

API errors shown in UI with friendly messages

Simulated error route included for testing



⚙️ Available Scripts

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint ."
}


📌 Known Issues
JSONPlaceholder is a fake API, so POST/PUT/DELETE only simulate changes.

Search/filter is client-side only.


🧠 Future Improvements
Implement drag-and-drop reordering of todos

Add authentication layer (login, register)

Enable real-time data sync with a real backend

Add unit and integration tests with Vitest or Jest


📄 License
This project will be soon licensed under the MIT License.




👤 Author
Abdullahi Abdulkadir
📧 graphgeo02@gmail.com
🔗 [LinkedIn ](https://www.linkedin.com/in/abdullahi-abdulkadir-mohammed?trk=contact-info)





