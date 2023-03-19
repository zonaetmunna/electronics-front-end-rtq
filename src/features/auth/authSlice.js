import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const initialState = {
  user: { email: "", role: "" },
  isLoading: false,
  isError: false,
  error: "",
};

// asyncThunk
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async ({ email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    console.log(data.user.email);
    return data.user.email;
  }
);

export const getUser = createAsyncThunk("auth/getUser", async (email) => {
  const res = await fetch(
    `${process.env.REACT_APP_DEV_API}/auth/user/${email}`
  );
  const data = await res.json();

  if (data.status) {
    return data;
  }

  return email;
});

// slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signout: (state) => {
      state.user = {};
    },
    // subscribed user
    subscribedUser: (state, action) => {
      state.user.email = action.payload;
      state.isLoading = false;
    },
    // toggleLoading
    toggleLoading: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.user.email = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.error = "";
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.user.email = "";
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.status) {
          state.user = action.payload.data;
        } else {
          state.user = action.payload;
        }

        state.isError = false;
        state.error = "";
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = "";
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export const { signout, subscribedUser, toggleLoading } = authSlice.actions;

export default authSlice.reducer;
