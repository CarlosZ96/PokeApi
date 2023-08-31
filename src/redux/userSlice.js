import { createSlice } from "@reduxjs/toolkit";

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