import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentUser: null,
};

const userSlice = createSlice({
  name: 'userData',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser: (state, action) => {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
  },
});


export const {setCurrentUser,toggleMenuHidden} = userSlice.actions;

export default userSlice.reducer;