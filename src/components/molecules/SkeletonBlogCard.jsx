const SkeletonBlogCard = () => {
	return (
		<div className="bg-gray-200 shadow-md rounded-md overflow-hidden animate-pulse">
			<div className="w-full h-64 bg-gray-300" />
			<div className="px-4 py-6">
				<div className="w-3/4 h-4 mb-2 bg-gray-300" />
				<div className="w-full h-6 mb-2 bg-gray-300" />
				<div className="w-full h-6 mb-2 bg-gray-300" />
				<div className="flex justify-between">
					<div className="w-1/4 h-6 bg-gray-300" />
					<div className="w-1/4 h-6 bg-gray-300" />
				</div>
				<div className="w-1/2 h-8 mt-4 bg-gray-300" />
			</div>
		</div>
	);
};

export default SkeletonBlogCard;
