import Book from "./Book";
import Form from "./Form";


export default function BookList({bookList}) {
  console.log(bookList)
  return (
    <div>
      <ul>
      {bookList.map((book) => <Book book={book} />)}
      </ul>
      <Form />

    </div>
  )
}
