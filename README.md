# Xpert Enterprises — Business Website

A modern, responsive business website for **Xpert Enterprises**, a company specializing in the import and export of organic products. Built with React and Vite, the website provides a clean user experience and an organized presentation of the company's products and business information.

## 🌐 Live Website

Visit the live website: [**Xpert Enterprises**](https://xpertenterprises.in/)

## ✨ Features

* **Responsive Design:** Optimized for desktop, tablet, and mobile devices.
* **Product Catalog:** Organized display of organic products.
* **Product Details:** Dedicated pages for individual products.
* **Multiple Pages:** Home, About, Products, Product Details, Contact, and 404 pages.
* **Custom Routing:** Lightweight custom routing without an external router library.
* **Centralized Configuration:** Manage website content, contact information, and product data from a single configuration file.
* **Reusable Components:** Modular components for easier maintenance and scalability.

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Build Tool:** Vite
* **Styling:** CSS
* **Routing:** Custom React router
* **Development Tools:** npm, Git, GitHub

## 📁 Project Structure

```text
Xpert-Enterprises-website/
├── public/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Website pages
│   ├── config/
│   │   └── siteConfig.js # Centralized website configuration
│   ├── router.jsx        # Custom routing logic
│   └── index.css         # Global styles and design variables
├── IMAGE_GUIDE.md        # Product image instructions
├── package.json
└── README.md
```

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

* Node.js
* npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/faisalahmad7/Xpert-Enterprises-website.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Xpert-Enterprises-website
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal, usually `http://localhost:5173`.

## ⚙️ Customization

The project uses a centralized configuration and reusable components to simplify updates.

* **Website Content & Product Catalog:** Edit `src/config/siteConfig.js` to update text, contact details, and product information.
* **Product Images:** Refer to `IMAGE_GUIDE.md` for image instructions.
* **Website Pages:** Modify files inside `src/pages/`.
* **Reusable Components:** Update or add components inside `src/components/`.
* **Colors, Fonts & Styling:** Customize CSS variables and global styles in `src/index.css`.

## 📦 Production Build

To generate an optimized production build, run:

```bash
npm run build
```

The production-ready files will be generated in the `dist/` directory.

You can deploy the generated static files to platforms such as:

* Vercel
* Netlify
* GitHub Pages
* cPanel or other static hosting providers

## 📄 License

This project was developed for Xpert Enterprises. Contact the repository owner for information about reuse or distribution.
