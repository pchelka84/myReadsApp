import React from "react";

const Book = ({ book, shelf, updateShelf }) => {
  let showBookImage = book.imageLinks ? book.imageLinks.thumbnail : "";

  const handleChange = (e) => {
    const newShelf = e.target.value;

    if (updateShelf) {
      updateShelf(book, newShelf);
    }
  };

  return (
    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 192,
            backgroundImage: `url('${showBookImage})`,
          }}
        ></div>
        <div className='book-shelf-changer'>
          <select value={shelf} onChange={handleChange}>
            <option value='none' disabled>
              Move to...
            </option>
            <option value='currentlyReading'>Currently Reading</option>
            <option value='wantToRead'>Want to Read</option>
            <option value='read'>Read</option>
            <option value='none'>None</option>
          </select>
        </div>
      </div>
      <div className='book-title'>{book.title}</div>
      <div className='book-authors'>{book.authors.join(", ")}</div>
    </div>
  );
};

export default Book;
