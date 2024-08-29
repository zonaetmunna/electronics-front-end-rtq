import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

import Button from '../../../components/atoms/Button';
import Label from '../../../components/atoms/Label';

const ProfileInformationPage = () => {
	const {
		user: { name },
	} = useSelector((state) => state.auth);
	const {
		register,
		handleSubmit,
		formState: { errors, isDirty },
	} = useForm({
		defaultValues: {
			firstName: name,
			lastName: name,
			image: '',
			phone: '',
			address: '',
		},
	});

	// eslint-disable-next-line no-unused-vars
	const onSubmit = (data) => {
		// Simulate a delay before showing a success toast
		setTimeout(() => {
			toast.success('Profile updated successfully!');
		}, 1000);
	};

	return (
		<div className="rounded-lg shadow p-6">
			<h1 className="text-2xl font-semibold mb-4">Profile Information</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-4">
					<Label className="block text-gray-700 font-medium mb-2">First Name</Label>
					<input
						type="text"
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...register('firstName')}
						className={`w-1/2 md:w-1/3 bg-gray-100 border ${
							errors.firstName ? 'border-red-500' : 'border-gray-300'
						} rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-300`}
					/>
				</div>
				<div className="mb-4">
					<Label className="block text-gray-700 font-medium mb-2">Last Name</Label>
					<input
						type="text"
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...register('lastName')}
						className={`w-1/2 md:w-1/3 bg-gray-100 border ${
							errors.lastName ? 'border-red-500' : 'border-gray-300'
						} rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-300`}
					/>
				</div>
				<div className="mb-4">
					<Label className="block text-gray-700 font-medium mb-2">Image</Label>
					<input
						type="file"
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...register('image')}
						className={`w-1/2 md:w-1/3 bg-gray-100 border ${
							errors.image ? 'border-red-500' : 'border-gray-300'
						} rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-300`}
					/>
				</div>
				<div className="mb-4">
					<Label className="block text-gray-700 font-medium mb-2">Phone</Label>
					<input
						type="tel"
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...register('phone')}
						className={`w-1/2 md:w-1/3 bg-gray-100 border ${
							errors.phone ? 'border-red-500' : 'border-gray-300'
						} rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-300`}
					/>
				</div>
				<div className="mb-4">
					<Label className="block text-gray-700 font-medium mb-2">Address</Label>
					<textarea
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...register('address')}
						className={`w-1/2 md:w-1/3 bg-gray-100 border ${
							errors.address ? 'border-red-500' : 'border-gray-300'
						} rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-300`}
					/>
				</div>
				<div className="mb-4">
					<Button
						type="submit"
						disabled={!isDirty} // Disable the button if form is not modified
						className={`bg-blue-500 ${
							!isDirty ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
						} text-white px-4 py-2 rounded-md`}
					>
						Update Profile
					</Button>
				</div>
			</form>
		</div>
	);
};

export default ProfileInformationPage;
