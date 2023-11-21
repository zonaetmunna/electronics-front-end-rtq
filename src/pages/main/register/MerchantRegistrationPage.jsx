import { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { FaChevronLeft } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '../../../components/atoms/Button';
import Label from '../../../components/atoms/Label';
import { useRegisterMutation } from '../../../features/auth/authApi';

const MerchantRegistrationPage = () => {
	const [postUser] = useRegisterMutation();
	const {
		user: { email },
	} = useSelector((state) => state.auth);
	const { handleSubmit, register, control } = useForm({
		defaultValues: { email },
	});
	const [countries, setCountries] = useState([]);
	const term = useWatch({ control, name: 'term' });
	const navigate = useNavigate();

	useEffect(() => {
		fetch('https://restcountries.com/v3.1/all')
			.then((res) => res.json())
			.then((data) => setCountries(data));
	}, []);

	const onSubmit = (data) => {
		postUser({ ...data, role: 'merchant' });
	};

	return (
		<div className="pt-14">
			<Button
				onClick={() => navigate('/register')}
				className="cursor-pointer w-fit mt-5 flex items-center"
			>
				<FaChevronLeft />
				<p>back</p>
			</Button>
			<div className="flex justify-center items-center overflow-auto p-10">
				<form
					className="bg-secondary/20 shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between"
					onSubmit={handleSubmit(onSubmit)}
				>
					<h1 className="w-full text-2xl text-primary mb-5">merchant</h1>
					<div className="flex flex-col w-full max-w-xs">
						<Label className="mb-2" htmlFor="firstName">
							First Name
						</Label>
						{/* eslint-disable-next-line react/jsx-props-no-spreading */}
						<input type="text" id="firstName" {...register('firstName')} />
					</div>
					<div className="flex flex-col w-full max-w-xs">
						<Label className="mb-2" htmlFor="lastName">
							Last Name
						</Label>
						{/* eslint-disable-next-line react/jsx-props-no-spreading */}
						<input type="text" id="lastName" {...register('lastName')} />
					</div>
					<div className="flex flex-col w-full max-w-xs">
						<Label className="mb-2" htmlFor="email">
							Email
						</Label>
						{/* eslint-disable-next-line react/jsx-props-no-spreading */}
						<input type="email" id="email" {...register('email')} />
					</div>
					<div className="flex flex-col w-full max-w-xs">
						<h1 className="mb-3">Gender</h1>
						<div className="flex gap-3">
							<div>
								{/* eslint-disable-next-line react/jsx-props-no-spreading */}
								<input type="radio" id="male" {...register('gender')} value="male" />
								<Label className="ml-2 text-lg" htmlFor="male">
									Male
								</Label>
							</div>
							<div>
								{/* eslint-disable-next-line react/jsx-props-no-spreading */}
								<input type="radio" id="female" {...register('gender')} value="female" />
								<Label className="ml-2 text-lg" htmlFor="female">
									Female
								</Label>
							</div>
							<div>
								{/* eslint-disable-next-line react/jsx-props-no-spreading */}
								<input type="radio" id="other" {...register('gender')} value="other" />
								<Label className="ml-2 text-lg" htmlFor="other">
									Other
								</Label>
							</div>
						</div>
					</div>
					<hr className="w-full mt-2 bg-black" />
					<div className="flex flex-col w-full max-w-xs">
						<Label className="mb-3" htmlFor="country">
							Country
						</Label>
						{/* eslint-disable-next-line react/jsx-props-no-spreading */}
						<select {...register('country')} id="country">
							{countries
								.sort((a, b) => a?.name?.common?.localeCompare(b?.name?.common))
								.map(({ name }) => (
									<option value={name.common}>{name.common}</option>
								))}
						</select>
					</div>
					<div className="flex flex-col w-full max-w-xs">
						<Label className="mb-2" htmlFor="address">
							Street Address
						</Label>
						{/* eslint-disable-next-line react/jsx-props-no-spreading */}
						<input type="text" {...register('address')} id="address" />
					</div>
					<div className="flex flex-col w-full max-w-xs">
						<Label className="mb-2" htmlFor="city">
							City
						</Label>
						{/* eslint-disable-next-line react/jsx-props-no-spreading */}
						<input type="text" {...register('city')} id="city" />
					</div>
					<div className="flex flex-col w-full max-w-xs">
						<Label className="mb-2" htmlFor="postcode">
							Postal Code
						</Label>
						{/* eslint-disable-next-line react/jsx-props-no-spreading */}
						<input type="text" {...register('postcode')} id="postcode" />
					</div>

					<div className="flex justify-between items-center w-full mt-3">
						<div className="flex  w-full max-w-xs">
							{/* eslint-disable-next-line react/jsx-props-no-spreading */}
							<input className="mr-3" type="checkbox" {...register('term')} id="terms" />
							<Label htmlFor="terms">I agree to terms and conditions</Label>
						</div>
						<Button disabled={!term} className="btn" type="submit">
							Submit
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default MerchantRegistrationPage;
