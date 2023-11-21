import { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import loginImage from '../../assets/images/login-image.jpg';
import Button from '../../components/atoms/Button';
import Label from '../../components/atoms/Label';
import { signInWithGoogle, signupUser } from '../../features/auth/authSlice';

const SignupPage = () => {
	const {
		user: { email },
		isLoading,
		isError,
		error,
	} = useSelector((state) => state.auth);
	const { handleSubmit, register, reset, control } = useForm();
	const password = useWatch({ control, name: 'password' });
	const confirmPassword = useWatch({ control, name: 'confirmPassword' });
	const navigate = useNavigate();
	const [disabled, setDisabled] = useState(true);

	const dispatch = useDispatch();

	useEffect(() => {
		if (
			password !== undefined &&
			password !== '' &&
			confirmPassword !== undefined &&
			confirmPassword !== '' &&
			password === confirmPassword
		) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [password, confirmPassword]);

	const onSubmit = async (data) => {
		const signupData = {
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
			password: data.password,
		};
		try {
			await dispatch(signupUser(signupData));

			toast.success('User created successfully!');
			reset();
			navigate('/');
		} catch (error) {
			toast.error('Something went wrong!');
		}
	};

	const handleGoogleSignIn = () => {
		dispatch(signInWithGoogle());
	};

	// redirect
	useEffect(() => {
		if (!isLoading && email) {
			navigate('/');
		}
	}, [email, isLoading, navigate]);

	// error
	useEffect(() => {
		if (isError) {
			toast.error('Something went wrong!', error);
		}
	}, [isError, error]);

	return (
		<div className="flex items-center bg-gray-50">
			<div className="hidden md:block w-1/2 h-full p-20">
				<img src={loginImage} className="h-full w-full object-cover" alt="" />
			</div>
			<div className="w-full md:w-1/2 grid place-items-center">
				<div className="bg-white shadow-md rounded-lg p-10 md:p-20 w-full md:max-w-md">
					<h1 className="mb-10 font-medium text-2xl md:text-3xl text-center">Sign up</h1>
					{/* signup form */}
					<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
						<div className="space-y-1">
							<Label htmlFor="firstName" className="font-medium text-gray-700">
								First Name
							</Label>
							<input
								type="text"
								// eslint-disable-next-line react/jsx-props-no-spreading
								{...register('firstName')}
								className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
							/>
						</div>
						<div className="space-y-1">
							<Label htmlFor="lastName" className="font-medium text-gray-700">
								Email
							</Label>
							<input
								type="text"
								// eslint-disable-next-line react/jsx-props-no-spreading
								{...register('lastName')}
								className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
							/>
						</div>
						<div className="space-y-1">
							<Label htmlFor="email" className="font-medium text-gray-700">
								Email
							</Label>
							<input
								type="email"
								// eslint-disable-next-line react/jsx-props-no-spreading
								{...register('email')}
								className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
							/>
						</div>

						<div className="space-y-1">
							<Label htmlFor="password" className="font-medium text-gray-700">
								Password
							</Label>
							<input
								type="password"
								// eslint-disable-next-line react/jsx-props-no-spreading
								{...register('password')}
								className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
							/>
						</div>

						<div className="space-y-1">
							<Label htmlFor="confirm-password" className="font-medium text-gray-700">
								Confirm Password
							</Label>
							<input
								type="password"
								// eslint-disable-next-line react/jsx-props-no-spreading
								{...register('confirmPassword')}
								className="block w-full rounded-md border-gray--300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
							/>
						</div>
						<div className="mt-6">
							<Button
								type="submit"
								className="w-full px-4 py-2 text-base font-medium text-white bg-primary rounded-md hover:bg-primary-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-gray-300 disabled:cursor-not-allowed"
								disabled={disabled}
							>
								Sign up
							</Button>
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

					{/* login page link */}
					<div className="mt-8">
						<p className="mt-8 text-base font-medium text-gray-700">
							Already have an account?{' '}
							<Button
								className="text-primary hover:underline cursor-pointer"
								onClick={() => navigate('/login')}
							>
								Log in
							</Button>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignupPage;
