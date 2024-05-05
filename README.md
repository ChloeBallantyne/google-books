#google books
This is a project using React and the Google Books Api to create a list of books based on a search term.

//error with ModalContext
//ask about openModal state
//ask about book data state and how to pass that to the modal
//ask about deployment issues
# Google Books API Search Engine

## Overview
The Google Books API Search Engine is a web application developed using React and asynchronous programming. The primary objective of the project is to provide users with a platform to search for books within the Google Books database and obtain detailed information about specific titles.

## Components

### 1. Header
- The header component introduces the page and provides a title for the search engine.

### 2. SearchBar
- The search bar component allows users to input search terms and submit queries to search for books.

### 3. BookLoader
- The book loader component fetches book data from the Google Books API based on the user's search query and displays the results in a grid format.

### 4. Books
- The books component renders a grid of books, each displaying an image, author, title, and description.

### 5. Book
- The book component represents an individual book in the grid and allows users to view more details about the book by clicking on it.

### 6. Modal
- The modal component displays detailed information about a selected book in a modal window when clicked on from the grid.

## Contexts

### 1. BookContext
- The book context provides state management for storing information about the selected book, allowing seamless communication between components.

### 2. ModalContext
- The modal context manages the state of the modal window, controlling its visibility and enabling interaction with the book details.

## Services

### 1. book-services
- The book-services module contains functions for fetching book data from the Google Books API and cleaning up the retrieved data for display.

## Styling
The project utilizes SCSS modules for styling, ensuring modular and maintainable CSS code. Each component has its own SCSS file, allowing for easy management of styles.

## Getting Started
1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Run the development server using `npm start`.
4. Open your web browser and navigate to the specified localhost address.

