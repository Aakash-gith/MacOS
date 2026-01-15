# MacOS Guide - Complete Educational Platform

A modern, high-fidelity educational website designed to guide users from beginner fundamentals to advanced macOS architecture and Apple Silicon mastery.

![MacOS Guide Preview](https://github.com/Aakash-gith/MacOS/blob/main/screenshot_placeholder.png?raw=true)

## 🚀 Features

- **Premium Aesthetics**: Built with a "Liquid Glass" macOS Sonoma-inspired design language.
- **Modular Curriculum**: Centralized data structure (`macContent.js`) for easy content scaling.
- **Deep Architecture Insights**: Dedicated sections for Apple Silicon (M1-M5) and Unified Memory education.
- **Interactive History**: A vertical timeline of Mac's great transitions since 1984.
- **Core Topics Mastery**: A 7-pillar guide covering everything from multi-tasking to security.
- **Ultra-Smooth Interaction**: Powered by Lenis for kinetic scrolling and Framer Motion for scroll-triggered visuals.
- **Fully Responsive**: Optimized for every screen size, from mobile phones to high-resolution displays.

## 🛠️ Technology Stack

- **Frontend Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://greensock.com/gsap/)
- **Smooth Scroll**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🏁 Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Aakash-gith/MacOS.git
   ```

2. Navigate to the project directory:
   ```bash
   cd MacOS
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173` (or the port specified in your terminal).

## 📂 Project Structure

- `/src/data/macContent.js`: The "Brain" of the project. Update this file to change text/data.
- `/src/components/UI.jsx`: Reusable atomic UI components (Cards, Tables, Timelines).
- `/src/App.jsx`: Main layout and section orchestration.
- `/src/styles/index.css`: Global design tokens and tailwind layers.

---

Designed and Developed by **Antigravity** | Managed by **Aakash-gith**