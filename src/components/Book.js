import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/book';

export default function Book({ book }) {
  const dispatch = useDispatch();
  return (
    <div className="list-item">
      <p className="cate">{` ${book.category} `}</p>
      <p className="book-title">{` ${book.title} `}</p>
      <div>
        <button className="list-butt" type="button">Comment</button>
        <button className="list-butt" type="button" onClick={() => dispatch(removeBook(book.item_id))}>Remove</button>
        <button className="list-butt" type="button">Edit</button>
      </div>
    </div>
  );
}
