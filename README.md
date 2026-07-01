# Akhil Vaddeboina - Personal Portfolio
Live Website: https://portfolio-bice-ten-97.vercel.app/#experience
A sleek, modern, and highly interactive personal portfolio website built with **React**, **Vite**, and **Framer Motion**. Designed with a premium dark aesthetic featuring glassmorphism elements, fluid animations, and a fully responsive layout.
<img width="1917" height="866" alt="image" src="https://github.com/user-attachments/assets/e835f3c3-a724-4b42-889b-74a949a62b1d" />

## 🌟 Features

- **Dynamic Animations:** Scroll-triggered animations, interactive hover states, and smooth page transitions powered by Framer Motion.
- **Modern UI/UX:** A deep dark theme with elegant typography, glassmorphic overlays, and neon blue accents.
- **Responsive Design:** Flawless experience across desktop, tablet, and mobile devices, including a full-screen blurred mobile navigation menu.
- **Custom Cursor Trail:** Interactive particle cursor effect for a unique desktop browsing experience.
- **File Previews:** Built-in modal for viewing PDF certificates, offer letters, and resumes seamlessly within the app.
- **"Hire Me" Flow:** A dedicated overlay page for quick contact and project inquiries.

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Pure CSS with modern CSS Variables
- **Animations:** Framer Motion
- **Icons:** SVG (Inline)

## 📂 Project Structure

```text
src/
├── components/      # React components (Hero, About, Projects, Experience, Leadership, Navbar, etc.)
├── data/            # Local data models (constants.js) containing all portfolio content
├── index.css        # Global styles, variables, media queries, and utility classes
├── main.jsx         # Application entry point
└── App.jsx          # Root component
public/
├── assets/          # Static assets (logos, certifications, offer letters)
└── photo.jpg        # Profile pictures and graphics
```

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository** (or download the files):
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` to see the portfolio live.

### Building for Production

To create an optimized production build:
```bash
npm run build
```
This will generate a `dist` folder containing your compiled application ready for deployment to Vercel, Netlify, GitHub Pages, or any other hosting provider.

## 🎨 Customizing the Content

All the text, links, projects, and experiences are centralized in `src/data/constants.js`. You can easily update this file to reflect your latest work without needing to modify the React components.

- **Images & Documents:** Place logos in `/public/assets/logos/` and PDFs in `/public/assets/certifications/` or `/public/assets/offer-letters/`.
- **Styling:** Colors, fonts, and core spacing are defined at the top of `src/index.css`.

## 📄 License

This project is open-source and available under the MIT License.
