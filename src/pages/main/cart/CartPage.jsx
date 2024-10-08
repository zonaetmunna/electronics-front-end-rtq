/* eslint-disable prettier/prettier */
import { useEffect } from 'react';
import { MdRemoveCircleOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '../../../components/atoms/Button';
import Label from '../../../components/atoms/Label';
import TextInputField from '../../../components/atoms/TextInputField';
import ShippingOption from '../../../components/organisms/ShippingOption';
import {
  applyDiscountCode,
  removeFromCart,
  setDiscountCode,
  setTotal,
  updateQuantity,
} from '../../../features/cart/cartSlice';

const CartPage = () => {
	const { cart, subtotal, discountCode, total, shippingCost } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	// remove product from cart
	const handleRemoveProductCart = (id) => {
		// eslint-disable-next-line no-underscore-dangle
		const itemIndex = cart.findIndex((item) => item._id === id);
		if (itemIndex !== -1) {
			dispatch(removeFromCart(id));
		}
	};

	const handleUpdateQuantity = (id, quantity) => {
		dispatch(updateQuantity({ id, quantity }));
	};

	const handleApplyDiscount = () => {
		dispatch(applyDiscountCode(document.getElementById('coupon').value));
	};

	useEffect(() => {
		dispatch(setTotal(subtotal + shippingCost - discountCode));
	}, [subtotal, shippingCost, discountCode, dispatch]);

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<h1 className="text-2xl font-bold mb-4">Cart</h1>
			{cart.length > 0 ? (
				<>
					<table className="w-full">
						<thead>
							<tr className="border-b border-gray-400">
								<th className="text-left font-normal py-2 w-2/5">Item</th>
								<th className="text-left font-normal py-2">Price</th>
								<th className="text-left font-normal py-2">Quantity</th>
								<th className="text-left font-normal py-2">Total</th>
								<th className="text-left font-normal py-2">Actions</th>
							</tr>
						</thead>
						<tbody>
							{cart.map((item) => (
								// eslint-disable-next-line no-underscore-dangle
								<tr key={item?._id} className="border-b border-gray-400">
									<td className="py-4">
										<div className="flex items-center">
											<img
												className="h-16 w-16 object-cover rounded"
												src={item.image}
												alt={item.name}
											/>
											<div className="ml-4">
												<h2 className="font-bold text-lg">{item.name}</h2>
											</div>
										</div>
									</td>
									<td className="py-4">${item.price}</td>
									<td className="py-4">
										<input
											type="number"
											className="w-16 border border-gray-400 rounded py-1 px-2"
											value={item.quantity}
											// eslint-disable-next-line no-underscore-dangle
											onChange={(e) => handleUpdateQuantity(item._id, e.target.value)}
											min={1}
											max={10}
										/>
									</td>
									<td className="py-4">${item.price * item.quantity}</td>
									<td className="py-4">
										<Button
											type="button"
											className="hover:text-red-600"
											// eslint-disable-next-line no-underscore-dangle
											onClick={() => handleRemoveProductCart(item._id)}
										>
											<MdRemoveCircleOutline className="h-6 w-6 fill-current" />
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<div className="flex justify-between mt-8">
						<div className="flex items-center">
							<span className="text-lg font-bold">Subtotal:</span>
							<span className="text-lg font-bold ml-2">${subtotal}</span>
						</div>
						{/*  */}
						<div className="flex-shrink-0 bg-gray-100 p-5">
							{/*  */}
							<ShippingOption shippingCost={shippingCost} />
							<div className="flex flex-row justify-between items-center w-full my-4">
								<Label htmlFor="coupon" className="font-bold mr-2">
									Coupon Code:
								</Label>
								<TextInputField
									type="text"
									name="coupon"
									id="coupon"
									className="border rounded py-2 px-3"
									value={discountCode}
									onChange={(e) => dispatch(setDiscountCode(e.target.value))}
								/>
								<Button
									type="button"
									className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ml-2"
									onClick={handleApplyDiscount}
								>
									Apply
								</Button>
							</div>
							<div className="flex justify-between items-center my-5">
								<span className="text-lg font-bold">Total:</span>
								<span className="text-lg font-bold">${total}</span>
							</div>
							<Button
								type="button"
								className="bg-blue-500 text-white py-2 px-4 my-5 rounded hover:bg-blue-600"
								onClick={() => navigate('/checkout')}
							>
								Checkout
							</Button>
						</div>
					</div>
				</>
			) : (
				<p className="text-lg">Your cart is empty</p>
			)}
		</div>
	);
};

export default CartPage;
