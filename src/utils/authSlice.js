import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ""
}

export const LoginUser = createAsyncThunk("user/LoginUser", async (user, thunkApi) => {
  try {
    const response = await axios.post("http://195.35.14.176:3000/api/v1/loginadmin", {
      email: user.email,
      password: user.password
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.message
      return thunkApi.rejectWithValue(message)
    }
  }
})

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(LoginUser.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload
    })
  }
})

export const {reset} = authSlice.actions
export default authSlice.reducer;