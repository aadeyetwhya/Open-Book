Book Browser App
A responsive, real-time book browsing and search web application powered by the Google Books API. Built with HTML, CSS, and Vanilla JavaScript, this app allows users to explore and search books by genre, title, author, or keywords, with dynamic pagination and clean UI.

Features
Real-Time Search
Search by title, author, or general keywords

Live search results fetched from the Google Books API

Genre Filtering
Filter books by genre

Automatically updates displayed book cards in real-time

Book Information Cards
Each book card displays:

Book Title

Author(s)

Short Description

Year of Publication

Pagination
Displays 9 books per page

Paginated in 3-page blocks to enhance clarity and reduce clutter

Smooth transitions between pages with active page highlight

Responsive Design
Fully responsive on mobile, tablet, and desktop

Clean layout using Vanilla CSS, no external frameworks used

Performance and Usability Enhancements
DOM injected dynamically using template literals

Updates grouped to reduce unnecessary DOM operations

Handles API errors, missing book info, and no-result states

Technologies Used
HTML (Markup structure)

CSS (Vanilla styling and responsive layout)

JavaScript (Core logic, API handling, DOM updates)

Google Books API (Book data source)

Core Concepts and Techniques
DOM injection via template literals

Efficient data rendering and DOM grouping

API request and response handling with error fallback

Edge case management for UI stability

Clean, readable code with modular functions

