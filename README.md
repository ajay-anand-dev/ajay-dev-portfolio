# 🚀 React Portfolio

A modern personal portfolio built with **React.js**, featuring smooth scrolling sections, context-based state management, and EmailJS integration for contact form functionality.  

---

## ✨ Features
- 🖼️ Responsive design with reusable components (Landing, About, Skills, Projects, etc.)
- 🎨 Theming via **Context API**
- 📜 Smooth scroll-to-section navigation
- 📧 Contact form powered by **EmailJS**
- ⚡ Optimized build setup with React Helmet for SEO
- 🔗 Dynamic social links and resume download

---

## 📂 Project Structure
```
my-portfolio/
│
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   ├── contexts/          # Context API for state (Theme, Section, etc.)
│   ├── data/              # Config data (header, socials, skills, etc.)
│   ├── pages/             # Main pages
│   ├── App.js             # Root component
│   └── index.js           # Entry point
├── .env                   # Environment variables (EmailJS, API keys)
├── package.json
└── README.md
```

---

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ajay-dev-portfolio.git
   cd ajay-dev-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Setup environment variables**
   Create a `.env` file in the project root:
   ```env
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   ```

4. **Run the project**
   ```bash
   npm start
   ```

---

## 📧 Contact Form Setup (EmailJS)

This project uses [EmailJS](https://www.emailjs.com/) for handling form submissions.

- Create an EmailJS account.
- Get your **Service ID**, **Template ID**, and **Public Key**.
- Add them to `.env`.
- The contact form will automatically send messages to your configured email.

---

## 🛠️ Tech Stack
- **React.js**
- **Material-UI** (buttons, tooltips)
- **React Helmet** (SEO)
- **EmailJS** (contact form)
- **React Icons**
- **Context API**

---

## 🚀 Deployment
You can deploy the app using:
- **Vercel**
- **Netlify**
- **GitHub Pages**

For example (Netlify):
```bash
npm run build
netlify deploy
```

---

## 📸 Screenshots

### Landing Section
![Landing Section](https://raw.githubusercontent.com/ajay-anand-dev/ajay-dev-portfolio/main/screenshots/landing.png)

### Contact Form
![Contact Form](https://raw.githubusercontent.com/ajay-anand-dev/ajay-dev-portfolio/main/screenshots/contact.png)

---

## 📄 License
This project is licensed under the MIT License – feel free to use and modify.

---

## 👤 Author
**Ajay Anand Srivastava**  
- [LinkedIn](https://linkedin.com/in/ajay-srivastava5679)  
- [GitHub](https://github.com/ajay-anand-dev/)  
