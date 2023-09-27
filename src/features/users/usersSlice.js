import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, name: "Ram" },
  {
    id: 2,
    name: "Hari",
  },
  { id: 3, name: "Jackson" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const SelectALlUsers = (state) => state.users;
export default usersSlice.reducer;
