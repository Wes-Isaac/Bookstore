import React from 'react'

export default function Book({book}) {
  console.log(book)
  return (
    <li>
      <span>{` ${book.title} `}</span>
      <span>{` ${book.author} `}</span>
      <button type="button">Remove book</button>
    </li>
  )
}
