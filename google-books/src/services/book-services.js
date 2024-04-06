export const getBooksBySearchTerm = async (searchTerm) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
  );
  //must trim search term and split it by spaces, then join it with pluses - search terms with spaces must have pluses between words e.g 'flower+tree' - not 'flower tree'

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  const data = await response.json();
  const { results } = data;
  if (results.length === 0) {
    throw new Error("No books found for search term: " + searchTerm);
  }
  return results;
};
