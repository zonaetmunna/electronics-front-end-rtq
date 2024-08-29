import { useState } from 'react';

import Button from '../atoms/Button';
import ProductCard from '../molecules/ProductCard';

const TopRated = ({ products }) => {
	return (
		<div className="mb-8">
			<h2 className="text-lg font-semibold mb-2">Top Rated</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{products?.map((product) => (
					// eslint-disable-next-line no-underscore-dangle
					<ProductCard key={product._id} product={product} />
				))}
			</div>
		</div>
	);
};

const BestSelling = ({ products }) => {
	return (
		<div className="mb-8">
			<h2 className="text-lg font-semibold mb-2">Best Selling</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{products?.map((product) => (
					// eslint-disable-next-line no-underscore-dangle
					<ProductCard key={product._id} product={product} />
				))}
			</div>
		</div>
	);
};

const Latest = ({ products }) => {
	return (
		<div className="mb-8">
			<h2 className="text-lg font-semibold mb-2">Latest</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{products?.map((product) => (
					// eslint-disable-next-line no-underscore-dangle
					<ProductCard key={product._id} product={product} />
				))}
			</div>
		</div>
	);
};

const PopularProducts = ({ products }) => {
	const [selectedTab, setSelectedTab] = useState('topRated');

	const handleTabClick = (tab) => {
		setSelectedTab(tab);
	};

	let tabContent;
	if (selectedTab === 'topRated') {
		tabContent = <TopRated products={products} />;
	} else if (selectedTab === 'bestSelling') {
		tabContent = <BestSelling products={products} />;
	} else if (selectedTab === 'latest') {
		tabContent = <Latest products={products} />;
	}

	return (
		<div className="my-10 ">
			<div className="container mx-auto bg-gray-200 py-10 px-4 flex flex-col items-center rounded-lg">
				<h2 className="text-2xl font-semibold text-center">Popular Products</h2>
				<div className="flex space-x-4 mb-4 bg-white items-center justify-center w-full md:w-1/2 rounded-full py-2 mt-5">
					<Button
						className={`px-4 py-2 rounded shadow-md ${
							selectedTab === 'topRated' ? 'bg-black text-white rounded-full' : ''
						}`}
						onClick={() => handleTabClick('topRated')}
					>
						Top Rated
					</Button>
					<Button
						className={`px-4 py-2 rounded ${
							selectedTab === 'bestSelling' ? 'bg-black text-white rounded-full' : ''
						}`}
						onClick={() => handleTabClick('bestSelling')}
					>
						Best Selling
					</Button>
					<Button
						className={`px-4 py-2 rounded ${selectedTab === 'latest' ? 'bg-black text-white rounded-full' : ''}`}
						onClick={() => handleTabClick('latest')}
					>
						Latest
					</Button>
				</div>
				<div>{tabContent}</div>
			</div>
		</div>
	);
};

export default PopularProducts;
