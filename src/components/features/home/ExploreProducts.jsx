import ProductCard from '../../molecules/ProductCard';
import ProductCardSkeleton from '../../molecules/ProductCardSkeleton';

const ExploreProducts = ({ products, isLoading }) => {
	return (
		<div className="my-10">
			<div className="container mx-auto px-4 py-8">
				<h3 className="text-center text-black text-2xl font-semibold ">Explore Products</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
					{isLoading
						? // Skeleton loader while loading
							Array.from({ length: 8 }, (_, index) => <ProductCardSkeleton key={index} />)
						: // eslint-disable-next-line no-underscore-dangle
							products?.map((product) => <ProductCard product={product} key={product._id} />)}
					{!isLoading && products?.length === 0 && (
						<p className="text-center">No products found.</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default ExploreProducts;
