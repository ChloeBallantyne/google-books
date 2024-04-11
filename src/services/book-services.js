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
  return cleanUpBookData(items);
};

export const cleanUpBookData = (books) => {
  return books.map((book) => {
    //console.log(book);
    const {
      id,
      volumeInfo: {
        title,
        authors,
        publisher,
        publishedDate,
        description,
        imageLinks,
        pageCount,
        categories,
        averageRating,
        ratingsCount,
        language,
        previewLink,
      },
    } = book;

    return {
      id,
      title: title || "No title available",
      authors: authors || "No authors available",
      publisher: publisher || "No publisher available",
      publishedDate: publishedDate || "No publish date available",
      description: description || "No description available",
      image: imageLinks?.thumbnail || "src/assets/default-book-cover.png",
      pageCount: pageCount || "No page count available",
      categories: categories || "No categories available",
      averageRating: averageRating || "No average rating available",
      ratingsCount: ratingsCount || "No ratings count available",
      language: language || "No language information available",
      previewLink: previewLink || "No preview link available",
    };
  });
};

//create modals with states modalopen and setmodalopen can be a bool
//state for book object to display data in the modal
