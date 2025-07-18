# OpemBook- A book browsing App

The **Open Book** is a fully responsive, frontend web application built with **HTML**, **CSS**, and **Vanilla JavaScript** using the **Google Books API**. This project started as a **practice project** to explore real-world application of DOM manipulation, API integration, and UI responsiveness — but it's also completely functional and usable.

Users can **search for books** by title, author, or keywords, or **filter by genre** to explore books in different categories. Each result provides key details including the book’s title, author(s), short description, and publication year.

This project demonstrates core web development concepts like **dynamic rendering**, **error handling**, **template-based DOM updates**, and **API consumption** — while providing a smooth user experience.

---

## Features

### **Real-Time Search**
- Search books by **title**, **author**, or **keywords**
- Results fetched live and updated in real-time from the Google Books API

### **Genre Filtering**
- Select from a set of predefined genres (e.g., Fiction, Science, History)
- Automatically filters and updates displayed books

### **Detailed Book Cards**
Each book card shows:
- **Book Title**
- **Author(s)**
- **Short Description**
- **Published Year**

### **Pagination**
- Displays **9 books per page**
- Pages grouped in **3-page blocks** for improved clarity
- Highlights active page and enables smooth transitions

### **Responsive Design**
- Works seamlessly across desktops, tablets, and smartphones
- No external CSS frameworks used — built with pure CSS

### **Performance Optimization**
- DOM rendering done using **template literals** for flexibility
- Grouped DOM updates reduce reflow and repaint operations
- Graceful handling of missing data and API errors

---

## Technologies Used

- **HTML** – Page structure  
- **CSS (Vanilla)** – Custom styling and layout  
- **JavaScript (Vanilla)** – Application logic and API integration  
- **Google Books API** – Source for book data

---

## Key Concepts and Techniques

- Real-time search and filtering using API queries
- DOM injection using JavaScript template literals
- Handling edge cases (missing fields, empty results, API errors)
- Pagination logic and performance-focused DOM updates
- Fully responsive layout without using CSS frameworks

---

## Getting Started

### **Clone the Repository**

```bash
git clone https://github.com/yourusername/book-browser-app.git
cd book-browser-app
