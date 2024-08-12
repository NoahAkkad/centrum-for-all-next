import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ContentState {
  videoText: string;
  // add other state fields as needed
}

const initialState: ContentState = {
  videoText: "Vi är mer än glada att hjälpa dig med din förfrågan",
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setMainQuery: (state, action: PayloadAction<string>) => {
      state.mainQuery = action.payload;
    },
    // add other reducers as needed
  },
});

// Selector
export const getContentData = (state: { content: ContentState }) => state.content;

export const { setMainQuery } = contentSlice.actions;
export default contentSlice.reducer;
