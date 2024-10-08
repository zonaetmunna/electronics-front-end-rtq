/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Discover = () => {
	const carouselData = [
		{
			id: 1,
			title: 'Explore new arrivals',
			subtitle: 'Shop the latest from top brands',
			image: '/path/to/image1.png', // Replace with actual image path
			bgColor: 'bg-yellow-50',
		},
		{
			id: 2,
			title: 'Digital gift cards',
			subtitle: 'Give the gift of choice',
			image: '/path/to/image2.png', // Replace with actual image path
			bgColor: 'bg-pink-50',
		},
		{
			id: 3,
			title: 'Sale collection',
			subtitle: 'Up to 80% off retail',
			image: '/path/to/image3.png', // Replace with actual image path
			bgColor: 'bg-blue-50',
		},
		{
			id: 4,
			title: 'Sale arrivals',
			subtitle: 'Up to 80% off retail',
			image: '/path/to/image3.png', // Replace with actual image path
			bgColor: 'bg-blue-50',
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const carouselRef = useRef(null);

	const handlePrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		} else {
			setCurrentIndex(carouselData.length - 1);
		}
	};

	const handleNext = () => {
		if (currentIndex < carouselData.length - 1) {
			setCurrentIndex(currentIndex + 1);
		} else {
			setCurrentIndex(0);
		}
	};

	useEffect(() => {
		const cardWidth = carouselRef.current.firstChild.offsetWidth;
		carouselRef.current.scrollTo({
			left: cardWidth * currentIndex,
			behavior: 'smooth',
		});
	}, [currentIndex]);

	return (
		<div className="my-10">
			<div className="container mx-auto px-4">
				<div className="relative w-full py-8">
					<div className="flex justify-between items-center">
						<h2 className="text-3xl font-bold">
							Discover more. <span className="text-gray-500">Good things are waiting for you</span>
						</h2>
						<div className="flex space-x-2">
							<button
								type="button"
								onClick={handlePrev}
								className="bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
							>
								<FaChevronLeft />
							</button>
							<button
								type="button"
								onClick={handleNext}
								className="bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
							>
								<FaChevronRight />
							</button>
						</div>
					</div>

					<div ref={carouselRef} className="flex mt-6 space-x-4 overflow-hidden">
						{carouselData.map((item) => (
							<div
								key={item.id}
								className={`min-w-[300px] md:min-w-[400px] lg:min-w-[500px] ${item.bgColor} p-6 rounded-lg flex flex-col justify-between items-start shadow-md`}
							>
								<div>
									<h4 className="text-xl font-semibold mb-2">{item.title}</h4>
									<p className="text-gray-700 mb-4">{item.subtitle}</p>
									<button
										type="button"
										className="bg-white text-gray-800 py-2 px-4 rounded-full shadow"
									>
										Show me all
									</button>
								</div>
								<img src={item.image} alt={item.title} className="h-40 self-end" />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Discover;
