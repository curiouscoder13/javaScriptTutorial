let books = [];

function addBook() {
  const bookName = document.getElementById("bookName").value;
  const authorName = document.getElementById("authorName").value;
  const bookDescription = document.getElementById("bookDescription").value;
  const pagesNumber = document.getElementById("pagesNumber").value;

  if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
    const book = {
      name: bookName,
      author: authorName,
      description: bookDescription,
      pages: pagesNumber,
    };
    books.push(book);
    showBooks();
    clearInputs();
  } else {
    alert("Please fill all fields correctly.");
  }
}

function showBooks() {
  const booksDiv = books.map(
    (book, index) => `<h1>Book Number: ${index + 1}</h1>
        <p><strong>Book Name:</strong> ${book.name}</p>
        <p><strong>Author Name:</strong> ${book.author}</p>
        <p><strong>Book Description:</strong> ${book.description}</p>
        <p><strong>No. of Pages:</strong> ${book.pages} page(s)</p>
        <button onclick="deleteBook(${index})">Delete</button>`
  );
  document.getElementById("books").innerHTML = booksDiv.join("");
}

function clearInputs() {
  document.getElementById("bookName").value = "";
  document.getElementById("authorName").value = "";
  document.getElementById("bookDescription").value = "";
  document.getElementById("pagesNumber").value = "";
}

function deleteBook(index) {
  books.splice(index, 1);
  showBooks();
}
