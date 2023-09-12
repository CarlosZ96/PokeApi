import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooksAsync = createAsyncThunk(
  'books/fetchBooksAsync',
  async (arg, { getState, rejectWithValue }) => {
    const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JX6HgfhVoknuk7ZGztbn/books');
    const books = await response.data;
    return books;
  },
);

const initialState = {
  "item_id": "item1",
  "title": "The Great Gatsby",
  "author": "John Smith",
  "category": "Fiction"
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const {title, author, category} = action.payload;
      state.title = title;
      state.author = author;
      state.category = category;
    },
   changeEmail: (state, action) => {
      state.category = action.payload
    }
  }
});

export const { addUser,changeEmail } = userSlice.actions;//actions
export default userSlice.reducer;