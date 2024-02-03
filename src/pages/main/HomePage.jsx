import ProductCard from '../../components/molecules/ProductCard';
import ProductCardSkeleton from '../../components/molecules/ProductCardSkeleton';
import Slider from '../../components/molecules/Slider';
import MainBanner from '../../components/organisms/MainBanner';
import MiddleBanner from '../../components/organisms/MiddleBanner';
import OfferBanner from '../../components/organisms/OfferBanner';
import PopularProducts from '../../components/organisms/PopularProducts';
import { useGetProductsQuery } from '../../features/product/productApi';

const HomePage = () => {
	const { data, isLoading, isError, error } = useGetProductsQuery({});
	const products = data?.data;

	return (
		<div className="bg-gray-100">
			<MainBanner />

			<div className=" bg-gray-100 container mx-auto ">
				{isError && <p className="text-center text-red-500">{error.message}</p>}
				{isLoading ? (
					// Skeleton loader while loading
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
						{Array.from({ length: 8 }, (_, index) => (
							<ProductCardSkeleton key={index} />
						))}
					</div>
				) : (
					<Slider products={products} />
				)}
			</div>

			<div>{products && <PopularProducts products={products} />}</div>

			<div className="container mx-auto px-4 py-8">
				<h3 className="text-center text-yellow-500 text-2xl font-semibold mb-4">ALL Products</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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

			<MiddleBanner />

			<OfferBanner />
		</div>
	);
};

export default HomePage;
