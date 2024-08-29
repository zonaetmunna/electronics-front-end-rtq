/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const BannerSection = () => {
	const banners = [
		{
			id: 1,
			title: 'Exclusive collection for everyone',
			subtitle: 'In this season, find the best 🔥',
			image: '/path/to/image1.png', // Replace with actual image path
			bgColor: 'bg-green-100',
		},
		{
			id: 2,
			title: 'Discover the trendiest styles',
			subtitle: 'Find your perfect outfit today',
			image: '/path/to/image2.png', // Replace with actual image path
			bgColor: 'bg-blue-100',
		},
		{
			id: 3,
			title: 'New arrivals are here!',
			subtitle: 'Upgrade your wardrobe now',
			image: '/path/to/image3.png', // Replace with actual image path
			bgColor: 'bg-pink-100',
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrev = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1));
	};

	useEffect(() => {
		const interval = setInterval(handleNext, 5000); // Auto-slide every 5 seconds
		return () => clearInterval(interval);
	}, [currentIndex]);

	return (
		<div className="">
			<div className="relative w-full h-[600px] overflow-hidden">
				<motion.div
					className="flex h-full"
					initial={{ x: '-100%' }}
					animate={{ x: `-${currentIndex * 100}%` }}
					transition={{ duration: 0.5 }}
				>
					{banners?.map((banner) => (
						<motion.div
							key={banner.id}
							className={`min-w-full h-full flex items-center justify-between ${banner.bgColor} px-40`}
						>
							<div className="flex-1 px-10 ">
								<h4 className="text-lg font-medium text-gray-600">{banner.subtitle}</h4>
								<h2 className="text-5xl font-bold text-gray-900 my-4">{banner.title}</h2>
								<button
									type="button"
									className="bg-black text-white py-3 px-6 rounded-full shadow-lg flex items-center"
								>
									Explore now <FaChevronRight className="ml-2" />
								</button>
							</div>
							<div className="flex-1 flex justify-end px-10 container mx-auto">
								<img
									src={banner.image}
									alt={banner.title}
									className="h-full max-w-md object-contain"
								/>
							</div>
						</motion.div>
					))}
				</motion.div>

				<button
					type="button"
					onClick={handlePrev}
					className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-300"
				>
					<FaChevronLeft />
				</button>

				<button
					type="button"
					onClick={handleNext}
					className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-300"
				>
					<FaChevronRight />
				</button>

				<div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
					{banners.map((_, index) => (
						<div
							key={index}
							className={`w-3 h-3 rounded-full ${
								index === currentIndex ? 'bg-black' : 'bg-gray-400'
							}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default BannerSection;
