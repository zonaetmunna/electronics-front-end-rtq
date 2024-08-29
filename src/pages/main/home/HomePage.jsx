/* eslint-disable prettier/prettier */
import BannerCarousal from '../../../components/features/home/BannerCarousal';
import BannerSection from '../../../components/features/home/BannerSection';
import Discover from '../../../components/features/home/Discover';
import ExploreProducts from '../../../components/features/home/ExploreProducts';
import MainBanner from '../../../components/features/home/MainBanner';
import OfferBanner from '../../../components/organisms/OfferBanner';
import PopularProducts from '../../../components/organisms/PopularProducts';
import ProductDeliveryProcessBanner from '../../../components/organisms/ProductDeliveryProcessBanner';
import { useGetProductsQuery } from '../../../features/product/productApi';

const HomePage = () => {
	const { data, isLoading, isError, error } = useGetProductsQuery({});
	const products = data?.data;

	return (
		<div className="bg-white">
      <BannerSection/>
			<MainBanner />
      <BannerCarousal products={products} isError={isError} isLoading={isLoading} error={error}/>
      <Discover/>
			<PopularProducts products={products} />
      {/* <BestSellProducts products={products} /> */}
      <ExploreProducts products={products} isLoading={isLoading}/>
			<ProductDeliveryProcessBanner />
			<OfferBanner />
		</div>
	);
};

export default HomePage;
