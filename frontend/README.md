# READOVA - Online Bookstore

![READOVA Logo](./public/vite.svg)

READOVA is a modern, responsive online bookstore built with React and Tailwind CSS. This project is developed as part of CSCI426: Advanced Web Programming (Phase 1 - Frontend).

## 📚 Project Description

READOVA provides a seamless book browsing and shopping experience with a clean, modern interface. Users can explore a curated collection of books, search by title or author, filter by category, and manage their shopping cart.

### Features

- **Home Page**: Hero section, featured books, categories, and promotional content
- **Books Listing**: Full catalog with search and category filtering
- **Book Details**: Comprehensive book information with add-to-cart functionality
- **Shopping Cart**: Full cart management with quantity controls and order summary
- **About Page**: Company information and team details
- **Contact Page**: Contact form and business information
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Modern UI**: Clean design with smooth animations and transitions

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Programming language

## 📁 Project Structure

```
/frontend
  /public
    vite.svg
    _redirects
  /src
    /components
      Navbar.jsx
      Footer.jsx
      BookCard.jsx
      CartItem.jsx
    /pages
      Home.jsx
      About.jsx
      Contact.jsx
      Books.jsx
      BookDetails.jsx
      Cart.jsx
    /data
      books.js
    App.jsx
    main.jsx
    index.css
  package.json
  tailwind.config.js
  postcss.config.js
  vite.config.js
  index.html
  README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd READOVA/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📸 Screenshots

### Desktop View

#### Home Page
![Home Page 1](./screenshots/Readova%20Home%20page%20.png)
*Landing page with hero section and featured books*

![Home Page 2](./screenshots/Readova%20Home%20page%202%20.png)
*Featured books and categories*

![Home Page 3](./screenshots/Readova%20Home%20page%203.png)
*More featured content*

![Home Page 4](./screenshots/Readova%20Home%20page%204.png)
*Promotional sections*

#### Books Listing
![Books Page 1](./screenshots/Readova%20Browse%20Books%20.png)
*Browse all books with search and category filters*

![Books Page 2](./screenshots/Browse%20Books%202%20.png)
*Book catalog continued*

![Books Page 3](./screenshots/Browse%20Books%203.png)
*More books and filtering options*

#### Book Details
![Book Details](./screenshots/Books%20details.png)
*Detailed book information with add to cart*

#### Shopping Cart
![Cart Page](./screenshots/Shopping%20cart%20.png)
*Cart management with order summary*

#### About Page
![About Page](./screenshots/About%20page%20.png)
*About READOVA and team information*

#### Contact Page
![Contact Page](./screenshots/Contact%20Info%20.png)
*Contact form and business information*

---

### Mobile View

#### Mobile Home
![Mobile Home](./screenshots/iPhone-13-PRO-localhost.png)
*Responsive mobile layout*

---

## 📋 Academic Integrity Statement

This project was developed as original work for CSCI426: Advanced Web Programming.

### ✅ Original Work (Created by Student):
| Component | Description |
|-----------|-------------|
| React Components | All JSX components (Navbar, Footer, BookCard, CartItem, pages) |
| UI/UX Design | Layout structure, color scheme, responsive design |
| Styling | All Tailwind CSS class combinations and custom CSS |
| State Management | Cart functionality using React useState |
| Routing | React Router configuration and navigation |
| Search & Filter | Book search and category filter logic |
| Project Architecture | File structure and code organization |

### 📚 Third-Party Resources (Properly Cited):

#### Book Data:
The following real book titles are referenced for demonstration purposes only:
- "The Midnight Library" by Matt Haig (Viking Press, 2020)
- "Atomic Habits" by James Clear (Avery, 2018)
- "The Silent Patient" by Alex Michaelides (Celadon Books, 2019)
- "Educated" by Tara Westover (Random House, 2018)
- "The Alchemist" by Paulo Coelho (HarperOne, 1988)
- "Becoming" by Michelle Obama (Crown Publishing, 2018)
- "Dune" by Frank Herbert (Ace Books, 1965)
- "The Psychology of Money" by Morgan Housel (Harriman House, 2020)
- "Where the Crawdads Sing" by Delia Owens (G.P. Putnam's Sons, 2018)
- "Think Again" by Adam Grant (Viking, 2021)
- "Project Hail Mary" by Andy Weir (Ballantine Books, 2021)
- "The Seven Husbands of Evelyn Hugo" by Taylor Jenkins Reid (Atria Books, 2017)

#### Book Cover Images:
Book cover images sourced from Goodreads (https://www.goodreads.com) for educational demonstration purposes.

#### Open Source Libraries (MIT License):
- React 18 - https://react.dev
- Vite - https://vitejs.dev
- React Router - https://reactrouter.com
- Tailwind CSS - https://tailwindcss.com

#### Fonts:
- Inter & Merriweather - Google Fonts (https://fonts.google.com)

---

**Note**: This is Phase 1 of the READOVA project. All book data is mocked locally. Backend integration will be implemented in Phase 2.
