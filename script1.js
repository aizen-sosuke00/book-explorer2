const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    genre: "fiction",
    cover: "https://covers.openlibrary.org/b/id/8226191-L.jpg",
    description: "A classic novel by F. Scott Fitzgerald about the American Dream.",
    previewLink: "https://openlibrary.org/works/OL27646W/The_Great_Gatsby"
  },
  {
    id: 2,
    title: "Sapiens: A Brief History of Humankind",
    genre: "nonfiction",
    cover: "https://covers.openlibrary.org/b/id/8169251-L.jpg",
    description: "Yuval Noah Harari explores the history and impact of Homo sapiens.",
    previewLink: "https://openlibrary.org/works/OL15335387W/Sapiens"
  },
  {
    id: 3,
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "fantasy",
    cover: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
    description: "The first book in J.K. Rowling's magical Harry Potter series.",
    previewLink: "https://openlibrary.org/works/OL82563W/Harry_Potter_and_the_Sorcerer's_Stone"
  },
  {
    id: 4,
    title: "A Brief History of Time",
    genre: "science",
    cover: "https://covers.openlibrary.org/b/id/240726-L.jpg",
    description: "Stephen Hawking's landmark book on cosmology and physics.",
    previewLink: "https://openlibrary.org/works/OL45804W/A_Brief_History_of_Time"
  }
];

const booksContainer = document.getElementById("booksContainer");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const modalPreviewLink = document.getElementById("modalPreviewLink");
const modalClose = document.getElementById("modalClose");

function displayBooks(filteredBooks) {
  booksContainer.innerHTML = "";

  if (filteredBooks.length === 0) {
    booksContainer.innerHTML = `<p style="color: var(--text); text-align:center;">No books found for this genre.</p>`;
    return;
  }

  filteredBooks.forEach(book => {
    const bookEl = document.createElement("div");
    bookEl.classList.add("book");

    const img = document.createElement("img");
    img.src = book.cover;
    img.alt = book.title;
    img.title = "Click for preview";
    img.addEventListener("click", () => openModal(book));

    const title = document.createElement("h3");
    title.textContent = book.title;

    bookEl.appendChild(img);
    bookEl.appendChild(title);
    booksContainer.appendChild(bookEl);
  });
}

function filterBooks(genre) {
  const filtered = books.filter(book => book.genre === genre);
  displayBooks(filtered);
}

// Modal open
function openModal(book) {
  modalTitle.textContent = book.title;
  modalImage.src = book.cover;
  modalImage.alt = book.title;
  modalDescription.textContent = book.description;
  modalPreviewLink.href = book.previewLink;

  modal.style.display = "flex";
}

// Modal close
modalClose.onclick = () => {
  modal.style.display = "none";
};

// Close modal on clicking outside content
window.onclick = e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

// Show all books by default
displayBooks(books);
