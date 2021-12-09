import { createSlice, current } from '@reduxjs/toolkit';
import axios from 'axios';


const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const key = 'opQreyKrNQepd5FMlRdY';
const appUrl = `${baseUrl}/apps/${key}/books`;

const bookSlice = createSlice(
  {
    name: 'books',
    initialState: [],
    reducers: {
      addBook: (state, action) => [...current(state), { ...action.payload }],
      removeBook: (state, action) => current(state).filter((b) => b.item_id !== action.payload),
      getBooks: (state, action) => action.payload,
    },
  },
);

const getBooks = async (dispatch) => {
  const res = await axios.get(appUrl);
  bookList = res.data;
  dispatch({ type: 'book/getBooks', payload: bookList });
}

const addBook = async (book) => {
  const addBookThunk = (dispatch) => {
    const res = await axios.post(appUrl);
    if (res.status) {
      dispatch({ type: 'books/addBook', payload: book });
    }
  }
  return addBookThunk;
}

const removeBook = async (id) => {
  const deleteBookThunk = async (dispatch) => {
    const res = await axios.delete(`${appUrl}/${id}`);

    
    const msg = res;
    if (msg.status) {
      dispatch({ type: 'books/removeBook', payload: id });
    }
  };
  return delBookThunk;
}

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
