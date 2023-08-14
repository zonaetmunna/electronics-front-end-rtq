import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const initialState = {
  user: {
    _id: "",
    firstName: "",
    email: "",
    role: "",
    profileImage: "",
    token: "",
  },
  isLoading: true,
  isError: false,
  error: "",
};

// asyncThunk for signup and login sign in with google
export const signupUser = createAsyncThunk(
  "auth/signup",
  async (data, thunkAPI) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_DEV_API}/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      console.log(result);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_DEV_API}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const result = await response.json();
      console.log(result);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// sign in with google popup
export const signInWithGoogle = createAsyncThunk(
  "auth/signInWithGoogle",
  async (_, thunkAPI) => {
    try {
      const provider = new GoogleAuthProvider();
      const authResult = await signInWithPopup(auth, provider);

      // Here, you can access user data from authResult.user and send it to your backend
      const user = authResult.user;
      console.log(user);
      const userData = {
        firstName: user.displayName,
        email: user.email,
        image: user.photoURL,
        // _id: user.uid,
      };

      console.log(userData);
      // return userData;
      const response = await fetch(
        "http://localhost:5000/api/v1/auth/google-signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      const result = await response.json();
      console.log(result.data);

      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = { _id: "", name: "", email: "", role: "", profileImage: "" };
    },
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.error = "";
    },
    clearError: (state) => {
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signupUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = "";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
    builder.addCase(signInWithGoogle.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = "";
    });
    builder.addCase(signInWithGoogle.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(signInWithGoogle.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  },
});

export const { logout, clearError, reset } = authSlice.actions;

export default authSlice.reducer;
