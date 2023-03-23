import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InputState {
  email: { enteredValue: string };
}

const initialState: InputState = {
  email: { enteredValue: '' },
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    inputUpdate(state, action: PayloadAction<{ value: string }>) {
      const { value } = action.payload;
      state.email.enteredValue = value;
    },
    inputReset(state) {
      state.email.enteredValue = '';
    },
  },
});

export const { inputUpdate, inputReset } = inputSlice.actions;

export default inputSlice.reducer;
