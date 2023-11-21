import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import loginImage from '../../assets/images/login-image.jpg';
import Button from '../../components/atoms/Button';
import Label from '../../components/atoms/Label';
import { login, signInWithGoogle } from '../../features/auth/authSlice';

const LoginPage = () => {
	const { register, handleSubmit, reset } = useForm();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const {
		isLoading,
		isError,
		error,
		user: { email },
	} = useSelector((state) => state.auth);

	const onSubmit = (data) => {
		const loginData = {
			email: data.email,
			password: data.password,
		};
		dispatch(login(loginData));
		reset();
	};

	const handleGoogleSignIn = () => {
		dispatch(signInWithGoogle());
	};

	useEffect(() => {
		if (!isLoading && email) {
			navigate('/');
		}
	}, [email, isLoading, navigate]);

	useEffect(() => {
		if (isError) {
			toast.error(error);
		}
	}, [error, isError]);

	return (
		<div className="flex h-screen items-center">
			<div className="w-1/2 flex items-center justify-center">
				<img src={loginImage} className="max-h-96" alt="" />
			</div>
			<div className="w-1/2 grid place-items-center bg-gray-50">
				<div className="bg-white shadow-lg rounded-lg p-10">
					<h1 className="mb-10 font-medium text-2xl text-gray-800">Login</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="space-y-4">
							<div className="flex flex-col items-start">
								<Label htmlFor="email" className="mb-1 text-gray-800 font-semibold">
									Email
								</Label>
								<input
									type="email"
									// eslint-disable-next-line react/jsx-props-no-spreading
									{...register('email')}
									id="email"
									className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-primary"
								/>
							</div>
							<div className="flex flex-col items-start">
								<Label htmlFor="password" className="mb-1 text-gray-800 font-semibold">
									Password
								</Label>
								<input
									type="password"
									id="password"
									// eslint-disable-next-line react/jsx-props-no-spreading
									{...register('password')}
									className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-primary"
								/>
							</div>
							<div className="relative">
								<Button
									type="submit"
									className="font-bold text-white py-3 rounded-full bg-primary w-full hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50"
								>
									{isLoading ? 'Loading...' : 'Login'}
								</Button>
							</div>
						</div>
					</form>
					{/* google sign in */}
					<div className="mt-6 rounded-md shadow-md">
						<Button
							type="button"
							className="px-4 py-4 text-base font-medium text-gray-700"
							onClick={handleGoogleSignIn}
							// disabled={isLoading}
						>
							Sign In with Google
						</Button>
					</div>
					{isError && <span className="text-red-500">{error}</span>}
					<div>
						<p className="text-gray-800">
							Dont have an account?{' '}
							<Button
								type="button"
								className="text-primary hover:underline cursor-pointer"
								onClick={() => navigate('/signup')}
							>
								Sign up
							</Button>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
