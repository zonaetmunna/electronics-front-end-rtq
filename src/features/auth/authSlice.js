/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

// Initial state for the auth slice
const initialState = {
	user: null,
	token: null,
};

// Auth slice using createSlice from Redux Toolkit
const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action) => {
			const { user, token } = action.payload;
			state.user = user;
			state.token = token;
		},
		logout: (state) => {
			state.user = null;
			state.token = null;
		},
	},
});

// Exporting the actions from the slice
export const { setUser, logout } = authSlice.actions;

// Exporting the reducer as default
export default authSlice.reducer;

// Selectors to get the current token and user from the state
export const useCurrentToken = (state) => state.auth.token;
export const selectCurrentUser = (state) => state.auth.user;

/* import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import auth from '../../firebase/firebase.config';

const initialState = {
	user: {
		_id: '',
		firstName: '',
		email: '',
		role: '',
		profileImage: '',
		token: '',
	},
	isLoading: true,
	isError: false,
	error: '',
};

export const signupUser = createAsyncThunk('auth/signup', async (data, thunkAPI) => {
	try {
		const response = await fetch(`${process.env.REACT_APP_DEV_API}/auth/signup`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		const result = await response.json();
		return result.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const login = createAsyncThunk('auth/login', async ({ email, password }, thunkAPI) => {
	try {
		const response = await fetch(`${process.env.REACT_APP_DEV_API}/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		});
		const result = await response.json();
		return result.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

// sign in with google popup
export const signInWithGoogle = createAsyncThunk('auth/signInWithGoogle', async (_, thunkAPI) => {
	try {
		const provider = new GoogleAuthProvider();
		const authResult = await signInWithPopup(auth, provider);

		const { user } = authResult;
		const userData = {
			firstName: user.displayName,
			email: user.email,
			image: user.photoURL,
		};

		// return userData;
		const response = await fetch('http://localhost:5000/api/v1/auth/google-signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData),
		});

		const result = await response.json();

		return result.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: (state) => {
			state.user = { _id: '', name: '', email: '', role: '', profileImage: '' };
		},
		reset: (state) => {
			state.isLoading = false;
			state.isError = false;
			state.error = '';
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
			state.error = '';
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
			state.error = '';
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
 */
