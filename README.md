# Book Browser App

A responsive, real-time book browsing and search web application using the **Google Books API**. Built with **HTML**, **CSS**, and **Vanilla JavaScript**, this app allows users to explore books by genre, perform keyword-based searches, and navigate results with intuitive pagination.

---

## Features

### Real-Time Search
- Search books by **title**, **author**, or **keywords**
- Results fetched live from the Google Books API

### Genre Filtering
- Filter books dynamically based on selected genre
- Automatically updates the visible book cards

### Book Cards
Each card includes:
- Book Title
- Author(s)
- Short Description
- Year of Publication

### Pagination
- 9 books per page
- Pages shown in blocks of 3 for cleaner UI
- Active page indicator and smooth navigation

### Responsive Design
- Optimized for mobile, tablet, and desktop
- Built using only Vanilla CSS (no frameworks)

### Performance Improvements
- DOM updates grouped using template literals
- Minimal reflows and repaints
- Robust error handling for API and edge cases

---

## Technologies Used

- HTML
- CSS (Vanilla)
- JavaScript (Vanilla)
- Google Books API

---

## Concepts and Techniques

- DOM injection via template literals
- Grouped DOM updates for performance
- API error handling and edge case fallback
- Clean modular functions for clarity and reuse

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/yourusername/book-browser-app.git
cd book-browser-app
