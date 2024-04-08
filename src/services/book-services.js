export const getBooksBySearchTerm = async (searchTerm) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  const data = await response.json();
  const { items } = data;
  if (items.length === 0) {
    throw new Error("No books found for search term: " + searchTerm);
  }
  return items;
};