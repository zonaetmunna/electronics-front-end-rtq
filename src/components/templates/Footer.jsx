const Footer = () => {
	return (
		<div className="bg-white px-4 py-8">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					<div className="">
						<h4 className="text-white font-bold text-lg">About us</h4>
						<p className="text-teal-500">
							We know there are a lot of threa developers out there, but we pride ourselves as a
							firm in the industry.
						</p>
					</div>

					<div className="">
						<h4 className="text-white font-bold text-lg">Feature</h4>
						<p className="text-teal-500">About us</p>
						<p className="text-teal-500">Terms and conditions</p> {/* Fix typo */}
						<p className="text-teal-500">Best Products</p>
					</div>

					<div className="">
						<h4 className="text-white font-bold text-lg">General links</h4>
						<p className="text-teal-500">Blogs</p>
						<p className="text-teal-500">Tracking Order</p>
						<p className="text-teal-500">Become a Seller</p> {/* Fix typo */}
					</div>

					<div className="">
						<h4 className="text-white font-bold text-lg">Helpful</h4>
						<p className="text-teal-500">FAQ</p> {/* Fix typo */}
						<p className="text-teal-500">Support</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
