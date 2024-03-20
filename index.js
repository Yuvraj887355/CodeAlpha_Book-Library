const bookList = document.getElementById('book-list');
  const form = document.getElementById('add-book-form');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    addBook(title, author);
    form.reset();
  });

  function addBook(title, author) {
    const book = document.createElement('div');
    book.classList.add('book');
    book.innerHTML = `
      <h3>${title}</h3>
      <p>by ${author}</p>
      <button class="btn btn-delete">Delete</button>
    `;
    bookList.appendChild(book);

    const deleteBtn = book.querySelector('.btn-delete');
    deleteBtn.addEventListener('click', function() {
      book.remove();
    });
  }