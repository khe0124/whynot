import { createSlice } from '@reduxjs/toolkit';

export const WindowSlice = createSlice({
  name: 'window',
  initialState: {
    windowSize: { width: window.innerWidth, height: window.innerHeight },
  },
  reducers: {
    setWindowSize: (state, action) => {
      state.windowSize.width = action.payload.width;
      state.windowSize.height = action.payload.height;
    },
  },
});

export const { setWindowSize } = WindowSlice.actions;
export default WindowSlice.reducer;
