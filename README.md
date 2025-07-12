# 💊 AskMedicine – React + Vite Application

AskMedicine is a responsive single-page React application built with Vite, focused on providing a user interface for medical prompts and drug-related queries. It features dynamic routing, contextual interaction, and a clean sidebar-based UI.

## 🔧 Tech Stack

- ⚛️ React
- ⚡ Vite (for fast bundling and development)
- 🧭 React Router DOM (for client-side routing)
- 📦 Context API (for state management)
- 🎨 CSS (Modular & Component-specific styling)
- 🖼️ Custom Assets

---

## 📁 Project Structure

src/
├── assets/ # All image/icon assets
├── components/
│ ├── About/ # About component
│ ├── Guidelines/ # Guidelines component
│ ├── DrugInteractions/ # Drug Interactions component
│ ├── Main/ # Main homepage functionality
│ └── Sidebar/ # Sidebar with recent chats & navigation
├── context/
│ └── context.js # React Context for state and prompts
├── App.jsx # Main App routing
└── main.jsx # Vite entry point
---

## 🚀 Features

- 🧠 Context-based chat prompt system
- 📚 Navigation between **Main**, **About**, **Guidelines**, and **Drug Interactions**
- 🧾 Sidebar with recent prompt history
- ⚡ Fast build & live reload with Vite
- 🔒 Placeholder Login/Signup/Settings UI (can be extended)
- ⚠️ In-app disclaimer for potentially inaccurate AI responses

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Mudavath1234/AskMedicine.git
cd askmedicine
Install dependencies

npm install
# or
yarn install
Start the development server

npm run dev
# or
yarn dev
Open in browser

Visit http://localhost:5173

