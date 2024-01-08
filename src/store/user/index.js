import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  is_admin: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.name = action.payload.name;
      state.is_admin = action.payload.is_admin;
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
export const selectName = (state) => {
  return { name: state?.user.name, is_admin: state?.user.is_admin };
};
